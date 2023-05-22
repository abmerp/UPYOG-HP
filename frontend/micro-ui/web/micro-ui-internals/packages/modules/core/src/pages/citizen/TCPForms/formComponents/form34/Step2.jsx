import React from "react";
import { useForm } from "react-hook-form";
import ButtonWrapper from "../../components/Button";
import TextInput from "../../components/TextInput";
import "../../styles/Forms.css";

const Step2 = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);
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
                <div className="description">Name of Real Estate Project</div>
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
                <div className="description">Scheme Area.</div>
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
                <div className="description">Slope of Area. </div>
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
                <div className="description">Means of Access</div>
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
                <div className="description">Land Use Structure. </div>
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
                <div className="serial">6. </div>
                <div className="description">
                  Coverage
                  <div className="box">
                    <p>Under Flats (Block wise). </p>
                    <p>Under other Uses (Block wise)</p>
                    <p>
                      The Carpet area, area of exclu-sive balcony and area of
                      exclu-sive terrace, if any.
                    </p>
                  </div>
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
                <div className="serial">7. </div>
                <div className="description">Total Built up Area.</div>
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
                <div className="serial">8. </div>
                <div className="description">Floor Area Ratio (FAR).</div>
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
                <div className="serial">9. </div>
                <div className="description">No. of storeys in each Block.</div>
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
                <div className="serial">10. </div>
                <div className="description">Height of each floor.</div>
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
                <div className="serial">11. </div>
                <div className="description">Total Height of Block.</div>
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
                <div className="serial">12. </div>
                <div className="description">
                  No. of Flats/Dwelling Units in each Block.
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
                <div className="serial">13. </div>
                <div className="description">Total Population.</div>
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
                <div className="serial">14. </div>
                <div className="description">Density per Hectare.</div>
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
                <div className="serial">15. </div>
                <div className="description">
                  Detail of facilities like school, health services etc.
                  concerning population.
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
                <div className="serial">16. </div>
                <div className="description">Parking provision.</div>
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
                <div className="serial">17. </div>
                <div className="description">
                  Structural Stability Certification.
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
                <div className="serial">18. </div>
                <div className="description">
                  Distance of structures from natural drainage.
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
                <div className="serial">19. </div>
                <div className="description">
                  Distance of structures from Highways and other Roads.
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
                <div className="serial">20. </div>
                <div className="description">
                  Distance of structures from HT/LT lines.
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
                <div className="serial">21. </div>
                <div className="description">
                  Self-declaration/undertaking by the applicant regarding
                  maintaining requisite safe distance from electric lines as per
                  the provision of the Himachal Pradesh State Electricity Board
                  Limited in case HT/LT line is crossing over/ nearby proposed
                  site.
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
                  No Objection Certificate (NOC) of competent authority in case
                  site abuts National Highway. For other State Highways, and
                  Himachal Pradesh Public Works Department’s scheduled roads the
                  applicant shall be required to submit a
                  self-declaration/undertaking to maintain minimum control
                  width/ setback as per provisions of the Himachal Pradesh
                  Road-side Land Control Act, 1968.
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
                  Self-declaration/undertaking regarding adhering to fire safety
                  provisions as per Himachal Pradesh Fire Safety Rules, 2019 of
                  Fire Service Department.
                  <div className="box">
                    <p>(NOC shall be required at Completion Stage)</p>
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
                <div className="serial">24. </div>
                <div className="description">
                  No Objection Certificate of the competent authority of
                  Himachal Pradesh Irrigation and Public Health Department or
                  consent of Central Ground Water Authority regarding use of
                  ground water.
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
                <div className="serial">25. </div>
                <div className="description">
                  Provision of Rainwater Harvesting system
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
                  Arrangement for disposal and treatment of solid waste,
                  sullage, sewage, sewerage, and storm water.
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
                <div className="description">
                  Provision for street lighting.
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
                <div className="description">
                  Name of the registered Town Planner / Architect/Engineer with
                  full correspondence address, appointed for the job.
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
                <div className="description">
                  Name of the registered Structural Engineer with full
                  correspondence address, appointed for the job.
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
