// import React from "react";
import React, { useEffect, useState } from "react";
import OBPSSearchApplication from "../../components/SearchApplication";
import Search from "../employee/Search";
import { useTranslation } from "react-i18next";
import { Switch, useLocation, Route } from "react-router-dom";
import { PrivateRoute, BackButton } from "@egovernments/digit-ui-react-components";
import Form11 from "./TCPForms/forms/form11";
// import Form12 from "./TCPForms/forms/form12";
// import NewBuildingPermit from "./NewBuildingPermit";
// import CreateEDCR from "./EDCR";
// import CreateOCEDCR from "./OCEDCR";
// import BPACitizenHomeScreen from "./home";
// import StakeholderRegistration from "./StakeholderRegistration";
import MyApplication from "./MyApplication";
import ApplicationDetails from "./ApplicationDetail";
// import OCBuildingPermit from "./OCBuildingPermit";
// import BpaApplicationDetail from "./BpaApplicationDetail";
// import BPASendToArchitect from "./BPASendToArchitect";
// import OCSendToArchitect from "./OCSendToArchitect";
// import BPASendBackToCitizen from "./BPASendBackToCitizen";
// import OCSendBackToCitizen from "./OCSendBackToCitizen";
// import Inbox from "./ArchitectInbox";
//import EdcrInbox from "./EdcrInbox";
import OBPSResponse from "../employee/OBPSResponse";
import Inbox from "../employee/Inbox";
import BPACitizenHomeScreens from "./home";
import SelfCertificationPreview from "./TCPForms/forms/SelfCertification";
import Step1 from "./TCPForms/formComponents/selfCertification/Step1";
import Step2 from "./TCPForms/formComponents/selfCertification/Step2";
import Step3 from "./TCPForms/formComponents/selfCertification/Step3";
import Step4 from "./TCPForms/formComponents/selfCertification/Step4";
import PayFee from "./TCPForms/selfCertificationPayment/PayFee";
import Payment2 from "./TCPForms/selfCertificationPayment/payment2";
import PaymentConfirm from "./TCPForms/selfCertificationPayment/PaymentConfirm";

