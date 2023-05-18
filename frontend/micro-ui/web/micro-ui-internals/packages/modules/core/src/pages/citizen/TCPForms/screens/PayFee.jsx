import React from "react";
import ButtonWrapper from "../components/Button";
import SettingsIcon from "@mui/icons-material/Settings";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
const PayFee = () => {
  return (
    <section className="mainContainer">
      <div className="mainHead">
        Home &gt; Dashboard
        <span className="iconGap">
          <SettingsIcon />
          <CircleNotificationsIcon />
        </span>
      </div>

      <div className="mainSection notificationMainSection">
        <h1>
          Your Application has been Provisionally Approved. <br />
          Pay Your Application Fee
        </h1>
      </div>
      <div className="footerContainer">
        <div className="buttonWrapper">
          <ButtonWrapper
            variant="contained"
            color="success"
            size="large"
            label="Click here to pay"
            type="submit"
          />
        </div>
      </div>
    </section>
  );
};

export default PayFee;
