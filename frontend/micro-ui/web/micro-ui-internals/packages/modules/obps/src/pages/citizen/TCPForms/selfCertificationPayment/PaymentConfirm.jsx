import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import ButtonWrapper from "../components/Button";
import { ArrowForward } from "@mui/icons-material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const PaymentConfirm = () => {
  const history = useHistory()
  const handleSubmit = () => {
    history.push(`selfapprove`)
  }
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
                  <React.Fragment>
                    Go to Self-Approval Portal
                    <ArrowForward />
                  </React.Fragment>
                }
                type="submit"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentConfirm;
