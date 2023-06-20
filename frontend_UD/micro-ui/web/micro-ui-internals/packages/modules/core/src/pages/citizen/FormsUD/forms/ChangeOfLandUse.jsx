import React from "react";
import { MenuItem } from "@mui/material";
import { useForm } from "react-hook-form";
import ButtonWrapper from "../components/Button";
import TextInput from "../components/TextInput";
import { DistrictsData, statesData,NamesOFULB } from "../data";
import RadioButton from "../components/RadioButton";

import {
  appealApplicationStatus,
  existingLandUse,
  nameSuffix,
  propertyType,
  relationSuffix,
  typeOfCluInvolved,
  typeOfLandForDevelopment,
  yesOrNo,
} from "../data";
import InputContainer from "../layout/inputContainer";
import Checkboxes from "../components/CheckBox";

const ChangeOfLandUse = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section className="container1">
      <div className="header">Form of Application for Change of Land Use</div>
      <h5 className="mandatoryInfo note">(*) Indicates Mandatory Field</h5>
      <div className="straightLine" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">Land Area Details</h2>
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
                data={DistrictsData}
              />
               <InputContainer
                label="ULB Type"
                control={control}
                placeholder="Select ULB Type"
                name="notifiedArea"
                mandatory
                type="selectInput"
                data={NamesOFULB}
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
                placeholder="Select Name of ULB"
                name="notifiedArea"
                mandatory
                type="selectInput"
              />
             <InputContainer
                label="Name of Ward"
                control={control}
                placeholder="Select Name of Ward"
                name="notifiedArea"
                mandatory
                type="selectInput"
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
            <h2 className="formHeading">Contact Information</h2>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
              <InputContainer
                label="E-mail ID "
                control={control}
                placeholder="Enter E-mail ID "
                name="email"
                mandatory
                type="textInput"
              />
              <InputContainer
                label="Private Prof. Mobile No."
                control={control}
                placeholder="Enter Mobile Number"
                name="mobileNumber"
                type="textInput"
                mobileNumber
              />
            </div>
            <div className="columnWrapper">
              <InputContainer
                label="Upload Picture"
                control={control}
                name="picture"
                mandatory
                type="upload"
                uploadValidity="(png file only and Max file Size 1 MB)"
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
                data={statesData}
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
                data={DistrictsData}
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
                data={statesData}
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
                data={DistrictsData}
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
              Description of land proposed for Development of Land/Con-struction
              of Building
            </h2>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
            <InputContainer
                label="Revenue Village/Mohal/Phati/ Up Mohal"
                control={control}
                placeholder="Select"
                name="revenueVillageMohalla"
                mandatory
                type="selectInput"
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
                label="Khatauni No."
                control={control}
                placeholder="Enter Khatauni No."
                name="applicantName"
                type="textInput"
              />
              <div className="inputContainer">
                <h3 className="label multiColumn">
                  <span className="compulsoryField">*</span>
                  Property Type :
                </h3>
                <RadioButton
                  row
                  data={propertyType}
                  control={control}
                  name="propertyType"
                />
              </div>
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
                label="Area for CLU (Sq.m)"
                control={control}
                placeholder="Enter Area for CLU (Sq.m)"
                name="applicantName"
                mandatory
                type="textInput"
              />
            </div>
          </div>
        </div>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">Details of Change Of Land Use</h2>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
              <InputContainer
                label="Existing Land Use"
                control={control}
                placeholder="Select"
                name="revenueVillageMohalla"
                mandatory
                type="selectInput"
                data={existingLandUse}
              />
              <InputContainer
                label="Type of CLU Involved"
                control={control}
                placeholder="Select"
                name="revenueVillageMohalla"
                mandatory
                type="selectInput"
                data={typeOfCluInvolved}
              />
              <InputContainer
                label="Type of Land for Development"
                control={control}
                placeholder="Select"
                name="revenueVillageMohalla"
                mandatory
                type="selectInput"
                data={typeOfLandForDevelopment}
              />
            </div>
            <div className="columnWrapper">
              <InputContainer
                label="Upload Signature"
                control={control}
                name="picture"
                mandatory
                type="upload"
                uploadValidity="(pdf file only and Max file Size 1 MB)"
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

export default ChangeOfLandUse;
