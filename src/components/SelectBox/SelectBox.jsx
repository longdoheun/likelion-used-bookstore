import React from "react";

export default function SelectBox({ options, set }) {
  const handleChange = (e) => {
    // event handler
    // console.log(e.target.value);
    set(e.target.value);
  };

  return (
    <select onChange={handleChange}>
      {options.map((option) => (
        <option key={option} value={option} defaultValue={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
