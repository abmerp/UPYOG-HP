import React from "react";
import { useForm } from "react-hook-form";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import InputContainer from "../layout/inputContainer";
import ButtonWrapper from "../components/Button";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { InsertDriveFile } from "@mui/icons-material";
import {
  appealApplicationStatus,
  DistrictsData,
  NamesOFULB,
  nameSuffix,
  propertyType,
  relationSuffix,
  typeOfLandForDevelopment,
  yesOrNo,
  statesData
} from "../data";

function createData(
  serialNo,
  name,
  formNo,
  applicationNo,
  paymentNo,
  paymentDate,
  trasactionId,
  status,
  amount
) {
  return {
    serialNo,
    name,
    formNo,
    applicationNo,
    paymentNo,
    paymentDate,
    trasactionId,
    status,
    amount,
  };
}

const rows = [
  createData(
    0,
    "Example Example",
    "Example",
    "0000000000000",
    "ABCDEFGHIJKLMNOP",
    "15-Feb-2022",
    "000000000000000000",
    "Success",
    "Rs. 0000"
  ),
];

const ViewAllApplication = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="container">
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">View All Applications</h2>
            <div className="tableWrapper">
              <div className="row">
                <div className="subCol">
                  <div className="first">District Name</div>
                  <div className="second">: ALL</div>
                </div>
                <div className="subCol">
                  <div className="first">
                    ULB Name - Municipal Corporation, Municipal Council, Nagar
                    Panchayat)
                  </div>
                  <div className="second">:-</div>
                </div>
                <div className="subCol">
                  <div className="first">Ward No.</div>
                  <div className="second">:-</div>
                </div>
                <div className="subCol">
                  <div className="first">
                    Notified Area/Planning Area/Special Area
                  </div>
                  <div className="second">:-</div>
                </div>
                <div className="subCol">
                  <div className="first">Village Name</div>
                  <div className="second">:-</div>
                </div>
              </div>
              <div className="row">
                <div className="subCol">
                  <div className="first">From Date</div>
                  <div className="second">: 01/01/2023</div>
                </div>
                <div className="subCol">
                  <div className="first">To Date</div>
                  <div className="second">: 01/02/2023</div>
                </div>
                <div className="subCol">
                  <div className="first">Plot No.</div>
                  <div className="second">:-</div>
                </div>
              </div>
              <div className="row">
                <div className="subCol">
                  <div className="first">Application No.</div>
                  <div className="second">:-</div>
                </div>
                <div className="subCol">
                  <div className="first">Property Type</div>
                  <div className="second">: ALL</div>
                </div>
                <div className="subCol"></div>
              </div>
            </div>
          </div>
        </div>
      </form>  */}

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
            <h3 className="mis-header">
           View All Application 
            </h3>
            <span style={{marginBottom:"5px"}}>
            <button style={{marginLeft:"87%"}} className="btnstyle2"><PictureAsPdfIcon color="success" fontSize="small"/>Pdf</button>
          <button style={{marginLeft:"5px"}} className="btnstyle2"><InsertDriveFile fontSize="small" color="success" />Excel</button>
          </span>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
            <InputContainer
                label="Applicant Name:"
                control={control}
                placeholder="Enter Name"
                name="district"
                mandatory
                type="textInput"
                //data={DistrictsData}
              />
              <InputContainer
                label="Applicant Ref No:"
                control={control}
                placeholder="Enter Applicant Ref No."
                name="district"
                mandatory
                type="textInput"
                //data={DistrictsData}
              />
               <InputContainer
                label="Form No:"
                control={control}
                placeholder="Enter Form No."
                name="district"
                mandatory
                type="textInput"
                //data={DistrictsData}
              />
               <InputContainer
                label="Mobile No:"
                control={control}
                placeholder="Enter Mobile No"
                name="district"
                mandatory
                type="textInput"
                //data={DistrictsData}
              /> 
             <InputContainer
                label="Status:"
                control={control}
                placeholder="Select Status"
                name="district"
                mandatory
                type="selectInput"
                //data={DistrictsData}
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
        <Table style={{border:"1px solid #000000"}}>
          <TableHead style={{border:"1px solid #000000"}}>
            <TableRow >
              <TableCell style={{border:"1px solid #000000"}}>Sl.#</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}> Name</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Form No.</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}> Application/Ref. No</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}> Payment/Ref. No.</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}> Payment Date</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Transaction Id</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Status</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Amount</TableCell>
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
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.paymentNo}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.paymentDate}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.trasactionId}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.status}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default ViewAllApplication;
