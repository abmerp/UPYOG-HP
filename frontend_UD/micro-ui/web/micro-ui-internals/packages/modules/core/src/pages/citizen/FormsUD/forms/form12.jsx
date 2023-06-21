import React, { useState } from "react";
import Step1 from "../formComponents/form12/Step1";
// import Step2 from "../formComponents/form12/Step2";
import Step3 from "../formComponents/form12/Step3";
//import PrivateProffestional from "../formComponents/form26/Step2";
import Step2 from "../formComponents/form12/Step2";
import { ApiService } from "../../Services/ApiService";
import { useHistory } from "react-router-dom/cjs/react-router-dom";


const Form12 = () => {
  const [formData ,setFormData]=useState({step1Data:{},PrivateProffestional:{}, step2:{}, step3:{}});
  const [step, setStep]=useState(0)
  const history = useHistory();
  const requestPayload={};

  function changeStep(count)
  {
    setStep(step+count);
  }

  function submitForm()
  {
    debugger;
    transformInput();
    // OBPSService.create(requestPayload, 'hr')
    //  ApiService.postcall("/bpa-services/v1/bpa/_createForm", requestPayload);
    // window.location.replace("/form11");
    // ApiService.createForm("/bpa-services/v1/bpa/_createForm", requestPayload);
    Digit.OBPSService.createForm({ BPA: requestPayload.BPA }, 'hr').then((result, err) => {
                debugger;
                console.log(result);
                console.log(err);
                history.push('/digit-ui/citizen/action');
            }).catch((e) => {
                debugger;
                console.log(e);
            })


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
      {(step === 0) && <Step1 formData={formData} changeStep={changeStep}/> }      
      {/* {(step === 1) && <PrivateProffestional formData={formData} changeStep={changeStep}/> } */}
      {(step === 1) && <Step2 formData={formData} changeStep={changeStep}/>  }
      {(step === 2) && <Step3 formData={formData} submitForm={submitForm}/> }
    </div>
  );
};

export default Form12;
