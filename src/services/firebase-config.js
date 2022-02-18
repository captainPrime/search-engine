import 'firebase/storage'
import { initializeApp } from "firebase/app/"
import { getFirestore } from "@firebase/firestore/"
import { collection, getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore';
import config from "../utils/config";
const app = initializeApp(config);
export const db = getFirestore(app);
export const getDocument = async (name) => {
  return await getDocs(collection(db, name));
}
export const createDocument = async (name, payload) => {
  return await addDoc(collection(db, name), payload)
}
export const deleteDocument = async (name, id) => {
  const urlID = doc(db, name, id)
  return await deleteDoc(urlID);
}