import React from "react";
import { useForm } from "react-hook-form";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ButtonWrapper from "../components/Button";
import RadioButton from "../components/RadioButton";
import InputContainer from "../layout/inputContainer";
import TextInput from "../components/TextInput";
import { MenuItem } from "@mui/material";
import Checkboxes from "../components/CheckBox";
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
  email,
  mobileNo,
  formNo,
  fees,
  refNo,
  ulbName,
  date,
  status
) {
  return {
    serialNo,
    name,
    email,
    mobileNo,
    formNo,
    fees,
    refNo,
    ulbName,
    date,
    status,
  };
}

const rows = [
  createData(
    1,
    "Mohan Singh",
    "ahulbunty542@gmail.com",
    "345345345",
    "Form 26",
    "Rs. 000000",
    "049039049304903",
    "Municipal Council ",
    "04-Dec-2017",
    " Certificate Issued Una"
  ),
  createData(
    1,
    "Mohan Singh",
    "ahulbunty542@gmail.com",
    "345345345",
    "Form 26",
    "Rs. 000000",
    "049039049304903",
    "Municipal Council ",
    "04-Dec-2017",
    " Certificate Issued Una"
  ),
  createData(
    1,
    "Mohan Singh",
    "ahulbunty542@gmail.com",
    "345345345",
    "Form 26",
    "Rs. 000000",
    "049039049304903",
    "Municipal Council ",
    "04-Dec-2017",
    " Certificate Issued Una"
  ),
  createData(
    2,
    "Mohan Singh",
    "ahulbunty542@gmail.com",
    "345345345",
    "Form 16",
    "Rs. 000000",
    "049039049304903",
    "Municipal Council ",
    "04-Dec-2017",
    " Certificate Issued Una"
  )

];

const DetailApplicationReport = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section style={{ width: "97vw", margin: "auto", marginTop: "3vw" }} className="container">
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formContainer">
          <div className="mis">
            <div>
        <img
          src="https://obpsud.hp.gov.in/img/logoHP.png"
          style={{height:50,width:50}}
          alt="" /></div>
          <div>
         <h4>Urban Developement Department</h4>
         </div>
         </div>
          
          <div className="formHeaderContainer">
            <h4 className="formHeading">Detail Applicant Report</h4>
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
                  <div className="first">Status</div>
                  <div className="second">: ALL</div>
                </div>
              </div>
              <div className="row">
                <div className="subCol">
                  <div className="first">Applied By</div>
                  <div className="second">: ALL</div>
                </div>
                <div className="subCol">
                  <div className="first">From Date</div>
                  <div className="second">: 21/10/2022</div>
                </div>
                <div className="subCol">
                  <div className="first">To Date</div>
                  <div className="second">: 11/11/2022</div>
                </div>
              </div>
              <div className="row">
                <div className="subCol">
                  <div className="first">Form No.</div>
                  <div className="second">: ALL</div>
                </div>
                <div className="subCol">
                  <div className="first">Area Type</div>
                  <div className="second">: ALL</div>
                </div>
                <div className="subCol">
                  <div className="first">District</div>
                  <div className="second">: ALL</div>
                </div>
              </div>
              <div className="row">
                <div className="subCol">
                  <div className="first">ULB</div>
                  <div className="second">: ALL</div>
                </div>
                <div className="subCol"></div>
                <div className="subCol"></div>
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
      </form>

      <TableContainer
        sx={{
          width: "100%",
          marginTop: "2rem",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sl.#</TableCell>
              <TableCell align="left"> Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Mobile No.</TableCell>
              <TableCell align="left">Form No.</TableCell>
              <TableCell align="left">Planning Permission Fees</TableCell>
              <TableCell align="left">Ref. No</TableCell>
              <TableCell align="left">ULB Name</TableCell>
              <TableCell align="left">Date of submission</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.serialNo}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.serialNo}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.mobileNo}</TableCell>
                <TableCell align="left">{row.formNo}</TableCell>
                <TableCell align="left">{row.fees}</TableCell>
                <TableCell align="left">{row.refNo}</TableCell>
                <TableCell align="left">{row.ulbName}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
<div>
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
             Detail Applicant Report 
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
                placeholder="Select Form No."
                name="district"
                mandatory
                type="selectInput"
                //data={DistrictsData}
              />
               {/* <InputContainer
                label="To Date"
                control={control}
                placeholder="Select District"
                name="district"
                mandatory
                type="calendar"
                //data={DistrictsData}
              /> */}
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
          <TableHead>
            <TableRow style={{border:"1px solid #000000"}}>
              <TableCell style={{border:"1px solid #000000"}}>Sl.#</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}> Name</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Email</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Mobile No.</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Form No.</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Planning Permission Fees</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Ref. No</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>ULB Name</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Date Of Approval</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Date of submission</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Number Of Days</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Status</TableCell>
              
              
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
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.email}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.mobileNo}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.formNo}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.fees}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.refNo}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.ulbName}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.date}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.status}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.date}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> 
      {/* <TableContainer>
        
      <Table style={{border:"2px",borderStyle:"groove",marginTop:"20px"}}>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile No</th>
          <th>Form No</th>
          <th>Planning Permission Fees</th>
          <th>Ref. No</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </Table>
      </TableContainer> */}
      </div>
    </section>
  );
};

export default DetailApplicationReport;
