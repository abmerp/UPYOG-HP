import React from "react";
import { useForm } from "react-hook-form";
import ButtonWrapper from "../../components/Button";
import { statesData } from "../../data";
import InputContainer from "../../layout/inputContainer";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Step2 = () => {
  const { handleSubmit, control } = useForm();
  const history = useHistory()
  const onSubmit = (data) => {
    history.push(`step3`)
  }
  const isPreview = window.location.href.includes('preview')
  return (
    <section className="container1">
      {/* <div className="headerContainer">
        <div className="buttonWrapper">
          <ButtonWrapper
            variant="contained"
            color="primary"
            size="medium"
            label="Applicant Information"
          />
          <ButtonWrapper
            variant="contained"
            color="success"
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
      </div> */}
      <div className="straightLine" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">Private Professional Information</h2>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
              <InputContainer
                label="Registration no."
                control={control}
                placeholder="Enter Registration no."
                name="district"
                mandatory
                type="textInput"
              />
              <InputContainer
                label="Name"
                control={control}
                placeholder="Enter Name"
                name="district"
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
                label="Address "
                control={control}
                placeholder="Enter Address "
                name="district"
                mandatory
                type="textInput"
              />
              <InputContainer
                label="State"
                control={control}
                placeholder="Enter State"
                name="district"
                mandatory
                type="textInput"
                data={statesData}
              />
              <InputContainer
                label="District"
                control={control}
                placeholder="Enter District"
                name="district"
                mandatory
                type="textInput"
              />
              <InputContainer
                label="Qualification Certificates "
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
              />
              <InputContainer
                label="Experience Certificates  "
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
              />
            </div>
            <div className="columnWrapper">
              <InputContainer
                label="Tehsil"
                control={control}
                placeholder="Enter Tehsil"
                name="district"
                mandatory
                type="textInput"
              />
              <InputContainer
                label="Town/Village/Ward"
                control={control}
                placeholder="Enter Town/Village/Ward"
                name="district"
                mandatory
                type="textInput"
              />
              <InputContainer
                label="PIN No."
                control={control}
                placeholder="Enter PIN No. "
                name="district"
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
              <InputContainer
                label="Class (As per Categories define)"
                control={control}
                placeholder="Enter Class"
                name="district"
                mandatory
                type="textInput"
              />
              <InputContainer
                label="Degree University Name"
                control={control}
                placeholder="Enter  Degree University Name"
                name="district"
                mandatory
                type="textInput"
              />
            </div>
          </div>
        </div>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">Structural Engineer Information</h2>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
              <InputContainer
                label="Registration no."
                control={control}
                placeholder="Enter Registration no."
                name="district"
                mandatory
                type="textInput"
              />
              <InputContainer
                label="Name"
                control={control}
                placeholder="Enter Name"
                name="district"
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
                label="Address "
                control={control}
                placeholder="Enter Address "
                name="district"
                mandatory
                type="textInput"
              />
              <InputContainer
                label="State"
                control={control}
                placeholder="Enter State"
                name="district"
                mandatory
                type="textInput"
                data={statesData}
              />
              <InputContainer
                label="District"
                control={control}
                placeholder="Enter District"
                name="district"
                mandatory
                type="textInput"
              />
              <InputContainer
                label="Structural Engineer Stability Certificate "
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
              />
            </div>
            <div className="columnWrapper">
              <InputContainer
                label="Tehsil"
                control={control}
                placeholder="Enter Tehsil"
                name="district"
                mandatory
                type="textInput"
              />
              <InputContainer
                label="Town/Village/Ward"
                control={control}
                placeholder="Enter Town/Village/Ward"
                name="district"
                mandatory
                type="textInput"
              />
              <InputContainer
                label="PIN No."
                control={control}
                placeholder="Enter PIN No. "
                name="district"
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
              {/* <InputContainer
                label="Class (As per Categories define)"
                control={control}
                placeholder="Enter Class"
                name="district"
                mandatory
                type="textInput"
              />
              <InputContainer
                label="Degree University Name"
                control={control}
                placeholder="Enter  Degree University Name"
                name="district"
                mandatory
                type="textInput"
              /> */}
            </div>
          </div>
        </div>

        <div className="footerContainer">
         {!isPreview &&  <div className="buttonWrapper">
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
          }
        </div>
      </form>
    </section>
  );
};

export default Step2;
