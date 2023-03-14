import React from "react";
import { MenuItem } from "@mui/material";
import { useForm } from "react-hook-form";
import ButtonWrapper from "../components/Button";
import TextInput from "../components/TextInput";
import {
  appealApplicationStatus,
  existingLandUse,
  nameSuffix,
  natureOfTower,
  propertyType,
  relationSuffix,
  towerToBeProposed,
  typeOfCluInvolved,
  typeOfLandForDevelopment,
  yesOrNo,
} from "../data";
import InputContainer from "../layout/inputContainer";
import Checkboxes from "../components/CheckBox";

const ApplicationForMobileTower = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section className="container">
      <div className="header">Form of application for Mobile Tower</div>
      <h5 className="mandatoryInfo note">(*) Indicates Mandatory Field</h5>
      <div className="straightLine" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">Land Area Details </h2>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
              <InputContainer
                label="District"
                control={control}
                placeholder="Select District"
                name="district"
                mandatory
                type="selectInput"
                data={appealApplicationStatus}
              />
              {/* <InputContainer
                label="Notified Area "
                control={control}
                placeholder="Select Notified Area"
                name="notifiedArea"
                mandatory
                type="selectInput"
                data={appealApplicationStatus}
              />
              <InputContainer
                label="Name of Village"
                control={control}
                placeholder="Select Name of Village"
                name="nameOfVillage"
                mandatory
                type="selectInput"
                data={appealApplicationStatus}
              /> */}
              <InputContainer
                label="Name of ULB"
                control={control}
                placeholder="Enter Name of ULB"
                name="nameOfVillage"
                mandatory
                type="textInput"
              />
              <InputContainer
                label="Name of Ward"
                control={control}
                placeholder="Enter Name of Ward"
                name="nameOfVillage"
                mandatory
                type="textInput"
              />
            </div>
          </div>
        </div>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">Applicant Information</h2>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
              <InputContainer
                label="Applicant Name"
                control={control}
                placeholder="Enter Applicant Name"
                name="applicantName"
                mandatory
                type="textInput"
              />
              <InputContainer
                label="Guardian Name"
                control={control}
                placeholder="Enter Guardian Name"
                name="guardianName"
                type="textInput"
              />
              <InputContainer
                label="Mobile Number"
                control={control}
                placeholder="Enter Mobile Number"
                name="mobileNumber"
                mobileNumber
                mandatory
                type="textInput"
              />
            </div>
            <div className="columnWrapper">
              <InputContainer
                label="Aadhar No."
                control={control}
                placeholder="Enter Aadhar No."
                name="aadharNumber"
                type="textInput"
                mandatory
              />
            </div>
          </div>
        </div>

        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">Address Details</h2>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
              <h3 className="addressType">Correspondence Address</h3>

              <div className="inputContainer">
                <h3 className="label multiCoumn">
                  <span className="compulsoryField">*</span>
                  Name :
                </h3>
                <TextInput
                  defaultValue="Mr."
                  variant="outlined"
                  size="small"
                  width="5.625vw"
                  select
                  name="initialForCorrespondenceadressName"
                  control={control}
                >
                  {nameSuffix?.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextInput>
                <TextInput
                  label="Enter Name"
                  variant="outlined"
                  size="small"
                  width="15.625vw"
                  name="correspondenceAdressName"
                  control={control}
                />
              </div>
              <div className="inputContainer">
                <h3 className="label multiCoumn">Guardian Name :</h3>
                <TextInput
                  defaultValue="S/O"
                  variant="outlined"
                  size="small"
                  width="5.625vw"
                  select
                  name="initialForCorrespondenceadressGuardianName"
                  control={control}
                >
                  {relationSuffix?.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextInput>
                <TextInput
                  label="Enter Guardian Name"
                  variant="outlined"
                  size="small"
                  width="15.625vw"
                  name="correspondenceGuardianName"
                  control={control}
                />
              </div>
              <InputContainer
                control={control}
                inputLabel="Select State"
                label="State :"
                data={yesOrNo}
                placeholder="Select State"
                name="state"
                mandatory
                type="selectInput"
                multiColumn
              />
              <InputContainer
                control={control}
                inputLabel="Select District"
                label="District :"
                data={yesOrNo}
                placeholder="Select District"
                name="state"
                mandatory
                type="selectInput"
                multiColumn
              />
              <InputContainer
                control={control}
                inputLabel="Select Tehsil"
                label="Tehsil :"
                data={yesOrNo}
                placeholder="Select Tehsil"
                name="state"
                mandatory
                type="selectInput"
                multiColumn
              />
              <InputContainer
                label="Town/Village/Ward : "
                control={control}
                placeholder="Enter Town/Village/Ward"
                name="email"
                mandatory
                type="textInput"
                multiColumn
              />
              <InputContainer
                label="Address : "
                control={control}
                placeholder="Enter Address"
                name="address"
                mandatory
                type="textInput"
                multiColumn
                multiLine
              />

              <InputContainer
                label=" Pincode : "
                control={control}
                placeholder="Enter Pincode"
                name="email"
                mandatory
                type="textInput"
                multiColumn
              />
            </div>
            <div className="columnWrapper">
              <h3 className="addressType">
                Permanent Address
                <Checkboxes />
                Same as Corresponding Address
              </h3>
              <div className="inputContainer">
                <h3 className="label multiCoumn">
                  <span className="compulsoryField">*</span>
                  Name :
                </h3>
                <TextInput
                  defaultValue="Mr."
                  variant="outlined"
                  size="small"
                  width="5.625vw"
                  select
                  name="initialForCorrespondenceadressName"
                  control={control}
                >
                  {nameSuffix?.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextInput>
                <TextInput
                  label="Enter Name"
                  variant="outlined"
                  size="small"
                  width="15.625vw"
                  name="correspondenceAdressName"
                  control={control}
                />
              </div>
              <div className="inputContainer">
                <h3 className="label multiCoumn">Guardian Name :</h3>
                <TextInput
                  defaultValue="S/O"
                  variant="outlined"
                  size="small"
                  width="5.625vw"
                  select
                  name="initialForCorrespondenceadressGuardianName"
                  control={control}
                >
                  {relationSuffix?.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextInput>
                <TextInput
                  label="Enter Guardian Name"
                  variant="outlined"
                  size="small"
                  width="15.625vw"
                  name="correspondenceGuardianName"
                  control={control}
                />
              </div>
              <InputContainer
                control={control}
                inputLabel="Select State"
                label="State :"
                data={yesOrNo}
                placeholder="Select State"
                name="state"
                mandatory
                type="selectInput"
                multiColumn
              />
              <InputContainer
                control={control}
                inputLabel="Select District"
                label="District :"
                data={yesOrNo}
                placeholder="Select District"
                name="state"
                mandatory
                type="selectInput"
                multiColumn
              />
              <InputContainer
                control={control}
                inputLabel="Select Tehsil"
                label="Tehsil :"
                data={yesOrNo}
                placeholder="Select Tehsil"
                name="state"
                mandatory
                type="selectInput"
                multiColumn
              />
              <InputContainer
                label="Town/Village/Ward : "
                control={control}
                placeholder="Enter Town/Village/Ward"
                name="email"
                mandatory
                type="textInput"
                multiColumn
              />
              <InputContainer
                label="Address : "
                control={control}
                placeholder="Enter Address"
                name="address"
                mandatory
                type="textInput"
                multiColumn
                multiLine
              />

              <InputContainer
                label=" Pincode : "
                control={control}
                placeholder="Enter Pincode"
                name="email"
                mandatory
                type="textInput"
                multiColumn
              />
            </div>
          </div>
        </div>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">
              Description of land or building proposed for Installation of Tower
            </h2>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
              <InputContainer
                label="Nature of Tower "
                control={control}
                placeholder="Select"
                name="revenueVillageMohalla"
                mandatory
                type="selectInput"
                data={natureOfTower}
              />
              <InputContainer
                label="Tower to be Proposed"
                control={control}
                placeholder="Select"
                name="revenueVillageMohalla"
                mandatory
                type="selectInput"
                data={towerToBeProposed}
              />
              <InputContainer
                label="Revenue Village/Mohalla"
                control={control}
                placeholder="Select"
                name="revenueVillageMohalla"
                mandatory
                type="selectInput"
                data={appealApplicationStatus}
              />

              <InputContainer
                label="Khasra No."
                control={control}
                placeholder="Enter Khasra No."
                name="applicantName"
                type="textInput"
                mandatory
              />
              <InputContainer
                label="Khata No."
                control={control}
                placeholder="Enter Khata No."
                name="applicantName"
                type="textInput"
              />
              <InputContainer
                label="Khatoni No."
                control={control}
                placeholder="Enter Khatoni No."
                name="applicantName"
                type="textInput"
              />
              <InputContainer
                label="Whether proposed tower will be used by single company "
                control={control}
                name="gender"
                mandatory
                data={yesOrNo}
                type="radioButton"
              />
              <InputContainer
                label="Installation fees deposited in concerned ULB/MC/Panchayat "
                control={control}
                name="gender"
                mandatory
                data={yesOrNo}
                type="radioButton"
              />
              <InputContainer
                label="Whether Change of Land use Involved "
                control={control}
                name="gender"
                mandatory
                data={yesOrNo}
                type="radioButton"
              />
            </div>
            <div className="columnWrapper">
              <InputContainer
                label="Area (Sq.M)"
                control={control}
                placeholder="Enter Area (Sq.M)"
                name="applicantName"
                mandatory
                type="textInput"
              />
              <InputContainer
                label="Total Plot Area (Sq.m)"
                control={control}
                placeholder="Enter Total Plot Area (Sq.m)"
                name="applicantName"
                mandatory
                type="textInput"
              />
              <InputContainer
                label="Proposed Ground Coverage (Sq.M) "
                control={control}
                placeholder="Enter Proposed Ground Coverage"
                name="applicantName"
                mandatory
                type="textInput"
              />

              <InputContainer
                label="Applied Land Use "
                control={control}
                placeholder="Select"
                name="revenueVillageMohalla"
                mandatory
                type="selectInput"
                data={propertyType}
              />
              <InputContainer
                label="PropertyType"
                control={control}
                placeholder="Select"
                name="revenueVillageMohalla"
                mandatory
                type="selectInput"
                data={propertyType}
              />
            </div>
          </div>
        </div>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">Upload Documents</h2>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
              <InputContainer
                label="Jamabandhi Document"
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
              />
              <InputContainer
                label="Copy of Agreement with Landowner "
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
              />
              <InputContainer
                label="Location Plan"
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
              />
              <InputContainer
                label="Site Plan"
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
              />

              <InputContainer
                label="Proposed Consolidated Map 1 "
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
              />
            </div>
            <div className="columnWrapper">
              <InputContainer
                label="Tatima Documents"
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
              />
              <InputContainer
                label="Demarcation/Affidavit"
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
              />
              <InputContainer
                label="Indemnity Bond "
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
              />
              <InputContainer
                label="Other Documents"
                control={control}
                name="picture"
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
              />
            </div>
          </div>
        </div>
        <div className="footerContainer">
          <div className="buttonWrapper">
            <ButtonWrapper
              variant="contained"
              color="warning"
              size="medium"
              label="Save as Draft"
            />
            <ButtonWrapper
              variant="contained"
              color="success"
              size="medium"
              label="Submit"
              type="submit"
            />
            <ButtonWrapper
              variant="contained"
              color="error"
              size="medium"
              label="Reset"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default ApplicationForMobileTower;
