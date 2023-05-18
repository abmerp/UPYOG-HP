import { InputAdornment, MenuItem } from "@mui/material";
import React from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ButtonWrapper from "../../components/Button";
import Checkboxes from "../../components/CheckBox";
import RadioButton from "../../components/RadioButton";
import SelectWrapper from "../../components/Select";
import Select from "../../components/Select";
import TextInput from "../../components/TextInput";
import UploadButton from "../../components/UploadButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import {
  appealApplicationStatus,
  deviationCategory,
  DistrictsData,
  NamesOFULB,
  nameSuffix,
  propertyType,
  relationSuffix,
  statesData,
  typeOfLandForDevelopment,
  yesOrNo,
} from "../../data";
import InputContainer from "../../layout/inputContainer";
import "../../styles/Form26.css";

const Step1 = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="container">
      <div className="header">
        Form of application for composition of offences under section 39-C read
        with sub-section (3) of section 39 of the Himachal Pradesh Town and
        Country planning Act,1977 (Act no.12 of 1977).
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
      {/* Form Container starts */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">Application Information</h2>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
              <div className="inputContainer">
                <h3 className="label multiColumn">
                  <span className="compulsoryField">*</span>
                  Ortences/Deviation Details :
                </h3>
                <RadioButton
                  row
                  data={yesOrNo}
                  control={control}
                  name="deviationDetails"
                />
              </div>
              <div className="inputContainer">
                <h3 className="label">If yes :</h3>
                <Select
                  control={control}
                  inputLabel="Select Deviation Category"
                  label="Select Deviation Category"
                  data={deviationCategory}
                  width="50vw"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">Application Details</h2>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
              <div className="inputContainer">
                <h3 className="label">
                  <span className="compulsoryField">*</span>
                  Registration No. :
                </h3>
                <TextInput
                  label="Enter Registration No."
                  variant="outlined"
                  size="small"
                  width="15.625vw"
                  name="registrationNo."
                  control={control}
                />
              </div>
              <div className="inputContainer">
                <h3 className="label">
                  <span className="compulsoryField">*</span>
                  Subject :
                </h3>
                <TextInput
                  label="Enter Subject"
                  variant="outlined"
                  size="small"
                  width="15.625vw"
                  name="subject"
                  control={control}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">
              Hierarchy Details of Area/Proposed Construction Location
            </h2>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
              <div className="inputContainer">
                <h3 className="label">
                  <span className="compulsoryField">*</span>
                  District :
                </h3>
                <Select
                  control={control}
                  inputLabel="Select District"
                  label="Select District"
                  data={DistrictsData}
                />
              </div>

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

              {/* <div className="inputContainer">
                <h3 className="label">
                  <span className="compulsoryField">*</span>
                  Notified Area/:
                </h3>
                <Select
                  control={control}
                  inputLabel="Select Area"
                  label="Select Area"
                  data={yesOrNo}
                />
              </div>
              <div className="inputContainer">
                <h3 className="label">
                  <span className="compulsoryField">*</span>
                  Name Of Village:
                </h3>
                <Select
                  control={control}
                  inputLabel="Select Village/Ward"
                  label="Select Village/Ward"
                  data={yesOrNo}
                />
              </div> */}
            </div>
          </div>
        </div>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">Applicant Information</h2>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
              <div className="inputContainer">
                <h3 className="label">
                  <span className="compulsoryField">*</span>
                  Applicant Name :
                </h3>
                <TextInput
                  defaultValue="Mr."
                  variant="outlined"
                  size="small"
                  width="5.625vw"
                  select
                  name="initialForApplicantName"
                  control={control}
                >
                  {nameSuffix?.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextInput>
                <TextInput
                  label="Enter Applicant Name"
                  variant="outlined"
                  size="small"
                  width="15.625vw"
                  name="applicantName"
                  control={control}
                />
              </div>
              <div className="inputContainer">
                <h3 className="label">
                  <span className="compulsoryField">*</span>
                  Guardian Name :
                </h3>
                <TextInput
                  defaultValue="S/O"
                  variant="outlined"
                  size="small"
                  width="5.625vw"
                  select
                  name="initialForGuardianName"
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
                  name="guardianName"
                  control={control}
                />
              </div>
              <div className="inputContainer">
                <h3 className="label">
                  <span className="compulsoryField">*</span>
                  Applicant Mobile Number:
                </h3>
                <TextInput
                  variant="outlined"
                  size="small"
                  width="15.625vw"
                  placeholder={"Enter Mobile Name"}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+91</InputAdornment>
                    ),
                  }}
                  name="applicantmMobileNumber"
                  control={control}
                />
              </div>
              <div className="inputContainer">
                <h3 className="label">
                  <span className="compulsoryField">*</span>
                  Aadhar Number :
                </h3>
                <TextInput
                  variant="outlined"
                  size="small"
                  width="15.625vw"
                  placeholder={"Enter Aadhar Number"}
                  name="aadharNumber"
                  control={control}
                />
              </div>
            </div>
            <div className="columnWrapper">
              <div className="inputContainer">
                <h3 className="label">
                  <span className="compulsoryField">*</span>
                  Applicant Email ID :
                </h3>
                <TextInput
                  label="Enter Email ID"
                  variant="outlined"
                  size="small"
                  width="15.625vw"
                  name="applicantEmailId"
                  control={control}
                />
              </div>
              <div className="inputContainer">
                <h3 className="photo label">
                  <span className="compulsoryField">*</span>
                  Upload Photo :
                </h3>
                <UploadButton />
              </div>
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
                placeholder="Select State"
                name="state"
                mandatory
                type="selectInput"
                multiColumn
                data={statesData}
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
            <h2 className="formHeading">Offences/Deviation Details</h2>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
              <div className="inputContainer">
                <h3 className="label multiColumn">
                  <span className="compulsoryField">*</span>
                  Revenue Village/Mohal/Phati/ Up Mohal :
                </h3>
                <TextInput
                  label="Enter Revenue Village/Mohal"
                  variant="outlined"
                  size="small"
                  width="15.625vw"
                  control={control}
                  name="correspondencePincode"
                />
              </div>
              <div className="inputContainer">
                <h3 className="label multiColumn">
                  <span className="compulsoryField">*</span>Khasra No. :
                </h3>
                <TextInput
                  label="Enter Khasra No. "
                  variant="outlined"
                  size="small"
                  width="15.625vw"
                  control={control}
                  name="correspondencePincode"
                />
              </div>
              <div className="inputContainer">
                <h3 className="label multiColumn">
                  {" "}
                  <span className="compulsoryField">*</span>Khata No. :
                </h3>
                <TextInput
                  label="Enter Khata No."
                  variant="outlined"
                  size="small"
                  width="15.625vw"
                  control={control}
                  name="correspondencePincode"
                />
              </div>

              <div className="inputContainer">
                <h3 className="label multiColumn">Khatauni No. :</h3>
                <TextInput
                  label="Enter Khatauni No. "
                  variant="outlined"
                  size="small"
                  width="15.625vw"
                  control={control}
                  name="correspondencePincode"
                />
              </div>

              <div className="inputContainer">
                <h3 className="label multiColumn">
                  <span className="compulsoryField">*</span>
                  Total Plot Area(Sq.mt.) :
                </h3>
                <TextInput
                  label="Enter Total Plot Area"
                  variant="outlined"
                  size="small"
                  width="15.625vw"
                  disabled
                  control={control}
                  name="correspondencePincode"
                />
              </div>
              <div className="inputContainer">
                <h3 className="label multiColumn">
                  <span className="compulsoryField">*</span>
                  Case reference no. :
                </h3>
                <TextInput
                  label="Enter case reference no."
                  variant="outlined"
                  size="small"
                  width="15.625vw"
                  control={control}
                  name="correspondencePincode"
                />
              </div>
              <div className="inputContainer">
                <h3 className="label multiColumn">
                  <span className="compulsoryField">*</span>
                  Maximum Permissible Ground Coverage (in Sq.mt.) :
                </h3>
                <TextInput
                  label="Enter ground coverage"
                  variant="outlined"
                  size="small"
                  width="15.625vw"
                  control={control}
                  name="correspondencePincode"
                />
              </div>
              <div className="inputContainer">
                <h3 className="label multiColumn">
                  <span className="compulsoryField">*</span>
                  Applied land use :
                </h3>
                <Select
                  control={control}
                  inputLabel="Select usage"
                  label="Select usage"
                  data={deviationCategory}
                  name="correspondencePinc
                  ode"
                />
              </div>
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
                label="District"
                control={control}
                placeholder="Select District"
                name="revenueVillageMohalla"
                mandatory
                type="selectInput"
                data={propertyType}
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
              <div className="inputContainer">
                <h3 className="label multiColumn">
                  <span className="compulsoryField">*</span>
                  Area (sq.m) :
                </h3>
                <TextInput
                  label="Enter Area"
                  variant="outlined"
                  size="small"
                  width="15.625vw"
                  name="correspondencePincode"
                  control={control}
                />
              </div>
              <div className="inputContainer">
                <h3 className="label multiColumn">
                  <span className="compulsoryField">*</span>
                  wheather subdivision Approved :
                </h3>
                <RadioButton
                  row
                  data={yesOrNo}
                  control={control}
                  name="wheatherSubdivisionApproved"
                />
              </div>
              <div className="inputContainer">
                <h3 className="label multiColumn">
                  <span className="compulsoryField">*</span>
                  No. of Plot :
                </h3>
                <TextInput
                  label="Enter No. of Plot"
                  variant="outlined"
                  size="small"
                  width="15.625vw"
                  name="correspondencePincode"
                  control={control}
                />
              </div>
              <div className="inputContainer">
                <h3 className="label multiColumn">
                  <span className="compulsoryField">*</span>
                  Proposal submitted for:
                </h3>
                <Select
                  control={control}
                  inputLabel="Select proposal"
                  label="Select proposal"
                  data={deviationCategory}
                />
              </div>
              <div className="inputContainer">
                <h3 className="label multiColumn">
                  <span className="compulsoryField">*</span>
                  Plot Area For Sub-division/Development Activity(sq.m) :
                </h3>
                <TextInput
                  label="Enter plot area"
                  variant="outlined"
                  size="small"
                  width="15.625vw"
                  name="correspondencePincode"
                  control={control}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">Builtup Area </h2>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
              <InputContainer
                label="No. of Blocks  "
                control={control}
                placeholder="1"
                name="revenueVillageMohalla"
                mandatory
                type="textInput"
              />
            </div>
          </div>
        </div>

        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">Details of Block 1 </h2>
          </div>
          <div className="formInputContainer">
            <Table striped bordered>
              <thead>
                <tr>
                  <th>SI#</th>
                  <th>
                    <span className="compulsoryField">*</span>Floor Type
                  </th>
                  <th>
                    <span className="compulsoryField">*</span>Floor Area Sq.m.
                  </th>
                  <th>
                    <span className="compulsoryField">*</span>Land Use Type
                  </th>
                  <th>Parking Area</th>
                  <th>Exemption</th>
                  <th>Add More</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <TextInput
                      label="Enter Floor Type"
                      variant="outlined"
                      size="small"
                      name="correspondenceAdressName"
                      control={control}
                    />
                  </td>
                  <td>
                    <TextInput
                      label=" Enter Floor Area "
                      variant="outlined"
                      size="small"
                      name="correspondenceAdressName"
                      control={control}
                    />
                  </td>
                  <td>
                    <SelectWrapper
                      control={control}
                      inputLabel="Select Land Use Type"
                      label="Select Land Use Type"
                      data={yesOrNo}
                    />
                  </td>
                  <td>
                    <TextInput
                      label=" Enter Parking Area"
                      variant="outlined"
                      size="small"
                      name="correspondenceAdressName"
                      control={control}
                    />
                  </td>
                  <td>
                    <Checkboxes />
                  </td>
                  <td className="m-auto">
                    <AddCircleIcon />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">Reason for composition of offences </h2>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
              <InputContainer
                label="Reason 1 "
                control={control}
                placeholder="Enter Details"
                name="revenueVillageMohalla"
                mandatory
                type="textInput"
              />
              <InputContainer
                label="Reason 2 "
                control={control}
                placeholder="Enter Details"
                name="revenueVillageMohalla"
                mandatory
                type="textInput"
              />

              <InputContainer
                label="Reason 3"
                control={control}
                placeholder="Enter Actual Construction"
                name="revenueVillageMohalla"
                mandatory
                type="textInput"
              />
            </div>
            <div className="columnWrapper">
              <InputContainer
                label="Supported Doc to be uploaded "
                control={control}
                placeholder="Enter Actual Construction"
                name="revenueVillageMohalla"
                mandatory
                type="htmlUpload"
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
