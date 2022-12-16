import { useState, useEffect } from "react";

export default function useNumWithComma(defultValue) {
  const [num, setNum] = useState("");

  useEffect(() => {
    if (defultValue) {
      if (typeof defultValue === "number") {
        setNum(defultValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
      } // else {
      //   setNum(num.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
      // }
    }
  }, [defultValue]);

  return num;
}
