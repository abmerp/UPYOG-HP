import React from "react";
import IconButton from "@mui/material/IconButton";
import image from "../../assets/upwardArrow.png";
import "../../styles/UploadButton.css";

const UploadButton = ({ error }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <img src={image} className="img" alt="upload" />
      </IconButton>
      <h6 className="error">{error}</h6>
    </div>
  );
};

export default UploadButton;
