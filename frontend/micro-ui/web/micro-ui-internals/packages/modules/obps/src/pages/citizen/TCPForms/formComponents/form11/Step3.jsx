import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ButtonWrapper from "../../components/Button";
import InputContainer from "../../layout/inputContainer";
import axios from "axios";

const Step3 = ({step3Data}) => {
  const { handleSubmit, control } = useForm();
  const [filesArr, setFilesArr] = useState([])

  const onSubmit = (data) => {
    console.log(data);
    step3Data(filesArr)
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
          {/* <ButtonWrapper
            variant="contained"
            color="primary"
            size="medium"
            label="NOC"
          /> */}
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
            {/* <InputContainer
                label="Structural Stability Certificate "
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
              /> */}
              {/* <label htmlFor="structuralStabilityInput">Structural Stability Certificate</label>
              <input
                id="structuralStabilityInput"
                type="file"
                name="structuralStability"
                onChange={(e) => getDocumentData(e?.target?.files[0], "structuralStability")}
              /> */}

              <InputContainer
                label="Jamabandhi Document"
                control={control}
                name="jamabandhiDocument"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
                getDocumentData={getDocumentData}
              />
              <InputContainer
                label="Conveyance Deed/Sale/Lease "
                control={control}
                name="conveyanceDeed"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
                getDocumentData={getDocumentData}
              />
              <InputContainer
                label="Demarcation Report/Affidavit"
                control={control}
                name="demarcationReport"
                mandatory
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
            </div>
            <div className="columnWrapper">
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
                label="Proposed Consolidated Map 1 (Note: Upload the map in portrait orientation) "
                control={control}
                name="proposedConsolidatedMap1"
                type="htmlUpload"
                mandatory
                uploadValidity="(pdf file only and Max file Size 30 MB)"
                getDocumentData={getDocumentData}
              />
              <InputContainer
                label="Copy of Contouring Plan "
                control={control}
                name="copyOfContouringPlan"
                type="htmlUpload"
                mandatory
                uploadValidity="(pdf file only and Max file Size 30 MB)"
                getDocumentData={getDocumentData}
              />
              {/* <InputContainer
                label="Site Plan "
                control={control}
                name="picture"
                mandatory
                type="htmlUpload"
                uploadValidity="(pdf file only and Max file Size 30 MB)"
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
