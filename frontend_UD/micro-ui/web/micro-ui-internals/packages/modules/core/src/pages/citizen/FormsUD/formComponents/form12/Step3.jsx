import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ButtonWrapper from "../../components/Button";
import InputContainer from "../../layout/inputContainer";
import "../../styles/Forms.css";
import axios from "axios";


const Step3 = (props) => {
  const { handleSubmit, control } = useForm();
  const [filesArr, setFilesArr] = useState([])

  const onSubmit = (data) => {
    props.formData.step3.docs = filesArr;
    console.log(data);
    console.log(filesArr);
    console.log(props.formData); 
    props.submitForm(1);  
    }

  const getDocumentData = async (file, fieldName) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("tenantId", "hr");
    formData.append("module", "property-upload");
    formData.append("tag", "tag-property");
    // setLoader(true);
    try {
      const resp = await axios.post("/filestore/v1/files", formData, {});
      console.log(resp, "ramsiyaramresp");
      const filesId = resp.data.files[0]
      filesArr.push({
        "documentType": fieldName, 
        "fileStoreId": filesId.fileStoreId
      })
      console.log("ssssss", filesArr);

    } catch (error) {
      // setLoader(false);
      console.log(error.message);
    }
  };

  return (
    <section className="container1">
      <div className="headerContainer">
        {/* <div className="buttonWrapper">
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
            color="success"
            size="medium"
            label="Documents"
          />
        </div> */}
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
              {/* <InputContainer
                label="Structural Stability Certificate "
                control={control}
                name="structuralStabilityCriteria"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
                getDocumentData={getDocumentData}
              />

              <InputContainer
                label="Undertaking of supervision of Building "
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
                getDocumentData={getDocumentData}
              /> */}
              {/* <InputContainer
                label="Undertaking of Owner "
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
                getDocumentData={getDocumentData}
              /> */}
              <InputContainer
                label="Jamabandhi Document "
                control={control}
                name="jamabandhiDocument"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
                getDocumentData={getDocumentData}
              />
              <InputContainer
                label="Demarcation Report/Affidavit "
                control={control}
                name="demarcationReport"
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
                getDocumentData={getDocumentData}
              />
              <InputContainer
                label="Location Plan "
                control={control}
                name="locationPlan"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
                getDocumentData={getDocumentData}
              />
              <InputContainer
                label="Tatima Documents"
                control={control}
                name="tatimaDocuments"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
                getDocumentData={getDocumentData}
              />
              <InputContainer
                label="  Proposed Consolidated Map 1 (Note: Upload the map in portrait orientation)"
                control={control}
                name="proposedConsolidatedMap1"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
                getDocumentData={getDocumentData}
              />
            </div>

            <div className="columnWrapper">
               {/*<InputContainer
                label="   Site Plan     "
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
                getDocumentData={getDocumentData}
              />
              <InputContainer
                label="    NOC from Competent Authority for HT/LT Line   "
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
                getDocumentData={getDocumentData}
              />
              <InputContainer
                label="   Site Photographs     "
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
                getDocumentData={getDocumentData}
              />
              <InputContainer
                label="   Affidavit regarding surrender of Path 
                "
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
                getDocumentData={getDocumentData}
              />
              <InputContainer
                label="  NOC from HPPCB 
                "
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
                getDocumentData={getDocumentData}
              />
              <InputContainer
                label="  Registration certificate from industry Department 
                "
                control={control}
                name="registrationCertificate"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
                getDocumentData={getDocumentData}
              />
              <InputContainer
                label="  Any Other Doc 
                "
                control={control}
                name="anyOtherDoc"
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
                getDocumentData={getDocumentData}
              /> */}
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
              label="Finish"
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