// import SiteInspection from "./TCPForms/SelfApprovalPortal/SiteInspectionReport";
import Form12 from "./TCPForms/forms/form12";
import SelfCertificationHome from "./TCPForms/forms/SelfCertificationHome";
// import SelfApproval from "./TCPForms/SelfApprovalPortal/SelfApproval";
const App = ({ path }) => {
  const location = useLocation();
  const { t } = useTranslation();

  const BPACitizenHomeScreen = Digit?.ComponentRegistryService?.getComponent('BPACitizenHomeScreen');
  const CreateEDCR = Digit?.ComponentRegistryService?.getComponent('ObpsCreateEDCR');
  const CreateOCEDCR = Digit?.ComponentRegistryService?.getComponent('ObpsCreateOCEDCR');
  const NewBuildingPermit = Digit?.ComponentRegistryService?.getComponent('ObpsNewBuildingPermit');
  const OCBuildingPermit = Digit?.ComponentRegistryService?.getComponent('ObpsOCBuildingPermit');
  const StakeholderRegistration = Digit?.ComponentRegistryService?.getComponent('ObpsStakeholderRegistration');
  const EdcrInbox = Digit?.ComponentRegistryService?.getComponent('ObpsEdcrInbox');
  const BpaApplicationDetail = Digit?.ComponentRegistryService?.getComponent('ObpsCitizenBpaApplicationDetail');
  const BPASendToArchitect = Digit?.ComponentRegistryService?.getComponent('ObpsBPASendToArchitect');
  const OCSendToArchitect = Digit?.ComponentRegistryService?.getComponent('ObpsOCSendToArchitect');
  const BPASendBackToCitizen = Digit?.ComponentRegistryService?.getComponent('ObpsBPASendBackToCitizen');
  const OCSendBackToCitizen = Digit?.ComponentRegistryService?.getComponent('ObpsOCSendBackToCitizen');
  const isDocScreenAfterEdcr = sessionStorage.getItem("clickOnBPAApplyAfterEDCR") === "true" ? true : false


  return (
    <React.Fragment>
       {!location.pathname.includes("response") && !location.pathname.includes("openlink/stakeholder") && !location.pathname.includes("/acknowledgement") && !isDocScreenAfterEdcr && <BackButton style={{ border: "none" }}>{t("CS_COMMON_BACK")}</BackButton>}
      <Switch>
        <PrivateRoute path={`${path}/home`} component={BPACitizenHomeScreens} />
        <PrivateRoute path={`${path}/search/application`} component={(props) => <Search {...props} parentRoute={path} />} />
        <PrivateRoute path={`${path}/edcrscrutiny/apply`} component={CreateEDCR} />
        <PrivateRoute path={`${path}/edcrscrutiny/oc-apply`} component={CreateOCEDCR} />
        <PrivateRoute path={`${path}/bpa/:applicationType/:serviceType`} component={NewBuildingPermit} />
        <PrivateRoute path={`${path}/ocbpa/:applicationType/:serviceType`} component={OCBuildingPermit}/>
        <PrivateRoute path={`${path}/stakeholder/apply`} component={StakeholderRegistration} />
        <Route path={`${path}/openlink/stakeholder/apply`} component={StakeholderRegistration} />
        <PrivateRoute path={`${path}/my-applications`} component={MyApplication} />
        <PrivateRoute path={`${path}/bpa/inbox`} component={(props) => <Inbox {...props} parentRoute={path} />} />
        <PrivateRoute path={`${path}/edcr/inbox`} component={(props) => <EdcrInbox {...props} parentRoute={path} />} />
        <PrivateRoute path={`${path}/stakeholder/:id`} component={ApplicationDetails} />
        <PrivateRoute path={`${path}/bpa/:id`} component={BpaApplicationDetail} />
        <PrivateRoute path={`${path}/editApplication/bpa/:tenantId/:applicationNo`} component={BPASendToArchitect} />
        <PrivateRoute path={`${path}/editApplication/ocbpa/:tenantId/:applicationNo`} component={OCSendToArchitect} />
        <PrivateRoute path={`${path}/sendbacktocitizen/bpa/:tenantId/:applicationNo`} component={BPASendBackToCitizen} />
        <PrivateRoute path={`${path}/sendbacktocitizen/ocbpa/:tenantId/:applicationNo`} component={OCSendBackToCitizen} />
        <PrivateRoute path={`${path}/response`} component={OBPSResponse} />
        <PrivateRoute path={`${path}/form11`} component={Form11} />
        {/* <PrivateRoute path={`${path}/form12`} component={Form12} /> */}
        <PrivateRoute path={`${path}/form12/step1`} component={Step1} />
        <PrivateRoute path={`${path}/form12/step2`} component={Step2} />
        <PrivateRoute path={`${path}/form12/step3`} component={Step3} />
        <PrivateRoute path={`${path}/form12/step4`} component={Step4} />
        <PrivateRoute path={`${path}/form12/preview`} component={SelfCertificationPreview} />
        <PrivateRoute path={`${path}/form12/payfee`} component={PayFee} />
        <PrivateRoute path={`${path}/form12/payment`} component={Payment2} />
        <PrivateRoute path={`${path}/form12/payconfirm`} component={PaymentConfirm} />
        {/* <PrivateRoute path={`${path}/form12/selfapprove`} component={SelfApproval} /> */}
        {/* <PrivateRoute path={`${path}/form12/siteinspection`} component={SiteInspection} /> */}
        <PrivateRoute path={`${path}/form12/selfcertification`} component={SelfCertificationHome} />
      </Switch>
    </React.Fragment>
  )
}

export default App;
