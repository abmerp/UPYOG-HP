import React from "react";
import Step1 from "../formComponents/form11/Step1";
import Step2 from "../formComponents/form11/Step2";
import Step3 from "../formComponents/form11/Step3";
import PrivateProffestional from "../formComponents/form26/Step2";
import Noc from "./noc";

const Form11 = () => {
  return (
    <div>
      <Step1 />
      <PrivateProffestional />
      <Step2 />
      <Step3 />
      {/* <Noc /> */}
    </div>
  );
};

export default Form11;
