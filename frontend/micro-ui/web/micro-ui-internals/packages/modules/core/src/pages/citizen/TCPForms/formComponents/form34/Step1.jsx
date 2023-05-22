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
    <section className="container1">
      <div className="header">
        The act and rule for Real Estate Projects derived from Rule 13, 14 and
        16.
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
                label="Type of Real Es-tate Projects "
                control={control}
                placeholder="Select"
                name="district"
                mandatory
                type="selectInput"
                data={appealApplicationStatus}
              />
              <InputContainer
                label="Name and Style of Project"
                control={control}
                placeholder="Enter Name and Style of Project"
                name="applicantName"
                mandatory
                type="textInput"
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
                label="Khasra No."
                control={control}
                placeholder="Enter Khasra No."
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

              <InputContainer
                label="Khata No."
                control={control}
                placeholder="Enter Khata No."
                name="applicantName"
                type="textInput"
                mandatory
              />
              <InputContainer
                label="Hadbast No."
                control={control}
                placeholder="Enter Hadbast No."
                name="applicantName"
                type="textInput"
                mandatory
              />
              <InputContainer
                label="Mauja/Mohal No."
                control={control}
                placeholder="Enter Mauja/Mohal No."
                name="applicantName"
                type="textInput"
                mandatory
              />
            </div>
            <div className="columnWrapper">
              <InputContainer
                label="Tehsil "
                control={control}
                placeholder="Select Tehsil "
                name="district"
                mandatory
                type="selectInput"
                data={yesOrNo}
              />
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
                label="State "
                control={control}
                placeholder="Select State "
                name="district"
                mandatory
                type="selectInput"
                data={yesOrNo}
              />
            </div>
          </div>
        </div>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">Status of the Applicant </h2>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
              <InputContainer
                label="whether individual or Company or Firm or Association of Persons or Co-operative Society or joint family"
                control={control}
                placeholder="Enter Name "
                name="applicantName"
                mandatory
                type="textInput"
                labelWidth={"40vw"}
              />
            </div>
          </div>
        </div>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">
              In case of Individual or Associ-ation of Persons or joint family
            </h2>
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
                label="Father's Name"
                control={control}
                placeholder="Enter Father's Name "
                name="applicantName"
                mandatory
                type="textInput"
              />
            </div>
            <div className="columnWrapper">
              <InputContainer
                label="Occupation"
                control={control}
                placeholder="Enter Occupation "
                name="applicantName"
                mandatory
                type="textInput"
              />
              <InputContainer
                label="Permanent Address"
                control={control}
                placeholder="Enter Permanent Address "
                name="applicantName"
                mandatory
                type="textInput"
                multiLine
              />
            </div>
          </div>
        </div>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">
              In case of Firm or Co-operative Society or Company
            </h2>
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
                label="Permanent Address"
                control={control}
                placeholder="Enter Permanent Address "
                name="applicantName"
                mandatory
                type="textInput"
                multiLine
              />
            </div>
            <div className="columnWrapper">
              <InputContainer
                label="Copy of Registra-tion Certificate"
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
              />
            </div>
          </div>
        </div>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">Major activities</h2>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
              <InputContainer
                label="Remarks"
                control={control}
                placeholder="Enter Remarks "
                name="applicantName"
                mandatory
                type="textInput"
              />
            </div>
          </div>
        </div>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">
              Name and Ad-dress of Part-ners/ Chief Exec-utive/ Full time
              Directors
            </h2>
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
                label=" Address"
                control={control}
                placeholder="Enter  Address "
                name="applicantName"
                mandatory
                type="textInput"
                multiLine
              />
            </div>
          </div>
        </div>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">
              Whether applicant is Income Tax payee/ as-sesses
            </h2>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
              <InputContainer
                label="If Yes "
                control={control}
                placeholder="Select"
                name="district"
                mandatory
                type="selectInput"
                data={appealApplicationStatus}
              />
            </div>
          </div>
        </div>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">
              Whether the applicant had ever been granted permis-sion to set up
              a Real Estate Pro-ject or Building or Apartment un-der any other
              law
            </h2>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
              <InputContainer
                label="If Yes "
                control={control}
                placeholder="Select"
                name="district"
                mandatory
                type="selectInput"
                data={appealApplicationStatus}
              />
              <InputContainer
                label="Remarks"
                control={control}
                placeholder="Enter Remarks "
                name="applicantName"
                mandatory
                type="textInput"
              />
            </div>
          </div>
        </div>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">
              (Whether the ap-plicant has ever established a Real Estate
              Pro-ject or is estab-lishing a Real Es-tate Project, if, yes
              details thereof
            </h2>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
              <InputContainer
                label="If Yes "
                control={control}
                placeholder="Select"
                name="district"
                mandatory
                type="selectInput"
                data={appealApplicationStatus}
              />
              <InputContainer
                label="Remarks"
                control={control}
                placeholder="Enter Remarks "
                name="applicantName"
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
