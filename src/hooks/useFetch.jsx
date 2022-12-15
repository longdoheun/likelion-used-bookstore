import { getDocs, where, collection, query, limit } from "firebase/firestore";
import { db } from "../utils/firebase_config";
import { useState, useEffect, useCallback } from "react";

export default function useFetch(collectionName, field, fieldValue) {
  const [value, setValue] = useState([]);
  const docRef = collection(db, collectionName);

  let selectedQuery;

  switch (field) {
    case "division":
      selectedQuery = query(
        docRef,
        where("division", "==", fieldValue),
        limit(6)
      );
      break;

    case "category":
      selectedQuery = query(
        docRef,
        where("category", "==", fieldValue),
        limit(30)
      );
      break;

    default:
      selectedQuery = query(docRef, limit(30));
  }

  const fetchGroup = useCallback(async () => {
    try {
      const querySnapShot = await getDocs(selectedQuery);
      const response = querySnapShot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setValue(response);
    } catch (err) {
      console.log("fetch error", err);
    }
  }, [selectedQuery]);

  useEffect(() => {
    fetchGroup();
  }, [selectedQuery]);

  return value;
}
