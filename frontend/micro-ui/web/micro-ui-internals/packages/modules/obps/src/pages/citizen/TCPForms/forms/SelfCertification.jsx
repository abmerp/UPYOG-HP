import React from "react";
import Step1 from "../formComponents/form12/Step1";
import Step2 from "../formComponents/form12/Step2";
import Step3 from "../formComponents/form12/Step3";
import PrivateProffestional from "../formComponents/form26/Step2";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const SelfCertificationPreview = () => {
  const history = useHistory()
  const handleclick = () => {
    history.push(`payfee`)
  }
  return (
    <React.Fragment>
      <Step1 />
      <PrivateProffestional />
      <Step2 />
      <Step3 />
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Button variant="contained" style={{padding: '10px 20px', margin: '20px'}}>Send to Citizen</Button>
      <Button variant="contained" style={{padding: '10px 20px'}} onClick={handleclick}>Pay Fee</Button>
      </div>
    </React.Fragment>
  );
};

export default SelfCertificationPreview;
