import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import BirthdayList from './components/BirthdayList';
import './App.css';
import data from './data';
import Home from './components/Home';
import AddBirthdayForm from './components/AddBirthdayForm';
import ConfigureEmails from './components/ConfigureEmails';
import { db } from './logic/firestore/firestore';
import { readData } from './logic/firestore/firestoreOperations';

function App() {
  const [people, setPeople] = useState(data);
  const [dbData, setDbData] = useState([]);

  useEffect(() => {
    (async () => {
      let data = await readData();
      setDbData(data);
      console.log(data);
    })();
  }, []);

  const addBirthday = async (name, dob, image, email) => {
    let newBday;
    setPeople((state) => {
      let newId;
      if (state.length !== 0) newId = state[state.length - 1].id + 1;
      else newId = 0;
      newBday = {
        id: newId,
        name: name,
        email: email,
        date: dob,
        image: image,
      };
      state.push(newBday);
      return state;
    });
    console.log('Birthday added to state!');
    console.log(people);

    try {
      const docRef = await addDoc(collection(db, 'birthdays'), newBday);
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/todays-birthdays"
          element={<BirthdayList people={people} />}
        />
        <Route
          path="/add-a-birthday"
          element={<AddBirthdayForm addBirthday={addBirthday} />}
        />
        <Route
          path="/configure-emails"
          element={<ConfigureEmails dbData={dbData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
