import React, { useEffect, useState } from "react";
import Step1 from "../formComponents/form11/Step1";
import Step2 from "../formComponents/form11/Step2";
import Step3 from "../formComponents/form11/Step3";
import PrivateProffestional from "../formComponents/form26/Step2";
import Noc from "./noc";
import { Button } from "@mui/material";
import axios from "axios";
import Urls from "@egovernments/digit-ui-libraries/src/services/atoms/urls";

const Form11 = () => {
  const [checkListData, setCheckListData] = useState({})
  const [documentData, setDocumentData] = useState([])
  const [applicantData, setApplicantData] = useState([])
  const [responseData, setResponseData] = useState({})
  const [applicationNumber, setApplicationNumber] = useState('')

  const step1Data = (data) => {
    setApplicantData(data)
  }

  const step2Data = (data) => {
    setCheckListData(data)
  }
  const step3Data = (data) => {
    setDocumentData(data)
  }

  const filteredCheckListData = Object.entries(checkListData).reduce((acc, [key, value]) => {
    if (value !== undefined) {
      acc[key] = value;
    }
    return acc;
  }, {});

  // console.log("fffffffffff", applicantData.correspondencePinCode, applicantData.correspondenceAdressName, applicantData.correspondenceGuardianName);

  const handleSubmit = () => {
    // try {
    //   const formPayload = JSON.stringify({
    //     "RequestInfo": {
    //       "api_id": "1",
    //       ver: "1",
    //       ts: null,
    //       action: "create",
    //       did: "",
    //       key: "",
    //       msg_id: "",
    //       requester_id: "",
    //       authToken: "8cbca251-f2d4-4dfa-97f8-8bc937be192f",
    //     },

    //     BPA: {
    //     approvalNo: null,
    //     accountId: null,
    //     edcrNumber: null,
    //     riskType: null,
    //     applicationType: "FORM_11",
    //     serviceType: "FORM_11",
    //     landId: null,
    //     tenantId: "hr",
    //     applicationDate: "1676613488134",
    //     status: "INITIATE",
    //     department: "TCP",
    //     category: "Residential",
    //     totalPlotArea: 1.02,
    //     applcationDetail: {
    //       applicantInfo: {
    //           applicantName: applicantData && applicantData.applicantName,
    //           guardianName: applicantData && applicantData.guardianName,
    //           applicantMobileNo: applicantData && applicantData.applicantMobileNo,
    //           aadharNo: applicantData && applicantData.aadharNo,
    //           uploadPhoto: "",
    //           addMoreApplicant: "",
    //           emailId: applicantData && applicantData.emailId,
    //           pvtProfMobileNo: applicantData && applicantData.applicantMobileNo,
    //           nocApplicantInfo: null
    //       },
    //       landAreaDetails: {
    //           district: applicantData && applicantData.district,
    //           notifiedArea: applicantData && applicantData.notifiedArea,
    //           category: "Residential",
    //           nameOfVillage: applicantData && applicantData.nameOfVillage,
    //           nameOfULB: "nameOfULB",
    //           nameOfWard: null,
    //           additionalLandAreaDetails: {
    //               Name: applicantData && applicantData.applicantName,
    //               Gender: "Male",
    //               Age: "48",
    //               Try: {
    //                   address: applicantData &&  applicantData.correspondenceAddress,
    //                   pin: applicantData && applicantData.permanentPincode
    //               }
    //           },
    //           applicantionInfo: {
    //               Name: applicantData && applicantData.applicantName,
    //               Gender: "Male",
    //               Age: "48"
    //           }
    //       },
    //       descriptionOfLand: {
    //           revenueVillageMohalla: applicantData && applicantData.revenueVillageMohalla,
    //           khatoniNo: applicantData && applicantData.khatoniNo,
    //           khasraNo: applicantData && applicantData.khasraNo,
    //           khataNo: applicantData && applicantData.khataNo,
    //           latitudeLongitude: applicantData && applicantData.latitudeLongitude,
    //           totalPlotArea: applicantData && applicantData.totalPlotArea,
    //           areaUnderConsideration: applicantData && applicantData.areaUnderConsideration,
    //           noOfPlot: applicantData && applicantData.noOfPlot,
    //           pvtProfessionalInfo: "pvtProfessionalInfo",
    //           useType: "useType",
    //           propertyType: "propertyType",
    //           plotAreaForSubDivisionalDevelopmentActivitiesInSqM: applicantData && applicantData.plotAreaForSubDivisionalDevelopmentActivitiesInSqM,
    //           whetherChangeOfLandUseInvolved: true,
    //           additionalDescriptionOfLandDeteails: {
    //               address: applicantData && applicantData.correspondenceAddress,
    //               pin: applicantData && applicantData.correspondencePinCode
    //           }
    //       },
    //       permanentAddressDetails: {
    //           name: applicantData && applicantData.PermanentAdressName,
    //           type: "type",
    //           guardianName: applicantData && applicantData.PermanentGuardianName,
    //           state: applicantData && applicantData.permanentState,
    //           district: applicantData && applicantData.permanentDistrict,
    //           tehsil: applicantData && applicantData.permanentTehsil,
    //           townVillageWard: applicantData && applicantData.permanentVillage,
    //           address: applicantData && applicantData.permanentAddress,
    //           pin: applicantData && applicantData.permanentPincode
    //       },
    //       correspondenceAddressDetails: {
    //           name:  applicantData && applicantData.correspondenceAdressName,
    //           type: "type",
    //           guardianName: applicantData.correspondenceGuardianName,
    //           state: applicantData && applicantData.correspondenceState,
    //           district: applicantData && applicantData.correspondenceDistrict,
    //           tehsil: applicantData && applicantData.correspondenceTehsil,
    //           townVillageWard: applicantData && applicantData.correspondenceVillage,
    //           address: applicantData && applicantData.correspondenceAddress,
    //           pin: applicantData && applicantData.correspondencePinCode
    //       },
    //       permissionOfSubdivisionChecklist: filteredCheckListData,
    //       documents: documentData
    //   },
    //   workflow: {
    //     action: "INITIATE",
    //     assignes: null,
    //     comments: "PPPPPPP",
    //     varificationDocuments: null
    // },
    //     },
    //   })
    //   console.log("ffffffffffffff", formPayload);
    //   var myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");
    //     myHeaders.append("Authorization", "Basic ZWdvdi11c2VyLWNsaWVudDo=");
    //   Digit.Form11Service.create({ data: formPayload }, myHeaders)
    //   .then((result, err) => {
    //     console.log(result, "rrrrrrrrrrrrrrr");
    //     // setIsSubmitBtnDisable(false);
    //     // if (result?.data?.edcrDetail) {
    //     //   setParams(result?.data?.edcrDetail);
    //     //   history.replace(
    //     //     `/digit-ui/citizen/obps/edcrscrutiny/apply/acknowledgement`, ///${result?.data?.edcrDetail?.[0]?.edcrNumber}
    //     //     { data: result?.data?.edcrDetail }
    //     //   );
    //     // }
    //   })
    //   .catch((error) => {
    //     console.log(error, "Eeeeeeeeeeeeee");
    //     // setParams({data: e?.response?.data?.errorCode ? e?.response?.data?.errorCode : "BPA_INTERNAL_SERVER_ERROR", type: "ERROR"});
    //     // setIsSubmitBtnDisable(false);
    //     // setIsShowToast({ key: true, label: e?.response?.data?.errorCode ? e?.response?.data?.errorCode : "BPA_INTERNAL_SERVER_ERROR" })
    //   });
      
    //   // const Resp = await axios.post("/bpa-services/v1/bpa/_createForm", formPayload);
    //   // console.log(Resp, "rrrrrrrr");
      
    // } catch (error) {
    //   console.log(error);
    // }
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Basic ZWdvdi11c2VyLWNsaWVudDo=");

var raw = JSON.stringify({
  "RequestInfo": {
    "api_id": "1",
    "ver": "1",
    "ts": null,
    "action": "create",
    "did": "",
    "key": "",
    "msg_id": "",
    "requester_id": "",
    "authToken": "8cbca251-f2d4-4dfa-97f8-8bc937be192f"
  },
  "BPA": {
    "approvalNo": null,
    "accountId": null,
    "edcrNumber": null,
    "riskType": null,
    "applicationType": "FORM_11",
    "serviceType": "FORM_11",
    "landId": null,
    "tenantId": "hr",
    "applicationDate": "1676613488134",
    "status": "INITIATE",
    "department": "TCP",
    "category": "Residential",
    "totalPlotArea": 1.02,
    "applcationDetail": {
      "applicantInfo": {
        "applicantName": applicantData && applicantData.applicantName,
        "guardianName": applicantData && applicantData.guardianName,
        "applicantMobileNo": applicantData && applicantData.applicantMobileNo,
        "aadharNo": applicantData && applicantData.aadharNo,
        "uploadPhoto": "",
        "addMoreApplicant": "VV SS RR",
        "emailId": applicantData && applicantData.emailId,
        "pvtProfMobileNo":  applicantData && applicantData.applicantMobileNo,
        "nocApplicantInfo": null
      },
      // "landAreaDetails": {
      //   "district": applicantData && applicantData.district,
      //   "notifiedArea": applicantData && applicantData.notifiedArea,
      //   "category": "Residential",
      //   "nameOfVillage": applicantData && applicantData.nameOfVillage,
      //   "nameOfULB": "nameOfULB",
      //   "nameOfWard": null,
      //   "additionalLandAreaDetails": {
      //     "Name": applicantData && applicantData.applicantName,
      //     "Gender": "Male",
      //     "Age": "48",
      //     "Try": {
      //       "address": applicantData &&  applicantData.correspondenceAddress,
      //       "pin": applicantData && applicantData.permanentPincode
      //     }
      //   },
      //   "applicantionInfo": {
      //     "Name": "XXXXXXX",
      //     "Gender": "Male",
      //     "Age": "88"
      //   }
      // },
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
        "revenueVillageMohalla": applicantData && applicantData.revenueVillageMohalla,
        "khatoniNo": applicantData && applicantData.khatoniNo,
        "khasraNo": applicantData && applicantData.khasraNo,
        "khataNo": applicantData && applicantData.khataNo,
        "latitudeLongitude": applicantData && applicantData.latitudeLongitude,
        "totalPlotArea": applicantData && applicantData.totalPlotArea,
        "areaUnderConsideration": applicantData && applicantData.areaUnderConsideration,
        "noOfPlot": applicantData && applicantData.noOfPlot,
        "pvtProfessionalInfo": "pvtProfessionalInfo",
        "useType": "useType",
        "propertyType": "propertyType",
        "plotAreaForSubDivisionalDevelopmentActivitiesInSqM": applicantData && applicantData.plotAreaForSubDivisionalDevelopmentActivitiesInSqM,
        "whetherChangeOfLandUseInvolved": true,
        "additionalDescriptionOfLandDeteails": {
          "address": applicantData && applicantData.correspondenceAddress,
          "pin": applicantData && applicantData.correspondencePinCode
        }
      },
      "permanentAddressDetails": {
        "name": applicantData && applicantData.PermanentAdressName,
        "type": "type",
        "guardianName": applicantData && applicantData.PermanentGuardianName,
        "state": applicantData && applicantData.permanentState,
        "district": applicantData && applicantData.permanentDistrict,
        "tehsil": applicantData && applicantData.permanentTehsil,
        "townVillageWard": applicantData && applicantData.permanentVillage,
        "address": applicantData && applicantData.permanentAddress,
        "pin": applicantData && applicantData.permanentPincode
      },
      "correspondenceAddressDetails": {
        "name": applicantData && applicantData.correspondenceAdressName,
        "type": "type",
        "guardianName": applicantData.correspondenceGuardianName,
        "state": applicantData && applicantData.correspondenceState,
        "district": applicantData && applicantData.correspondenceDistrict,
        "tehsil": applicantData && applicantData.correspondenceTehsil,
        "townVillageWard": applicantData && applicantData.correspondenceVillage,
        "address": applicantData && applicantData.correspondenceAddress,
        "pin": applicantData && applicantData.correspondencePinCode
      },
      "permissionOfSubdivisionChecklist": filteredCheckListData,
      "documents": documentData
    },
    "workflow": {
      "action": "INITIATE",
      "assignes": null,
      "comments": "PPPPPPP",
      "varificationDocuments": null
    }
  }
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(Urls.form11.create, requestOptions)
  .then(response => response.text())
  .then(result => {
    setResponseData(result)
    // setApplicationNumber(result.BPA[0].applicationNo)
    console.log({result, responseData}, "rrrrr");
  })
  .catch(error => console.log('error', error));
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
      <Button type="submit" style={{backgroundColor: '#1fa47c', color: 'white', marginLeft: '650px', marginBottom: '100px'}} onClick={handleSubmit} >Submit</Button>
    </div>
  );
};

export default Form11;
