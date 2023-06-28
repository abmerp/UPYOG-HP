import React, { useState } from "react";
import Step1 from "../formComponents/selfCertification/Step1";
import Step2 from "../formComponents/selfCertification/Step2";
import Step3 from "../formComponents/selfCertification/Step3";
import Step4 from "../formComponents/selfCertification/Step4";
import ButtonWrapper from "../components/Button";
import SiteInspectionReport from "../selfApprovalPortal/SiteInspectionReport";
import SelfApproval from "../selfApprovalPortal/selfApproval";
import ApprovalLetterUD from "../certificates/ApprovalLetterUD";

const SelfCertificationHome = () => {
    const [applicantInfo, setApplicantInfo] = useState(true)
    const [privateProf, setPrivateProf] = useState(false)
    const [checkList, setCheckList] = useState(false)
    const [document, setDocument] = useState(false)
    const [summary, setSummary] = useState(false)
    const [demand, setDemand] = useState(false)
    const [selfApproval, setSelfApproval] = useState(false)
    const [siteInspectionReport, setSiteInspectionReport] = useState(false)

    const handleApplication = () => {
        return null
    }
    const handleSummary = () => {
        return null
    }
    const handleDemand = () => {
        setDemand(true)
    }
    const handleApproval = () => {
        setSelfApproval(true)
        setApplicantInfo(false)
    }
    const handleSiteReport = () => {
        setSiteInspectionReport(true)
        setApplicantInfo(false)
    }

    const handleApplicantInfo = () => {
        setDocument(false)
        setApplicantInfo(true)
        setCheckList(false)
        setPrivateProf(false)
    }
    const handlePrivateProfessional = () => {
        setDocument(false)
        setApplicantInfo(false)
        setCheckList(false)
        setPrivateProf(true)
    }
    const handleCheckList = () => {
        setDocument(false)
        setApplicantInfo(false)
        setCheckList(true)
        setPrivateProf(false)
    }
    const handleDocuments = () => {
        setDocument(true)
        setApplicantInfo(false)
        setCheckList(false)
        setPrivateProf(false)
    }

  return (
    <React.Fragment>
    <div className="headerContainer">
        <div className="buttonWrapper">
          <ButtonWrapper
            variant="contained"
            color="success"
            size="medium"
            label="Applicantion Form"
            onClick={handleApplication}
          />
          <ButtonWrapper
            variant="contained"
            color="primary"
            size="medium"
            label="Form Summary"
            onClick={handleSummary}
          />
          <ButtonWrapper
            variant="contained"
            color="primary"
            size="medium"
            label="Demand and Payment"
            onClick={handleDemand}
          />
          <ButtonWrapper
            variant="contained"
            color="primary"
            size="medium"
            label="Self-Approval"
            onClick={handleApproval}
          />
          <ButtonWrapper
            variant="contained"
            color="primary"
            size="medium"
            label="SiteInspection-Report"
            onClick={handleSiteReport}
          />
        </div>
    </div>
    <div className="straightLine" />
    <div className="headerContainer">
        <div className="buttonWrapper">
          <ButtonWrapper
            variant="contained"
            color="success"
            size="medium"
            label="Applicant Information"
            onClick={handleApplicantInfo}
          />
          <ButtonWrapper
            variant="contained"
            color="primary"
            size="medium"
            label="Private Professional Information"
            onClick={handlePrivateProfessional}
          />
          <ButtonWrapper
            variant="contained"
            color="primary"
            size="medium"
            label="Checklist"
            onClick={handleCheckList}
          />
          <ButtonWrapper
            variant="contained"
            color="primary"
            size="medium"
            label="Documents"
            onClick={handleDocuments}
          />
        </div>
        {/* <h5 className="mandatoryInfo">(*) Indicates Mandatory Field</h5> */}
    </div>
      {applicantInfo && <Step1 />} 
      {privateProf && <Step2 />} 
      {checkList && <Step3 />}  
      {document && <Step4 />} 
      {siteInspectionReport && <SiteInspectionReport />} 
      {selfApproval && <SelfApproval />}
    </React.Fragment>
  );
};

export default SelfCertificationHome;
