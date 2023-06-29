import React from "react";
import { Card, CardSubHeader, CardHeader } from "@egovernments/digit-ui-react-components";
import { useTranslation } from "react-i18next";

const PaymentConfirm = () => {
  const { t } = useTranslation();
  return (
    <section className="mainContainer">
      <div className="wrapper">
      <Card style={{paddingRight:"16px"}}>
      <CardHeader>{t("Payment Confirmation")}</CardHeader> 
      <hr style={{color:"#cccccc",backgroundColor:"#cccccc",height:"2px",marginTop:"20px",marginBottom:"20px"}}/>
      <CardSubHeader>{t("Your amount of Rs. ₹ 600 has been Successfully Paid !")}</CardSubHeader> 
      </Card>
      </div>
    </section>
  );
};

export default PaymentConfirm;
