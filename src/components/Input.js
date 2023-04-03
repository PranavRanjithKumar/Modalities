import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const Input = ({ label, methods, options, disabled }) => {
  return (
    <div className="inputField">
      <TextField
        select
        label={label}
        variant="filled"
        fullWidth
        disabled={disabled}
        {...methods}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default Input;
