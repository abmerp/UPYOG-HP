import React from "react";
import IconButton from "@mui/material/IconButton";
import "../../styles/UploadButton.css";

const UploadButton = ({ error }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <img src='https://live.staticflickr.com/65535/52919251485_80b3f6d8b7_m.jpg' className="img" alt="upload" />
      </IconButton>
      <h6 className="error">{error}</h6>
    </div>
  );
};

export default UploadButton;
