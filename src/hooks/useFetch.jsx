import { getDocs, where, collection, query, limit } from "firebase/firestore";
import { db } from "../utils/firebase_config";
import { useState, useEffect, useCallback } from "react";

export default function useFetch(collectionName, field, fieldValue) {
  const [value, setValue] = useState([]);

  const selectedQuery = useCallback(() => {
    if (collectionName) {
      const docRef = collection(db, collectionName);
      switch (field) {
        case "division":
          return query(docRef, where("division", "==", fieldValue), limit(6));

        case "category":
          return query(docRef, where("category", "==", fieldValue), limit(30));

        default:
          return query(docRef, limit(30));
      }
    } else return null;
  }, [collectionName, field, fieldValue]);

  const fetchDataAsync = async () => {
    const query = selectedQuery();
    if (query) {
      try {
        const querySnapShot = await getDocs(query);
        const response = querySnapShot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setValue(response);
        console.log("fetch docs");
      } catch (err) {
        console.log("fetch error", err);
      }
    }
  };

  useEffect(() => {
    fetchDataAsync();
  }, [collectionName, field, fieldValue]);

  return value;
}
