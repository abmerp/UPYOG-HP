import React from "react";
import { MenuItem } from "@mui/material";
import { useForm } from "react-hook-form";
import ButtonWrapper from "../../components/Button";
import TextInput from "../../components/TextInput";
import RadioButton from "../../components/RadioButton";
import {
  appealApplicationStatus,
  DistrictsData,
  NamesOFULB,
  nameSuffix,
  propertyType,
  relationSuffix,
  typeOfLandForDevelopment,
  yesOrNo,
  statesData
} from "../../data";
import InputContainer from "../../layout/inputContainer";
import Checkboxes from "../../components/CheckBox";

const Step1 = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section className="container1">
      <div className="header">
        Form of application for permission under sub-section (2) of section 15-A
        or clause (a) of section 16 or sub-section (1) of section 30-A (beyond
        the limits as specified under section 30-A) of the Himachal Pradesh Town
        and Country Act,1977 (Act No. 12 of 1977) for sub-division/ development
        of land.{" "}
      </div>
      <div className="headerContainer">
        <div className="buttonWrapper">
          <ButtonWrapper
            variant="contained"
            color="success"
            size="medium"
            label="Applicant Information"
          />
          <ButtonWrapper
            variant="contained"
            color="primary"
            size="medium"
            label="Private Professional Information"
          />
          <ButtonWrapper
            variant="contained"
            color="primary"
            size="medium"
            label="Checklist"
          />
          <ButtonWrapper
            variant="contained"
            color="primary"
            size="medium"
            label="Documents"
          />
        </div>
        <h5 className="mandatoryInfo">(*) Indicates Mandatory Field</h5>
      </div>
      <div className="straightLine" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">
              Location of proposed for Subdivision/Development
            </h2>
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
              {/* <InputContainer
                label="Notified Area"
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
             
            </div>
            <div className="columnWrapper">
            <InputContainer
                label="ULB Type"
                control={control}
                placeholder="Select ULB Type"
                name="notifiedArea"
                mandatory
                type="selectInput"
                data={NamesOFULB}
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
                mandatory
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
              <InputContainer
                label="Email Id"
                control={control}
                placeholder="Enter Email Id"
                name="mobileNumber"
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
              <div className="checkboxWrapper">
                <h3 className="addressType">Permanent Address</h3>
                <Checkboxes />
                Same as Corresponding Address
              </div>
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
              Description of land proposed for Sub-division/Development of Land
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
                mandatory
              />
              <InputContainer
                label="Khatauni No."
                control={control}
                placeholder="Enter Khatauni No."
                name="applicantName"
                type="textInput"
              />
              <InputContainer
                label="Latitude/Longitude"
                control={control}
                placeholder="Enter Latitude/Longitude"
                name="applicantName"
                type="textInput"
              />
              <InputContainer
                label="District"
                control={control}
                placeholder="Select District"
                name="revenueVillageMohalla"
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
            <div className="columnWrapper">
              <InputContainer
                label="Area under Consideration (Sq.m)"
                control={control}
                placeholder="Enter Area under Consideration "
                name="applicantName"
                mandatory
                type="textInput"
              />
              <InputContainer
                label="No. of Plot "
                control={control}
                placeholder="Enter No. of Plot "
                name="applicantName"
                mandatory
                type="textInput"
              />
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
              label="Next"
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

export default Step1;
