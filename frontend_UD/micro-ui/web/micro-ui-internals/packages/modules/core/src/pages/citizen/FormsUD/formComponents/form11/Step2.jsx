import React from "react";
import { useForm } from "react-hook-form";
import ButtonWrapper from "../../components/Button";
import RadioButton from "../../components/RadioButton";
import TextInput from "../../components/TextInput";
import { yesOrNo } from "../../data";
import "../../styles/Forms.css";

const Step2 = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    formData.step2Data11 = data;
    console.log(data);
  }

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
            color="success"
            size="medium"
            label="Checklist"
          />
          <ButtonWrapper
            variant="contained"
            color="primary"
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
            <h2 className="formHeading">Checklist to be filled</h2>
            <div className="tableWrapper">
              <div className="row">
                <div className="serial heading">SI# </div>
                <div className="description heading">Description</div>
                <div className="regulation heading">As per Regulations</div>
                <div className="proposed heading">As proposed</div>
                <div className="remarks heading">Remarks</div>
                <div className="relaxation heading">Relaxation</div>
              </div>
              <div className="row">
                <div className="serial">1. </div>
                <div className="description">
                  Minimum width of pedestrian links to smaller cluster of plots,
                  not exceeding 5 in number.
                </div>
                <div className="regulation"></div>
                <div className="proposed">
                  <TextInput
                    control={control}
                    name="proposed"
                    placeholder={"Enter Details"}
                  />
                </div>
                <div className="remarks">
                  <TextInput
                    control={control}
                    name="proposed"
                    placeholder={"Enter Details"}
                  />
                </div>
                <div className="relaxation"></div>
              </div>
              <div className="row">
                <div className="serial">2. </div>
                <div className="description">
                  Minimum width of vehicular access, if number of plots is above
                  5.
                </div>
                <div className="regulation"></div>
                <div className="proposed">
                  <TextInput
                    control={control}
                    name="proposed"
                    placeholder={"Enter Details"}
                  />
                </div>
                <div className="remarks">
                  <TextInput
                    control={control}
                    name="proposed"
                    placeholder={"Enter Details"}
                  />
                </div>
                <div className="relaxation"></div>
              </div>
              <div className="row">
                <div className="serial">3. </div>
                <div className="description">
                  Minimum area for open/green space for the scheme having more
                  than 5 plots.
                </div>
                <div className="regulation"></div>
                <div className="proposed">
                  <TextInput
                    control={control}
                    name="proposed"
                    placeholder={"Enter Details"}
                  />
                </div>
                <div className="remarks">
                  <TextInput
                    control={control}
                    name="proposed"
                    placeholder={"Enter Details"}
                  />
                </div>
                <div className="relaxation"></div>
              </div>
              <div className="row">
                <div className="serial">4. </div>
                <div className="description">
                  Minimum area for soak pit etc. (irrespective of the number of
                  plots)
                </div>
                <div className="regulation"></div>
                <div className="proposed">
                  <TextInput
                    control={control}
                    name="proposed"
                    placeholder={"Enter Details"}
                  />
                </div>
                <div className="remarks">
                  <TextInput
                    control={control}
                    name="proposed"
                    placeholder={"Enter Details"}
                  />
                </div>
                <div className="relaxation"></div>
              </div>
              <div className="row">
                <div className="serial">5. </div>
                <div className="description">
                  Orientation of the plots shall be provided in such a manner to
                  be in conformity with the integration of existing
                  plots/infrastructure, wind direction, and natural flow of
                  surface drainage unobstructed rain water discharge.
                </div>
                <div className="regulation"> </div>
                <div className="proposed">
                  <RadioButton
                    control={control}
                    name="proposed"
                    data={yesOrNo}
                  />
                </div>
                <div className="remarks">
                  <TextInput
                    control={control}
                    name="proposed"
                    placeholder={"Enter Details"}
                  />
                </div>
                <div className="relaxation"></div>
              </div>
              <div className="row">
                <div className="serial">6. </div>
                <div className="description">
                  Layout of plots shall be governed by easy access having
                  acceptable grades minimum 1 in 15 and which may not obstruct
                  view of vista
                </div>
                <div className="regulation"> </div>
                <div className="proposed">
                  <RadioButton
                    control={control}
                    name="proposed"
                    data={yesOrNo}
                  />
                </div>
                <div className="remarks">
                  <TextInput
                    control={control}
                    name="proposed"
                    placeholder={"Enter Details"}
                  />
                </div>
                <div className="relaxation"></div>
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
        </div>
      </form>
    </section>
  );
};

export default Step2;
