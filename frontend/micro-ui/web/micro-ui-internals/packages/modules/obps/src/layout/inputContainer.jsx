import { InputAdornment, MenuItem } from "@mui/material";
import React from "react";
import RadioButton from "../components/RadioButton";
import SelectWrapper from "../components/Select";
import TextInput from "../components/TextInput";
import UploadButton from "../components/UploadButton";

const InputContainer = ({
  label,
  width,
  mandatory,
  name,
  control,
  placeholder,
  type,
  data,
  mobileNumber,
  select,
  defaultValue,
  multiColumn,
  multiLine,
  uploadValidity,
  labelWidth,
}) => {
  return (
    <div className="inputContainer">
      <h3
        className={`label ${multiColumn ? "multiCoumn" : ""}`}
        style={{ width: labelWidth && labelWidth }}
      >
        {mandatory ? <span className="compulsoryField">*</span> : ""}
        {label}
      </h3>
      {type === "textInput" ? (
        <TextInput
          label={placeholder}
          variant="outlined"
          size="small"
          width={width ? width : "15.625vw"}
          name={name}
          select={select}
          control={control}
          defaultValue={defaultValue}
          multiline={multiLine}
          InputProps={{
            startAdornment: mobileNumber && (
              <InputAdornment position="start">+91</InputAdornment>
            ),
          }}
        >
          {data &&
            select &&
            data?.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextInput>
      ) : type === "radioButton" ? (
        <RadioButton row data={data} control={control} name={name} />
      ) : type === "selectInput" ? (
        <SelectWrapper
          control={control}
          inputLabel={placeholder}
          label={label}
          data={data}
        />
      ) : type === "upload" ? (
        <UploadButton error={uploadValidity} />
      ) : type === "htmlUpload" ? (
        <div className="uploadHtml">
          <input type="file" />
          <h6 className="error">{uploadValidity}</h6>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputContainer;
