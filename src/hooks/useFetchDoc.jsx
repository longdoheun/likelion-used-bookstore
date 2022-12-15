import { getDoc, doc } from "firebase/firestore";
import { db } from "../utils/firebase_config";
import { useState } from "react";
import { useEffect } from "react";

export default function useFetchDoc(collectionName, docId) {
  const [value, setValue] = useState({});
  // const docRef = collection(db, collectionName);
  const docRef = doc(db, collectionName, docId);

  const fetchDoc = async () => {
    try {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setValue({ ...docSnap.data() });
      } else {
        console.log("no such document written with", docId);
      }
    } catch (err) {
      console.log("fetch error", err);
    }
  };

  useEffect(() => {
    fetchDoc();
  }, []);

  return value;
}
