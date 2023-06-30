import React from "react";
import { useForm } from "react-hook-form";
import ButtonWrapper from "../components/Button";
import InputContainer from '../layout/inputContainer'

const SiteInspectionReport = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section className="container1">
      
      <div className="straightLine" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">Upload Site Inspection Report</h2>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
              <InputContainer
                label="Site Inspection Report"
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
              />
            </div>
            <div className="columnWrapper">
              <InputContainer
                label="Remarks"
                control={control}
                placeholder="Give your remarks"
                name="remarks"
                mandatory
                type="textInput"
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

export default SiteInspectionReport;
