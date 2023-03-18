import { collection, getDocs } from 'firebase/firestore';
import { db } from './firestore';

export async function readData() {
  console.log('inside readData');
  let dbData = [];
  const querySnapshot = await getDocs(collection(db, 'birthdays'));
  querySnapshot.forEach((doc) => {
    dbData.push(doc.data());
  });

  return dbData;
}
