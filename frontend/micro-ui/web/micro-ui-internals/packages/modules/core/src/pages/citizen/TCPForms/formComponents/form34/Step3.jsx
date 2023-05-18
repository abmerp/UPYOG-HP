import React from "react";
import { useForm } from "react-hook-form";
import ButtonWrapper from "../../components/Button";
import InputContainer from "../../layout/inputContainer";
import "../../styles/Forms.css";

const Step3 = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section className="container">
      <div className="headerContainer">
        <div className="buttonWrapper">
          <ButtonWrapper
            variant="contained"
            color="primary"
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
            color="success"
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
            <h2 className="formHeading">Upload Documents</h2>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
              <InputContainer
                label="Agriculture Certificate/Permission under section 118 of the HP tenancy and land reforms act 1972 "
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
                labelWidth={"50vw"}
              />
              <InputContainer
                label="In case of Firm/Company/Cooperative Society Copy of Regis-tration Certificate"
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
                labelWidth={"50vw"}
              />
              <InputContainer
                label="A copy of latest Jamabandi (not being more than six-month-old), in original showing the title/ownership of the land under the Real Estate Project."
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
                labelWidth={"50vw"}
              />
              <InputContainer
                label="A copy of latest original Tatima(not being more than six month old), showing Khasra number(s), description and area of land in question, abutting Road/path with its width as well as adjoining Khasra numbers falling on all the outer limits/ boundaries of the land in question with their revenue classifi-cation."
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
                labelWidth={"50vw"}
              />
              <InputContainer
                label="Details of encumbrances on the land on which development of project is proposed including details of any rights, title, inter-est, dues, mortgage, litigation in Revenue Courts and name of party in or over such land or non-encumbrance certificate from an Advocate having experience of atleast ten years or from the revenue authority not below the rank of Tehsildar/ Naib Tehsildar, as the case may be"
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
                labelWidth={"50vw"}
              />
              <InputContainer
                label="Three sets of Location Plan in the scale of 1:1000 showing North direction, indicating the land in question, showing main approach road(s), name of road(s) on which the property and boundaries abuts, important public buildings like hospital, school, cinema, petrol pump, existing land uses / building uses surrounding the land."
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
                labelWidth={"50vw"}
              />
              <InputContainer
                label="The Site Plan to be submitted along with the application for seeking permission shall be drawn to a scale of 1: 200 for plots up to 2500 square metres in size and on a scale of 1:500 for plots more than 2500 square metres in size"
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
                labelWidth={"50vw"}
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

export default Step3;
