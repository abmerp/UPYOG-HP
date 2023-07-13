import { Radio } from "@mui/material";
import React from "react";
import ButtonWrapper from "../components/Button";
import "../styles/Payment.css";

const Payment2 = () => {

function handlePay() {
      console.log("Payment Done")    
}
  return (
    <section className="mainContainer" style={{overflow:screenX}}>
      <div className="mainHead">Home &gt; Process Payment</div>

      <div className="mainSection">
        <h1>
          Your Application Reference No: <span>123456</span>
        </h1>

        <div className="tableBody">
          <div className="head">Process Payment</div>
          <div className="table">
            <div className="leftCol">Application Fees</div>
            <div className="rightCol">Rs. 6543.00</div>
          </div>
          <div className="table">
            <div className="leftCol">Total Payment</div>
            <div className="rightCol">Rs. 12987.00</div>
          </div>
          </div>
        <div className="paymentMethod">
          <p>Payment mode:</p>
          <Radio />
          Online
        </div>
      </div>
      <div className="footerContainer">
        <div className="buttonWrapper">
          <ButtonWrapper
            variant="contained"
            color="warning"
            size="medium"
            label="Modify"
          />
        <ButtonWrapper
              variant="contained"
              color="success"
              size="medium"
              label="Pay"
              type="submit"
              onClick={handlePay}
            />
        </div>
      </div>
    </section>
  );
};

export default Payment2;