import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firestore';

export async function readData() {
  let dbData = [];
  const querySnapshot = await getDocs(collection(db, 'birthdays'));
  querySnapshot.forEach((doc) => {
    dbData.push(doc.data());
  });
  // console.log('dbdata inside readdata= ', dbData);
  return dbData;
}

export async function writeData(newBdayObject) {
  try {
    const docRef = await addDoc(collection(db, 'birthdays'), newBdayObject);
    // console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
