import React from "react";
import { useForm } from "react-hook-form";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import InputContainer from "../layout/inputContainer";
import ButtonWrapper from "../components/Button";
import { NamesOFULB, PaymentHeads } from "../data";
import { DistrictsData } from "../data";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { InsertDriveFile } from "@mui/icons-material";
function createData(
  serialNo,
  name,
  formNo,
  mobileNo,
  applicationNo,
  appliedNo,
  pendingWith,
  pendingDays
) {
  return {
    serialNo,
    name,
    formNo,
    mobileNo,
    applicationNo,
    appliedNo,
    pendingWith,
    pendingDays,
  };
}

const rows = [
  createData(
    1,
    "Rajan",
    "Form 11",
    345345345,
    345454664,
    "15-Feb-2022",
    "Draughtsman/JE/Junior Draughtsman",
    "2 Days"
  ),
  createData(
    1,
    "Meenakshi",
    "Form 12",
    870870570753,
    33434343433533,
    "15-Feb-2022",
    "Draughtsman/JE/Junior Draughtsman",
    "2 Days"
  ),
  createData(
    1,
    "Meenakshi",
    "Form 12",
    870870570753,
    33434343433533,
    "15-Feb-2022",
    "Draughtsman/JE/Junior Draughtsman",
    "2 Days"
  ),
  createData(
    1,
    "Meenakshi",
    "Form 12",
    870870570753,
    33434343433533,
    "15-Feb-2022",
    "lerk, Nagar Panchayat Tahliwal",
    "2 Days"
  ),
  createData(
    1,
    "Meenakshi",
    "Form 12",
    870870570753,
    33434343433533,
    "15-Feb-2022",
    "Draughtsman/JE/Junior Draughtsman",
    "2 Days"
  ),
  createData(
    1,
    "Meenakshi",
    "Form 12",
    870870570753,
    33434343433533,
    "15-Feb-2022",
    "Draughtsman/JE/Junior Draughtsman",
    "2 Days"
  ),
  createData(
    1,
    "Meenakshi",
    "Form 12",
    870870570753,
    33434343433533,
    "15-Feb-2022",
    "Draughtsman/JE/Junior Draughtsman",
    "2 Days"
  ),

];

