import { useState, useEffect } from "react";

export default function useNumWithComma() {
  const [num, setNum] = useState(null);

  useEffect(() => {
    if (num) {
      if (typeof num === "number") {
        setNum(num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
      } // else {
      //   setNum(num.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
      // }
    }
  }, [num]);

  return [num, setNum];
}
