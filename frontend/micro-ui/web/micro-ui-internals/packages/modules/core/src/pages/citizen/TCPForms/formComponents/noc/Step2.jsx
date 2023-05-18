import React from "react";
import { useForm } from "react-hook-form";
import ButtonWrapper from "../../components/Button";
import TextInput from "../../components/TextInput";
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
                <div className="description">Built up Area </div>
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
                <div className="description">FAR</div>
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
                <div className="description">% Coverage </div>
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
                  Setbacks
                  <div className="box">
                    <p>Front</p>
                    <p>Rear</p>
                    <p>Left</p>
                    <p>Right</p>
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
                <div className="serial">5. </div>
                <div className="description">No. of Storeys </div>
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
                  Roads/Path exist at a site
                  <div className="box">
                    <p>Whether path develop at the site or not </p>
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
                <div className="description">Parking Provision </div>
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
                <div className="description">
                  Whether any HT/LT line crossing over the proposed land
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
                <div className="serial">9. </div>
                <div className="description">
                  Provision for solar passive building technology made or not
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
                <div className="serial">10. </div>
                <div className="description">
                  Provision of barrier-free access for person
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
                <div className="serial">11. </div>
                <div className="description">
                  Provision of rainwater harvesting tank (optional in case of
                  the building having a roof area less than 200 Sqm)
                  Connectivity to the rainwater harvesting tank.
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
                <div className="serial">12. </div>
                <div className="description">Number of Dwelling Units </div>
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
                <div className="description">Maximum Hill Cut </div>
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
                <div className="description">
                  Whether sewer exists in the vicinity or not. Connectivity to
                  the sewer line.
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
                <div className="serial">15. </div>
                <div className="description">
                  Provision of Septic tank
                  <div className="box">
                    <p>Connectivity to the septic tank </p>
                    <p>Whether the Soak pit was made functional or not </p>
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
                <div className="serial">16. </div>
                <div className="description">Provision of a sloping roof </div>
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
                <div className="description">Height raising/Plinth level </div>
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
                <div className="description">The closed floor in any </div>
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
                  Retaining work and site development
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
                <div className="description">Boundary Wall erected or not </div>
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
                  Whether the building is above the road on the valley side.
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
