import { where, collection, query, addDoc } from "firebase/firestore";
import { db } from "../utils/firebase_config";
import { useEffect } from "react";

export default async function usePost(collectionName, data) {
  if (collectionName & data) {
    const docRef = collection(db, collectionName);
    try {
      const postRef = await addDoc(docRef, data);
      console.log("Document written with ID: ", postRef.id);
    } catch (err) {
      console.log("error message", err);
    }
  }
}
