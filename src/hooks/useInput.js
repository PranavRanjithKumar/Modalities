import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const notEmpty = (val) => val.trim().length !== 0;

  const isValid = notEmpty(value) && touched;
  const isInValid = !notEmpty(value) && touched;

  const onChange = (event) => {
    setTouched(true);
    setValue(event.target.value);
  };

  const onBlur = () => {
    setTouched(true);
  };

  return [
    { isValid, isInValid },
    { value, onChange, onBlur },
  ];
};

export default useInput;
