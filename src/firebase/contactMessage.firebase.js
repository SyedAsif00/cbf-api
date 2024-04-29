import { db } from "./firebase.config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const addContactMessage = async (name, email, message) => {
  try {
    const docRef = await addDoc(collection(db, "contacts"), {
      name,
      email,
      message,
      timestamp: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    return null;
  }
};
