import React from "react";
import { Controller } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormHelperText } from "@mui/material";
import "../../styles/Select.css";

const SelectWrapper = ({ label, inputLabel, data, helperText, autoWidth, placeholder, control, name, defaultValue, width }) => {
  return (
    <Controller
      name={name || "name"}
      control={control}
      render={({ field: { onChange, value } }) => (
        <FormControl sx={{ minWidth: width ? width : "15.625vw" }} size="small">
          <InputLabel id="demo-simple-select-label">{inputLabel}</InputLabel>
          <Select
            value={value || ""}
            label={label}
            onChange={onChange || ""}
            autoWidth={autoWidth}
            placeholder={placeholder}
            defaultValue={defaultValue}
          >
            {data?.map((item) => {
              return (
                <MenuItem value={item?.value} key={item?.value} className={width && "customWidth"}>
                  {item?.label}
                </MenuItem>
              );
            })}
          </Select>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default SelectWrapper;
