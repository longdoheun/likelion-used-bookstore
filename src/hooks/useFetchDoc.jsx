import { getDoc, doc } from "firebase/firestore";
import { db } from "../utils/firebase_config";
import { useState, useEffect, useCallback } from "react";

export default function useFetchDoc(collectionName, docId) {
  const [value, setValue] = useState({});
  const docRef = doc(db, collectionName, docId);

  const fetchDoc = useCallback(async () => {
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setValue({ ...docSnap.data() });
        console.log("fetch doc completely");
      } else {
        console.log("no such document written with", docId);
      }
    } catch (err) {
      console.log("fetch error", err);
    }
  }, [docRef, docId]);

  useEffect(() => {
    fetchDoc();
  }, []);

  return value;
}
