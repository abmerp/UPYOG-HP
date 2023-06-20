import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ButtonWrapper from "../components/Button";
const PaymentConfirm = () => {
  return (
    <section className="mainContainer">
      <div className="mainHead">
        Home &gt; Dashboard
        <span>AmitaShree Malik</span>
        <span className="iconGap">
          <SettingsIcon />
          <CircleNotificationsIcon />
        </span>
      </div>
      <div className="wrapper">
        <h1>Payment Confirmation</h1>
        <div className="mainSection bgGreen">
          <h2>
            Your amount of <span> Rs. 83637.33 </span> has been Successfully
            Paid !
          </h2>
          <div className="footerContainer">
            <div className="buttonWrapper">
              <ButtonWrapper
                variant="contained"
                color="warning"
                size="large"
                label={
                  <>
                    <ArrowBackIcon />
                    Go to Dashbaord
                  </>
                }
                type="submit"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentConfirm;
