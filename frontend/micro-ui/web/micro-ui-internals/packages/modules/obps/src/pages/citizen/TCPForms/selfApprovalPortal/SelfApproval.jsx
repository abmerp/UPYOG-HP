import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import ButtonWrapper from "../components/Button";
import { ArrowForward } from "@mui/icons-material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const SelfApproval = () => {
  const history = useHistory()
  const handleSubmit = () => {
    history.push(`siteinspection`)
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
        <h1>Self Certificate Confirmation</h1>
        <div className="mainSection bgGreen">
          <h2>
            By Clicking on Approve Button, It is declared that you are granting planning permission upto 500 m2 of plot area for resendial use
          </h2>
          <div className="footerContainer">
            <div className="buttonWrapper">
              <ButtonWrapper
                variant="contained"
                color="warning"
                size="large"
                label={
                  <React.Fragment>
                    Approve
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

export default SelfApproval;
