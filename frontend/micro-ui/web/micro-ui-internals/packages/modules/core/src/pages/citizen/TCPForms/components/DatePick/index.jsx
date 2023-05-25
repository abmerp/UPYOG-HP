import React from "react";
import { Controller } from "react-hook-form";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from "@mui/x-date-pickers";
import 'dayjs/locale/en-in';
import { useState } from "react";
import { TextField } from "@mui/material";


const DatePick = ({
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
  const [reqDate, setreqDate] = useState(new Date());

  return (
    // <Controller
    // name={name}
    //   control={control} width="30%"
    //   render={({ field: { onChange, value } }) => (
    // <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-in" sx={{ minWidth: width ? width : "10.625vw" }} size="small">
    //       <DatePicker label={label} sx={{ minWidth: width ? width : "10.625vw" }} size="small" minWidth="10.625vw" 
    //       rende />
    //   </LocalizationProvider>
    <Controller
  name="reqDate"
  //defaultValue={reqDate}
  control={control}
  render={
      ({ field: { onChange, ...restField } }) =>(
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-in">
          <DatePicker slotProps={{ textField: { size: 'small' } }}
              label={label}
              onChange={(event) => {  onChange(event); setreqDate(event); }}
              sx={{width:width ? width : "16.625vw"}}
              renderInput={(params) =>
              <TextField  size="small" {...params}
              />}
             
              
          />
      </LocalizationProvider>
//      }
//  /> 
        // <TextField
        //   sx={{
        //     minWidth: width,
        //     marginRight: select ? "1vw" : 0,
        //   }}
        //   label={label}
        //   variant={variant}
        //   disabled={disabled}
        //   defaultValue={defaultValue}
        //   placeholder={placeholder}
        //   InputProps={InputProps}
        //   size={size}
        //   fullWidth={fullWidth}
        //   onChange={onChange}
        //   color={color}
        //   helperText={helperText}
        //   select={select}
        //   multiline
        //   minRows={multiline ? 3 : 0}
        //   maxRows={multiline ? 3 : 0}
        // >
        //   {children}
        // </TextField>
      )}
    />
  );
};

export default DatePick;