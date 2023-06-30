import React from "react";
import { Card, CardSubHeader, CardHeader, SubmitBar } from "@egovernments/digit-ui-react-components";
import { useTranslation } from "react-i18next";

const SelfApproval = () => {
  const { t } = useTranslation();
  const handleSubmit = () => {
    window.open(`https://tcp.hp.gov.in/Application//uploadDocuments/notification/Notice20160928_174624.pdf`)
  }
  return (
    <section className="mainContainer">
      <div className="wrapper">
      <Card style={{paddingRight:"16px"}}>
      <CardHeader>{t("Self Certificate Confirmation")}</CardHeader> 
      <hr style={{color:"#cccccc",backgroundColor:"#cccccc",height:"2px",marginTop:"20px",marginBottom:"20px"}}/>
      <CardSubHeader>{t("By Clicking on Approve Button, It is declared that you are granting planning permission upto 500m2 of plot area for resedential use")}</CardSubHeader> 
      <SubmitBar label={t("Approve")} onSubmit={handleSubmit}/>
      </Card>
      </div>
    </section>
  );
};

export default SelfApproval;
