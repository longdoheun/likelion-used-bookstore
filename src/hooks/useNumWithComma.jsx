import { useState, useEffect } from "react";

export default function useNumWithComma(number) {
  const [num, setNum] = useState(number);

  useEffect(() => {
    if (typeof num === "number") {
      setNum(num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    } else {
      setNum(num.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }
  }, [num]);

  return num;
}
