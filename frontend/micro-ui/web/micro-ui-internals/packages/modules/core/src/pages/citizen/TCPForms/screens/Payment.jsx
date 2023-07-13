import { Radio } from "@mui/material";
import React from "react";
import ButtonWrapper from "../components/Button";
import "../styles/Payment.css";

const Payment = () => {
  return (
    <section className="mainContainer">
      <div className="mainHead">Home &gt; Payment Summary</div>

      <div className="mainSection">
        <h1>
          Your Application Reference No: <span>00000000</span>
        </h1>

        <div className="tableBody">
          <div className="head">Payment Summary</div>
          <div className="table">
            <div className="leftCol">Application Fee</div>
            <div className="rightCol">Rs. 0000.00</div>
          </div>
          <div className="table">
            <div className="leftCol">Processing Fee</div>
            <div className="rightCol">Rs. 00.00</div>
          </div>
          <div className="table">
            <div className="leftCol">e-charge (2.00)%</div>
            <div className="rightCol">Rs. 00.00</div>
          </div>
          <div className="table">
            <div className="leftCol">Muck Charges</div>
            <div className="rightCol">Rs. 00.00</div>
          </div>
          <div className="table">
            <div className="leftCol">Total Payment Amount</div>
            <div className="rightCol">Rs. 0000.00</div>
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
          />
        </div>
      </div>
    </section>
  );
};

export default Payment;
