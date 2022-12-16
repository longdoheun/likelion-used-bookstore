import { useState, useMemo } from "react";

export default function useCounter(remaining) {
  const [value, setValue] = useState(1);

  const plus = () => {
    if (value + 1 <= remaining) {
      setValue(value + 1);
    }
  };

  const minus = () => {
    if (value - 1 >= 1) {
      setValue(value - 1);
    }
  };

  return [value, plus, minus];
}
