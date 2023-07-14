import React from "react";
import { Card, CardSubHeader, CardHeader, StatusTable, Row, SubmitBar } from "@egovernments/digit-ui-react-components";
import { useTranslation } from "react-i18next";

const PaymentConfirm = () => {
  const { t } = useTranslation();
  return (  
      // {/* <Card style={{paddingRight:"16px"}}>
      // <CardHeader>{t("Payment Confirmation")}</CardHeader> 
      // <hr style={{color:"#cccccc",backgroundColor:"#cccccc",height:"2px",marginTop:"20px",marginBottom:"20px"}}/>
      // <CardSubHeader>{t("Your amount of Rs. ₹ 600 has been Successfully Paid !")}</CardSubHeader> 
      // </Card> */}
      <Card style={{paddingRight:"16px"}}>
      <CardSubHeader>{t("BPA_SUMMARY_FEE_EST")}</CardSubHeader> 
      <StatusTable>
          <Row className="border-none" label={t(`Application Fee`)} text={"₹ 100"} />
          <Row className="border-none" label={t(`Sanction Fee`)} text={"₹ 500"} textStyle={{color : "#00703C"}} />
          <Row className="border-none" label={`${t("Total Amount")}`} text={"₹ 600"} />
      </StatusTable>
      <hr style={{color:"#cccccc",backgroundColor:"#cccccc",height:"2px",marginTop:"20px",marginBottom:"20px"}}/>
      <CardHeader>{t("BPA_COMMON_TOTAL_AMT")}</CardHeader> 
      <CardHeader>₹ {"600"}</CardHeader> 
      <SubmitBar label={t("Make Payment")} />
      </Card>
   
  );
};

export default PaymentConfirm;
