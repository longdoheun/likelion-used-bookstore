import { useState } from "react";

export default function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const onChangeInput = (e) => {
    const targetValue = e.target.value || "";
    setValue(targetValue);
  };

  return [value, onChangeInput];
}