const PaymentReportUD = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="container">
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">Pending Application Report</h2>
            <div className="tableWrapper">
              <div className="row">
                <div className="subCol">
                  <div className="first">Applicant Name</div>
                  <div className="second">:-</div>
                </div>
                <div className="subCol">
                  <div className="first">Application/Ref. No</div>
                  <div className="second">:-</div>
                </div>
                <div className="subCol">
                  <div className="first">Form Number</div>
                  <div className="second">: ALL</div>
                </div>
              </div>
              <div className="row">
                <div className="subCol">
                  <div className="first">Mobile No.</div>
                  <div className="second">:-</div>
                </div>
                <div className="subCol">
                  <div className="first">From Date</div>
                  <div className="second">: 01/01/2023</div>
                </div>
                <div className="subCol">
                  <div className="first">To Date</div>
                  <div className="second">: 01/02/2023</div>
                </div>
              </div>
              <div className="row">
                <div className="subCol">
                  <div className="first">Designation</div>
                  <div className="second">: ALL</div>
                </div>
                <div className="subCol">
                  <div className="first">Status</div>
                  <div className="second">: ALL</div>
                </div>
                <div className="subCol">
                  <div className="first">Sort By</div>
                  <div className="second">: ALL</div>
                </div>
              </div>
              <div className="row">
                <div className="subCol">
                  <div className="first">Area Type</div>
                  <div className="second">: ALL</div>
                </div>
                <div className="subCol">
                  <div className="first">District</div>
                  <div className="second">: ALL</div>
                </div>
                <div className="subCol">
                  <div className="first">ULB</div>
                  <div className="second">: ALL</div>
                </div>
              </div>
              <div className="row">
                <div className="subCol">
                  <div className="first">Ward</div>
                  <div className="second">: ALL</div>
                </div>
                <div className="subCol"></div>
                <div className="subCol"></div>
              </div>
            </div>
          </div>
        </div>
      </form> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formContainer">
          <div className="formHeaderContainer">
          <div className="mis">
            <div>
        <img
          src="https://obpsud.hp.gov.in/img/logoHP.png"
          style={{height:80,width:80}}
          alt="" /></div>
          <div style={{lineHeight:0, marginLeft:5, marginBottom:15,marginTop:10}}>
            <h4>Urban Developement Department</h4>
            <h6 style={{lineHeight:0}}>Government of Himachal Pradesh</h6>
        </div>
        
          </div>
          {/* <div className="straightLine" /> */}
            <h3 className="mis-header">
            Payment Report UD
            </h3>
            <span style={{marginBottom:"5px"}}>
            <button style={{marginLeft:"87%"}} className="btnstyle2"><PictureAsPdfIcon color="success" fontSize="small"/>Pdf</button>
          <button style={{marginLeft:"5px"}} className="btnstyle2"><InsertDriveFile fontSize="small" color="success" />Excel</button>
          </span>
          </div>
          
          <div className="formInputContainer">
            <div className="columnWrapper">
              <InputContainer
                label="Application Ref No:"
                control={control}
                placeholder="Enter Application Ref No."
                name="district"
                mandatory
                type="textInput"
                //data={DistrictsData}
              />
               <InputContainer
                label="Form No:"
                control={control}
                placeholder="Select Form No."
                name="district"
                mandatory
                type="selectInput"
                //data={DistrictsData}
              />
              
             
               
               <InputContainer
                label="Area Type:"
                control={control}
                placeholder="Select Area Type"
                name="district"
                mandatory
                type="selectInput"
                //data={DistrictsData}
              />
               <InputContainer
                label="Payment Heads:"
                control={control}
                placeholder="Select Payment Heads"
                name="district"
                mandatory
                type="selectInput"
                data={PaymentHeads}
              />
              
              
              {/* <InputContainer
                label="Notified Area"
                control={control}
                placeholder="Select Notified Area"
                name="notifiedArea"
                mandatory
                type="selectInput"
                data={appealApplicationStatus}
              />
              <InputContainer
                label="Name of Village"
                control={control}
                placeholder="Select Name of Village"
                name="nameOfVillage"
                mandatory
                type="selectInput"
                data={appealApplicationStatus}
              /> */}
              
             
            </div>
            <div className="columnWrapper">
            <InputContainer
                label="District:"
                control={control}
                placeholder="Select District"
                name="district"
                mandatory
                type="selectInput"
                data={DistrictsData}
              />
               <InputContainer
                label="ULB Type:"
                control={control}
                placeholder="Select ULB Type"
                name="notifiedArea"
                mandatory
                type="selectInput"
                data={NamesOFULB}
              />
               <InputContainer
                label="Name of ULB:"
                control={control}
                placeholder="Select Name of ULB"
                name="notifiedArea"
                mandatory
                type="selectInput"
              />
              <InputContainer
                label="Name of Ward:"
                control={control}
                placeholder="Select Name of Ward"
                name="notifiedArea"
                mandatory
                type="selectInput"
              />
               <InputContainer
                label="From Date"
                control={control}
                placeholder="Select Date"
                name="dateArea"
                mandatory
                type="datePicker"
              />
              <InputContainer
                label="To Date"
                control={control}
                placeholder="Select Date"
                name="dateArea"
                mandatory
                type="datePicker"
              />
              
              
            </div>
          </div> 
        </div>
      

      <div className="footerContainer">
          <div className="buttonWrapper" style={{float:"right"}}>
           
            <ButtonWrapper
              variant="contained"
              color="success"
              size="medium"
              label="Submit"
              type="submit"
            />
            
          </div>
        </div>
      </form>

      <TableContainer
        sx={{
          width: "100%",
          marginTop: "5rem",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <Table>
          <TableHead style={{border:"1px solid #000000"}}>
            <TableRow>
              <TableCell style={{border:"1px solid #000000"}}>Sl.#</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Applicant Name</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Form No.</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}> Application/Ref. No</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}> Applied On</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}> Pending With</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}> Pending Days</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.serialNo}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" style={{border:"1px solid #000000"}}>
                  {row.serialNo}
                </TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.name}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.formNo}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.applicationNo}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.appliedNo}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.pendingWith}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.pendingDays}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default PaymentReportUD;
