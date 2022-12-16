import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import useFetchDoc from "../hooks/useFetchDoc";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../utils/firebase_config";

export const LoginStateContext = createContext();
export const LoginContext = createContext();

export default function LoginProvider({ children }) {
  const auth = getAuth();
  const [userData, setUserData] = useState(null);

  console.log(userData);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "user", user.uid);
        try {
          const docSnap = await getDoc(userRef);
          if (docSnap.exists()) {
            setUserData({ ...docSnap.data(), uid: user.uid });
            console.log("fetch doc completely");
          } else {
            console.log("no such user with", user.uid);
          }
        } catch (err) {
          console.log("fetch error", err);
        }
      } else {
        setUserData(false);
      }
    });
  }, [auth]);

  const actions = useMemo(() => {}, []);

  return (
    <LoginStateContext.Provider value={actions}>
      <LoginContext.Provider value={userData}>{children}</LoginContext.Provider>
    </LoginStateContext.Provider>
  );
}
