import { useContext } from "react";
import { LoginContext } from "../context/LoginProvider";

export default function useLogin() {
  const uid = useContext(LoginContext);
  if (uid === undefined) {
    throw new Error("useLogin should be used within LoginProvider");
  }
  return uid;
}
