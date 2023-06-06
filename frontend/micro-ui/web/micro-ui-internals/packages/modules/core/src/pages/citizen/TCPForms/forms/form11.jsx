import React, { useEffect, useState } from "react";
import Step1 from "../formComponents/form11/Step1";
import Step2 from "../formComponents/form11/Step2";
import Step3 from "../formComponents/form11/Step3";
import PrivateProffestional from "../formComponents/form26/Step2";
import Noc from "./noc";
import { Button } from "@mui/material";
import axios from "axios";

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

  const filteredCheckListData = Object.entries(checkListData).reduce((acc, [key, value]) => {
    if (value !== undefined) {
      acc[key] = value;
    }
    return acc;
  }, {});

  // console.log("fffffffffff", applicantData.correspondencePinCode, applicantData.correspondenceAdressName, applicantData.correspondenceGuardianName);

  const handleSubmit = async () => {
    try {
      const formPayload = {
        requestInfo: {
          api_id: "1",
          ver: "1",
          ts: null,
          action: "create",
          did: "",
          key: "",
          msg_id: "",
          requester_id: "",
          authToken: "15413b0e-8b96-4580-a8fa-7d68e9e8c2d5",
        },

        BPA: {
        approvalNo: null,
        accountId: null,
        edcrNumber: null,
        riskType: null,
        applicationType: "FORM_11",
        serviceType: "FORM_11",
        landId: null,
        tenantId: "hr",
        applicationDate: "1676613488134",
        status: "INITIATE",
        department: "TCP",
        category: "Residential",
        totalPlotArea: 1.02,
        applcationDetail: {
          applicantInfo: {
              applicantName: applicantData && applicantData.applicantName,
              guardianName: applicantData && applicantData.guardianName,
              applicantMobileNo: applicantData && applicantData.applicantMobileNo,
              aadharNo: applicantData && applicantData.aadharNo,
              uploadPhoto: "",
              addMoreApplicant: "",
              emailId: applicantData && applicantData.emailId,
              pvtProfMobileNo: applicantData && applicantData.applicantMobileNo,
              nocApplicantInfo: null
          },
          landAreaDetails: {
              district: applicantData && applicantData.district,
              notifiedArea: applicantData && applicantData.notifiedArea,
              category: "Residential",
              nameOfVillage: applicantData && applicantData.nameOfVillage,
              // nameOfULB: "nameOfULB",
              nameOfWard: applicantData && applicantData.nameOfWard,
              additionalLandAreaDetails: {
                  Name: applicantData && applicantData.applicantName,
                  Gender: "Male",
                  Age: "48",
                  Try: {
                      address: applicantData &&  applicantData.correspondenceAddress,
                      pin: applicantData && applicantData.permanentPincode
                  }
              },
              applicantionInfo: {
                  Name: applicantData && applicantData.applicantName,
                  Gender: "Male",
                  Age: "48"
              }
          },
          descriptionOfLand: {
              revenueVillageMohalla: applicantData && applicantData.revenueVillageMohalla,
              khatoniNo: applicantData && applicantData.khatoniNo,
              khasraNo: applicantData && applicantData.khasraNo,
              khataNo: applicantData && applicantData.khataNo,
              latitudeLongitude: applicantData && applicantData.latitudeLongitude,
              totalPlotArea: applicantData && applicantData.totalPlotArea,
              areaUnderConsideration: applicantData && applicantData.areaUnderConsideration,
              noOfPlot: applicantData && applicantData.noOfPlot,
              pvtProfessionalInfo: "pvtProfessionalInfo",
              useType: "useType",
              propertyType: "propertyType",
              plotAreaForSubDivisionalDevelopmentActivitiesInSqM: applicantData && applicantData.plotAreaForSubDivisionalDevelopmentActivitiesInSqM,
              whetherChangeOfLandUseInvolved: true,
              additionalDescriptionOfLandDeteails: {
                  address: applicantData && applicantData.correspondenceAddress,
                  pin: applicantData && applicantData.correspondencePinCode
              }
          },
          permanentAddressDetails: {
              name: applicantData && applicantData.PermanentAdressName,
              type: "type",
              guardianName: applicantData && applicantData.PermanentGuardianName,
              state: applicantData && applicantData.permanentState,
              district: applicantData && applicantData.permanentDistrict,
              tehsil: applicantData && applicantData.permanentTehsil,
              townVillageWard: applicantData && applicantData.permanentVillage,
              address: applicantData && applicantData.permanentAddress,
              pin: applicantData && applicantData.permanentPincode
          },
          correspondenceAddressDetails: {
              name:  applicantData && applicantData.correspondenceAdressName,
              type: "type",
              guardianName: applicantData.correspondenceGuardianName,
              state: applicantData && applicantData.correspondenceState,
              district: applicantData && applicantData.correspondenceDistrict,
              tehsil: applicantData && applicantData.correspondenceTehsil,
              townVillageWard: applicantData && applicantData.correspondenceVillage,
              address: applicantData && applicantData.correspondenceAddress,
              pin: applicantData && applicantData.correspondencePinCode
          },
          permissionOfSubdivisionChecklist: filteredCheckListData,
          documents: documentData
      },
      workflow: {
        action: "INITIATE",
        assignes: null,
        comments: "PPPPPPP",
        varificationDocuments: null
    },
        },
      };
      const Resp = await axios.post("/bpa-services/v1/bpa/_createForm", formPayload);
      console.log(Resp, "rrrrrrrr");
      
    } catch (error) {
      console.log(error);
    }
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
