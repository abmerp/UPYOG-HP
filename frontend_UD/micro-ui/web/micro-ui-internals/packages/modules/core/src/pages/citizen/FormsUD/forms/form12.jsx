import React, { useState } from "react";
import Step1 from "../formComponents/form12/Step1";
// import Step2 from "../formComponents/form12/Step2";
import Step3 from "../formComponents/form12/Step3";
//import PrivateProffestional from "../formComponents/form26/Step2";
import Step2 from "../formComponents/form12/Step2";
// import { ApiService } from "../../Services/ApiService";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { Box, Modal, Typography } from "@mui/material";
// import Actions from "../../Home/Components/Actions";
import { ButtonGroup,Button } from "@material-ui/core";
import Payment2 from "../screens/payment2";
import Summary from "../../Home/Components/Summary";


const Form12 = () => {
  const [formData ,setFormData]=useState({step1Data:{},PrivateProffestional:{}, step2:{}, step3:{}});
  const [step, setStep]=useState(0);
  const [formSubmitted, setFormSubmitted]=useState(false);
  const [respFormed, setRespFormed]=useState({});
  const history = useHistory();
  const requestPayload={};
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [visibleform12,setVisibleForm12]=useState(true);
  const [visibleSummary,setVisibleSummary]=useState(false)
  const [visiblePayment,setVisiblePayment]=useState(false)

  function changeStep(step)
  {
    setStep(step);
  }

  function submitForm()
  {
    debugger;
    transformInput();
    // handleOpen();
    // OBPSService.create(requestPayload, 'hr')
    //  ApiService.postcall("/bpa-services/v1/bpa/_createForm", requestPayload);
    // window.location.replace("/form11");
    // ApiService.createForm("/bpa-services/v1/bpa/_createForm", requestPayload);
    Digit.OBPSService.createForm({ BPA: requestPayload.BPA }, 'hr').then((result, err) => {
      debugger;
                console.log(result);
                console.log(err);
                // history.push('/digit-ui/citizen/action');
                setRespFormed(result);
                setFormSubmitted(true);

            }).catch((e) => {
                console.log(e);
            })



  }

  const clickVisibleForm12=()=>{
          setVisibleForm12(true);
          setVisiblePayment(false);
          setVisibleSummary(false);
  }

  const clickVisibleSummary=()=>{
    setVisibleForm12(false);
    setVisiblePayment(false);
    setVisibleSummary(true);
  }

  const clickVisiblePayment=()=>{
    setVisibleForm12(false);
    setVisiblePayment(true);
    setVisibleSummary(false);
  }

  function transformInput(){
//     requestPayload.RequestInfo = {
//       "api_id": "1",
//       "ver": "1",
//       "ts": null,
//       "action": "create",
//       "did": "",
//       "key": "",
//       "msg_id": "",
//       "requester_id": "",
//       "authToken": "d4cbc885-764d-4b26-85e0-5965bd4f8051"
//   }
  requestPayload.BPA = {
    "approvalNo": null,
    "accountId": null,
    "edcrNumber": null,
    "riskType": null,
    "applicationType": "FORM_12",
    "serviceType": "FORM_12",
    "landId": null,
    "tenantId": "hr",
    "applicationDate": "1676613488134",
    "status": "INITIATE",
    "department": "TCP",
    "category": "Residential",
    "totalPlotArea": 1.02,
    "applcationDetail": {
      "applicantInfo": {
        "applicantName": "DD SS RR",
        "guardianName": "SS RR",
        "applicantMobileNo": "8898740015",
        "aadharNo": "516060172960",
        "uploadPhoto": "",
        "addMoreApplicant": "VV SS RR",
        "emailId": "dsr@gmail.com",
        "pvtProfMobileNo": "9325821395",
        "nocApplicantInfo": null
      },
      "landAreaDetails": {
        "district": "district",
        "notifiedArea": "TCP",
        "category": "Residential",
        "nameOfVillage": "nameOfVillage",
        "nameOfULB": "nameOfULB",
        "nameOfWard": null,
        "additionalLandAreaDetails": {
          "Name": "Digambar",
          "Gender": "Male",
          "Age": "88",
          "Try": {
            "address": "address",
            "pin": "444708"
          }
        },
        "applicantionInfo": {
          "Name": "Digambar",
          "Gender": "Male",
          "Age": "88"
        }
      },
      "descriptionOfLand": {
        "revenueVillageMohalla": "revenueVillageMohalla",
        "khatoniNo": "100",
        "khasraNo": "101",
        "khataNo": "102",
        "latitudeLongitude": "1542",
        "totalPlotArea": "1.02",
        "areaUnderConsideration": "2.004",
        "noOfPlot": "10",
        "pvtProfessionalInfo": "pvtProfessionalInfo",
        "useType": "useType",
        "propertyType": "propertyType",
        "plotAreaForSubDivisionalDevelopmentActivitiesInSqM": "10.25",
        "whetherChangeOfLandUseInvolved": true,
        "additionalDescriptionOfLandDeteails": {
          "address": "address",
          "pin": "444708"
        }
      },
      "permanentAddressDetails": {
        "name": "name",
        "type": "type",
        "guardianName": "guardianName",
        "state": "state",
        "district": "district",
        "tehsil": "tehsil",
        "townVillageWard": "1",
        "address": "address",
        "pin": "444708"
      },
      "correspondenceAddressDetails": {
        "name": "name",
        "type": "type",
        "guardianName": "guardianName",
        "state": "state",
        "district": "district",
        "tehsil": "tehsil",
        "townVillageWard": "1",
        "address": "address",
        "pin": "444708"
      },
      "permissionOfSubdivisionChecklist": {
        "minimumWidthOfPedestrian": "10.21",
        "minimumWidthOfVehicularAccess": "10.12",
        "minimumAreaForOpenGreenSpace": "10.21",
        "minimumAreaForSoakPit": "10.21",
        "orientationOfPlots": "orientationOfPlots",
        "layoutOfPlots": "layoutOfPlots"
      },
      "documents": [
        {
          "documentType": "jamabandhiDocument",
          "fileStoreId": "693fa5a2-a512-4140-8d18-b7acbdaee3a2"
        },
        {
          "documentType": "conveyanceDeed",
          "fileStoreId": "693fa5a2-a512-4140-8d18-b7acbdaee3a2"
        },
        {
          "documentType": "demarcationReport",
          "fileStoreId": "693fa5a2-a512-4140-8d18-b7acbdaee3a2"
        },
        {
          "documentType": "tatimaDocuments",
          "fileStoreId": "693fa5a2-a512-4140-8d18-b7acbdaee3a2"
        },
        {
          "documentType": "locationPlan",
          "fileStoreId": "693fa5a2-a512-4140-8d18-b7acbdaee3a2"
        },
        {
          "documentType": "proposedConsolidatedMap1",
          "fileStoreId": "693fa5a2-a512-4140-8d18-b7acbdaee3a2"
        },
        {
          "documentType": "copyOfContouringPlan",
          "fileStoreId": "693fa5a2-a512-4140-8d18-b7acbdaee3a2"
        }
      ]
    },
    "workflow": {
        "action": "INITIATE",
        "assignes": null,
        "comments": "PPPPPPP",
        "varificationDocuments": null
    }
}
  }
  
  return (
    <div>
      <div style={{marginLeft:"50px",color:"blue"}}>
       <ButtonGroup variant="contained" aria-label="outlined primary button group" style={{color:"blue"}}>
       <Button onClick={clickVisibleForm12}>Form12</Button>
  <Button onClick={clickVisibleSummary} >Summary</Button>
  <Button onClick={clickVisiblePayment}>Payment</Button>
  </ButtonGroup>
  </div>
  <div className="straightLine" />
    {visibleform12 && <div>
     <Step1 formData={formData} changeStep={changeStep}/>   
      {/* {(step === 1) && <PrivateProffestional formData={formData} changeStep={changeStep}/> } */}
       <Step2 formData={formData} changeStep={changeStep}/>
      <Step3 formData={formData} submitForm={submitForm}/>
      <Modal open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
              <Box style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, height: 150,backgroundColor:"white",  border: '1px solid #000', boxShadow: 24,  p: 4, borderRadius: '5px'}}>
              <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:'center'}}>
               Form - 12 Applicaton submission details:
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2,  marginLeft:'10px'}}>
                Your application has been submitted successfully. Please note down your application number for further reference.
              </Typography>
              </Box>

      </Modal>
    </div>}
    { visibleSummary && <Summary/>}
    {visiblePayment && <Payment2/>}
    </div>
  );
};

export default Form12;
