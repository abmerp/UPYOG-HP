import React from "react";
import { useForm } from "react-hook-form";
import ButtonWrapper from "../../components/Button";
import RadioButton from "../../components/RadioButton";
import TextInput from "../../components/TextInput";
import { appealApplicationStatus, yesOrNo } from "../../data";
import InputContainer from "../../layout/inputContainer";
import "../../styles/Forms.css";

const Step2 = () => {
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
                <div className="description">Type of Area</div>
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
                <div className="description">Total Plot Area (Sq.m)</div>
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
                <div className="description">ownership & Revenue documents</div>
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
                <div className="description">Land-use</div>
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
                <div className="description">FAR</div>
                <div className="regulation"> </div>
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
                <div className="serial">6. </div>
                <div className="description">Built up Area (Sq.m)</div>
                <div className="regulation"> </div>
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
                <div className="serial">7. </div>
                <div className="description">
                  Setbacks
                  <div className="box">
                    <p>Front</p>
                    <p>Rear</p>
                    <p>Left</p>
                    <p>Right</p>
                    <p>Construction abuts with N.H.</p>
                    <p>Front</p>
                    <p>Rear</p>
                    <p>Left</p>
                    <p>Side</p>
                  </div>
                </div>
                <div className="regulation"> </div>
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
                <div className="serial">8. </div>
                <div className="description">No. of storeys </div>
                <div className="regulation"> </div>
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
                <div className="serial">9. </div>
                <div className="description">Road/Path Existing at site </div>
                <div className="regulation"> </div>
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
                <div className="serial">10. </div>
                <div className="description">Parking Provision </div>
                <div className="regulation"> </div>
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
                <div className="serial">11. </div>
                <div className="description">
                  Whether any HT/LT Line, crossing over the proposed land
                </div>
                <div className="regulation"> </div>
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
                <div className="serial">12. </div>
                <div className="description">
                  Whether proposed plan is located nearby ASI Protected monument
                </div>
                <div className="regulation"> </div>
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
                <div className="serial">13. </div>
                <div className="description">
                  Whether proposed Plan is located nearby HFL
                </div>
                <div className="regulation"> </div>
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
                <div className="serial">14. </div>
                <div className="description">
                  Whether trees are standing on Plot
                  <div className="box">
                    <p>No. of Trees </p>
                    <p>
                      Distance of Trees from Proposed development if not to be
                      cut
                    </p>
                    <p>
                      Whether Permission of Competent authority for cutting of
                      Trees
                    </p>
                    <p>Whether plot is Abutting to Forest Boundary </p>
                    <p>Distance from Forest Boundary </p>
                  </div>
                </div>
                <div className="regulation"> </div>
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
                <div className="serial">15. </div>
                <div className="description">
                  Whether plot is Directly abutting with National Highway/State
                  Highway/Bypass/Other H.P. Public Department Schedule Road.
                </div>
                <div className="regulation"> </div>
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
                <div className="serial">16. </div>
                <div className="description">
                  Whether Proposed plot is abutting to natural drainage
                  <div className="box">
                    <p>Distance from Nullah </p>
                    <p>Distance from Khud</p>
                  </div>
                </div>
                <div className="regulation"> </div>
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
                <div className="serial">17. </div>
                <div className="description">
                  Whether any Pipeline/Sewerage line crossing or passing through
                  the plot
                </div>
                <div className="regulation"> </div>
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
                <div className="serial">18. </div>
                <div className="description">
                  Provision of Solar Passive Building
                </div>
                <div className="regulation"> </div>
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
                <div className="serial">19. </div>
                <div className="description">
                  Provision of barrier free access for persons with disability
                </div>
                <div className="regulation"> </div>
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
                <div className="serial">20. </div>
                <div className="description">
                  Whether the Proposed Plan is above the road level on Valley
                  Side
                </div>
                <div className="regulation"> </div>
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
                <div className="serial">21. </div>
                <div className="description">
                  Whether proposed Plan is located in Sinking and Sliding area
                </div>
                <div className="regulation"> </div>
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
                <div className="serial">22. </div>
                <div className="description">
                  Rainwater harvesting tank provision
                </div>
                <div className="regulation"> </div>
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
                <div className="serial">23. </div>
                <div className="description">
                  Structural Stability Certificate
                </div>
                <div className="regulation"> </div>
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
                <div className="serial">24. </div>
                <div className="description">No. of Dwelling Units </div>
                <div className="regulation"> </div>
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
                <div className="serial">25. </div>
                <div className="description">
                  Risk Based Classification of building
                  <div className="box">
                    <p>Whether building with communication tower </p>
                    <p>Whether proposal is for Group Housing Scheme </p>
                    <p>Whether building raised on land fill </p>
                    <p>Whether building raised on reclaimed land </p>
                  </div>
                </div>
                <div className="regulation"> </div>
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
                <div className="serial">26. </div>
                <div className="description">
                  General Requirements
                  <div className="box">
                    <p>Slope of land </p>
                    <p>Height of parking Door (Meter) </p>
                    <p> Height of slopping roof (Meter)</p>
                    <p> Height of Floor (Meter)</p>
                    <p> Height of Building (Meter Maximum hill cut (Meter) </p>
                    <p> Distance between two blocks (Meter)</p>
                    <p> Plinth height (Meter)</p>
                    <p> Height of Service Door (Meter)</p>
                    <p> Equivalent car Space Buildable width</p>
                  </div>
                </div>
                <div className="regulation"> </div>
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
                <div className="serial">27. </div>
                <div className="description">Site Photographs </div>
                <div className="regulation"> </div>
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
                <div className="serial">28. </div>
                <div className="description">Any other information </div>
                <div className="regulation"> </div>
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
                <div className="serial">29. </div>
                <div className="description">
                  Whether the permission from Airport Authority of India is
                  Required.
                </div>
                <div className="regulation"> </div>
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
