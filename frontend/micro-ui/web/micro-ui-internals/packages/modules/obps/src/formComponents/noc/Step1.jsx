import React from "react";
import { useForm } from "react-hook-form";
import ButtonWrapper from "../../components/Button";
import { appealApplicationStatus, yesOrNo } from "../../data";
import InputContainer from "../../layout/inputContainer";
import "../../styles/Form26.css";

const Step1 = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section className="container">
      <div className="header">
        NOC Form used for taking permission for Electrical, Sewerage, and water
        connection from the Urban Development Department.
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
      {/* Form Container starts */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formContainer">
          <div className="formHeaderContainer"></div>
          <div className="formInputContainer">
            <div className="columnWrapper">
              <InputContainer
                label="Building Plan Permission Application No."
                control={control}
                placeholder="Enter Building Plan"
                name="applicantName"
                mandatory
                type="textInput"
              />
              <InputContainer
                label="Applied For "
                control={control}
                placeholder="Select"
                name="district"
                mandatory
                type="selectInput"
                data={appealApplicationStatus}
              />
              <InputContainer
                label="Registration No.of Architect "
                control={control}
                placeholder="Enter Registration No.of Architect "
                name="applicantName"
                mandatory
                type="textInput"
              />
            </div>
          </div>
        </div>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">Architect Details </h2>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
              <InputContainer
                label="Architect Name "
                control={control}
                placeholder="Enter Architect Name "
                name="applicantName"
                mandatory
                type="textInput"
              />
              <InputContainer
                label="Address"
                control={control}
                placeholder="Enter Address"
                name="district"
                mandatory
                type="textInput"
                multiLine
              />
            </div>
            <div className="columnWrapper">
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
                label="E-mail ID "
                control={control}
                placeholder="Enter E-mail ID "
                name="district"
                mandatory
                type="textInput"
              />
            </div>
          </div>
        </div>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">Applicant Information </h2>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
              <InputContainer
                label="Name"
                control={control}
                placeholder="Enter Name "
                name="applicantName"
                mandatory
                type="textInput"
              />
              <InputContainer
                label="E-mail ID "
                control={control}
                placeholder="Enter E-mail ID  "
                name="applicantName"
                mandatory
                type="textInput"
              />
              <InputContainer
                label="Applied On mention date"
                control={control}
                placeholder=" DD/MM/YYYY"
                name="applicantName"
                mandatory
                type="textInput"
              />
              {/* <InputContainer
                label="ULB Name "
                control={control}
                placeholder="Select ULB Name "
                name="district"
                mandatory
                type="selectInput"
                data={yesOrNo}
              /> */}
              <InputContainer
                label="District "
                control={control}
                placeholder="Select District "
                name="district"
                mandatory
                type="selectInput"
                data={yesOrNo}
              />
              <InputContainer
                label="NOC Type "
                control={control}
                placeholder="Select NOC Type "
                name="district"
                mandatory
                type="selectInput"
                data={yesOrNo}
              />
              <InputContainer
                label="Block Name as per database  "
                control={control}
                placeholder="Select Block Name as per database  "
                name="district"
                mandatory
                type="selectInput"
                data={yesOrNo}
              />
            </div>
            <div className="columnWrapper">
              <InputContainer
                label="Floor Name  "
                control={control}
                placeholder="Select Floor Name  "
                name="district"
                mandatory
                type="selectInput"
                data={yesOrNo}
              />
              <InputContainer
                label=" Categories  "
                control={control}
                placeholder="Select Categories  "
                name="district"
                mandatory
                type="selectInput"
                data={yesOrNo}
              />
              <InputContainer
                label="No. of Connections   "
                control={control}
                placeholder="Select No. of Connections   "
                name="district"
                mandatory
                type="selectInput"
                data={yesOrNo}
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

        <div className="footerContainer">
          <div className="buttonWrapper">
            <ButtonWrapper
              variant="contained"
              color="warning"
              size="medium"
              label="Prev"
            />
            <ButtonWrapper
              variant="contained"
              color="success"
              size="medium"
              label="Save as Draft"
              type="submit"
            />
            <ButtonWrapper
              variant="contained"
              color="success"
              size="medium"
              label="Next"
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
