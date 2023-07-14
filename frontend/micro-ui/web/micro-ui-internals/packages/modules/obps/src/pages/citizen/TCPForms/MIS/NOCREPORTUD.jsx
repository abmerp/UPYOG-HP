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
  address,
  applicationNo,
  paymentDate,
  buildingPhoto,
  status,
 
) {
  return {
    serialNo,
    name,
    formNo,
    address,
    applicationNo,
    paymentDate,
    buildingPhoto,
    status,
  };
}

const rows = [
  createData(
    0,
    "Example Example",
    " Town/Village : Example  Dist : Example, State : Example",
    "Example",
    "ABCDEFGHIJKLMNOP",
    "15-Feb-2022",
    "000000000000000000",
    "Success"
  ),
];

const NOCREPORTUD = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="container">
      

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
            <h3 className="mis-header" style={{marginLeft:"42%"}}>
            NOC Report 
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
                label="Applicant Mobile No:"
                control={control}
                placeholder="Enter Applicant Mobile No"
                name="district"
                mandatory
                type="textInput"
                //data={DistrictsData}
              />
              <InputContainer
                label="Application No:"
                control={control}
                placeholder="Enter Application No."
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
                label="status:"
                control={control}
                placeholder="Select Status"
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
          <TableHead >
            <TableRow style={{border:"1px solid #000000"}}>
              <TableCell style={{border:"1px solid #000000"}}>Sl.#</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Applicant Name</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Address</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Form No.</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Application No.</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Applied on.</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Building Photo</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Status</TableCell>
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
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.name}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.address}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.formNo}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.applicationNo}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.paymentDate}</TableCell>
                <img
                  className="table-image"
                  src="https://www.ghar47.com/wp-content/uploads/2021/12/buy-property-online.jpg"
                  alt="table"
                  style={{border:"1px solid #000000"}}
                />
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default NOCREPORTUD;