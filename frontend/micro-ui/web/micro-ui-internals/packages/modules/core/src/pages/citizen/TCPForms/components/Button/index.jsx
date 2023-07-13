import React from "react";
import Button from "@mui/material/Button";

const ButtonWrapper = ({
  variant,
  disabled,
  onClick,
  color,
  size,
  startIcon,
  endIcon,
  label,
  type,
}) => {
  return (
    <div>
      <Button
        sx={{ borderRadius: "0.2vw" }}
        variant={variant}
        disabled={disabled}
        onClick={onClick}
        color={color}
        size={size}
        startIcon={startIcon}
        endIcon={endIcon}
        type={type ? type : "button"}
      >
        {label}
      </Button>
    </div>
  );
};

export default ButtonWrapper;
