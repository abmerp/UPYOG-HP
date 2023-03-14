import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Controller } from "react-hook-form";

const RadioButton = ({ row, data, control, name, defaultValue }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={defaultValue}
          name="radio-buttons-group"
          row={row}
        >
          {data?.map((item) => {
            return (
              <FormControlLabel
                key={item?.value}
                value={item?.value}
                control={<Radio />}
                label={item?.label}
                onChange={onChange}
              />
            );
          })}
        </RadioGroup>
      )}
    />
  );
};

export default RadioButton;
