import React from "react";
import Step1 from "../formComponents/form12/Step1";
import Step2 from "../formComponents/form12/Step2";
import Step3 from "../formComponents/form12/Step3";
import PrivateProffestional from "../formComponents/form26/Step2";
import './index.css'

const Form12 = () => {
  return (
    <React.Fragment>
      <Step1 />
      <PrivateProffestional />
      <Step2 />
      <Step3 />
    </React.Fragment>
  );
};

export default Form12;
