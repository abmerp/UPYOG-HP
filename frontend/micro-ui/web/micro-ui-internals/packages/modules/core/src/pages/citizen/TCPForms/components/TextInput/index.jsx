import React from "react";
import { TextField } from "@mui/material";
import "../../styles/TextInput.css";
import { Controller } from "react-hook-form";

const TextInput = ({
  label,
  variant,
  disabled,
  defaultValue,
  placeholder,
  InputProps,
  size,
  fullWidth,
  color,
  helperText,
  children,
  select,
  width,
  multiline,
  control,
  name,
  height,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField
          sx={{
            minWidth: width,
            marginRight: select ? "1vw" : 0,
          }}
          label={label}
          variant={variant}
          disabled={disabled}
          defaultValue={defaultValue}
          placeholder={placeholder}
          InputProps={InputProps}
          size={size}
          fullWidth={fullWidth}
          onChange={onChange}
          color={color}
          helperText={helperText}
          select={select}
          multiline
          minRows={multiline ? 3 : 0}
          maxRows={multiline ? 3 : 0}
        >
          {children}
        </TextField>
      )}
    />
  );
};

export default TextInput;
