import { useState, useLayoutEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Crontab from 'reactjs-crontab';
import 'reactjs-crontab/dist/index.css';
import BirthdayList from './components/BirthdayList';
import './App.css';
import data from './data';
import Home from './components/Home';
import AddBirthdayForm from './components/AddBirthdayForm';
import ConfigureEmails from './components/ConfigureEmails';
import { readData, writeData } from './logic/firestore/firestoreOperations';
import { sendTodaysBirthdayMails, getTodaysBirthdays } from './logic/crud';

function App() {
  const [people, setPeople] = useState(data);
  const [dbData, setDbData] = useState([]);
  useLayoutEffect(() => {
    async function fetchData() {
      let data = await readData();
      setDbData(data);
    }
    fetchData();
  }, []);

  const addBirthday = async (name, dob, image, email) => {
    let newBday, newId;
    if (dbData.length !== 0) newId = dbData[dbData.length - 1].id + 1;
    else newId = 0;
    newBday = {
      id: newId,
      name: name,
      email: email,
      date: dob,
      image: image,
      sendEmail: true,
    };
    dbData.push(newBday);
    writeData(newBday);
    console.log('Birthday written to DB!');
  };

  const test = () => {
    console.log('inside test');
    const todaysDate = new Date().toISOString().split('T')[0];
    console.log('dbData= ', dbData);
    console.log('todaysDate= ', todaysDate);
    for (let user of dbData) {
      console.log('user.date= ', user.date);
      if (user.date === todaysDate) console.log('test cron');
    }
  };

  const tasks = [
    {
      fn: test, //working, need to change to correct function
      id: '1',
      config: '* * * * *', // this runs every day at 12 am and 0 mins
      name: '',
      description: '',
    },
  ];

  if (dbData.length === 0) {
    return <div>Loading data...</div>;
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/all-birthdays"
          element={<BirthdayList people={people} />}
        />
        <Route
          path="/todays-birthdays"
          element={<BirthdayList people={getTodaysBirthdays(dbData)} />}
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
      <div style={{ display: 'none' }}>
        <Crontab
          tasks={tasks}
          timeZone="Asia/Kolkata"
          dashboard={{ hidden: false }}
          hidden
        />
      </div>
    </div>
  );
}

export default App;
