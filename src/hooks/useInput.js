import { useState } from "react";

// хороший тон начинать хуки с use
export default function useInput(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);
  return {
    value,
    onChange: (event) => setValue(event.target.value),
  };
}
