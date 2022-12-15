import {
  getDocs,
  where,
  collectionGroup,
  collection,
  query,
  limit,
} from "firebase/firestore";
import { db } from "../utils/firebase_config";
import { useState } from "react";
import { useEffect } from "react";

export default function useFetch(collectionName, field, fieldValue) {
  const [value, setValue] = useState([]);
  const docRef = collection(db, collectionName);

  let selctedQuery;

  switch (field) {
    case "division":
      selctedQuery = query(
        docRef,
        where("division", "==", fieldValue),
        limit(6)
      );
      break;

    case "category":
      selctedQuery = query(
        docRef,
        where("category", "==", fieldValue),
        limit(30)
      );
      break;

    default:
      selctedQuery = docRef;
  }

  const fetchGroup = async () => {
    try {
      const querySnapShot = await getDocs(selctedQuery);
      const response = querySnapShot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setValue(response);
    } catch (err) {
      console.log("fetch error", err);
    }
  };

  useEffect(() => {
    fetchGroup();
  }, []);

  return value;
}
