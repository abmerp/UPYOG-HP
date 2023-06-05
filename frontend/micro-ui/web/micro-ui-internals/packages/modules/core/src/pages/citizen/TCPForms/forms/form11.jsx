import React, { useEffect, useState } from "react";
import Step1 from "../formComponents/form11/Step1";
import Step2 from "../formComponents/form11/Step2";
import Step3 from "../formComponents/form11/Step3";
import PrivateProffestional from "../formComponents/form26/Step2";
import Noc from "./noc";

const Form11 = () => {
  const [checkListData, setCheckListData] = useState({})
  const [documentData, setDocumentData] = useState([])
  const [applicantData, setApplicantData] = useState([])

  const step1Data = (data) => {
    setApplicantData(data)
  }

  const step2Data = (data) => {
    setCheckListData(data)
  }
  const step3Data = (data) => {
    setDocumentData(data)
  }
  
  useEffect(() => {
    console.log("ccccccc", checkListData, documentData, applicantData);
  }, [checkListData, documentData, applicantData])

  return (
    <div>
      <Step1 step1Data={step1Data} />
      {/* <PrivateProffestional /> */}
      <Step2 step2Data={step2Data}/>
      <Step3 step3Data={step3Data}/>
      {/* <Noc /> */}
    </div>
  );
};

export default Form11;
