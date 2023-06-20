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
import { DistrictsData } from "../data";
import { NamesOFULB } from "../data";
import logo from "../assets/logo.png";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { InsertDriveFile } from "@mui/icons-material";

function createData(
  area,
  applied,
  underProcessing,
  reverted,
  provissionalyApproved,
  permissionIssued,
  rejected
) {
  return {
    area,
    applied,
    underProcessing,
    reverted,
    provissionalyApproved,
    permissionIssued,
    rejected,
  };
}

const rows = [
  createData("ULB 00", "000000", "0000", "000", "00000", "000", "0000"),
  createData("ULB 00", "000000", "000", "000", "00000", "000", "0000"),
  createData("ULB 00", "000000", "000", "00", "000", "000", "0000"),
  createData("ULB 00", "000000", "0000", "000", "00000", "000", "0000"),
  createData("ULB 00", "000000", "0000", "000", "00000", "000", "0000"),
];

const UlbWisePaymentReportTCP= () => {
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
          src={logo}
          style={{height:90,width:90}}
          alt=""
        /></div>
          <div style={{lineHeight:0, marginLeft:5, marginBottom:15,marginTop:10}}>
            <h4>Town and Country Planning</h4>
            <h6 style={{lineHeight:0}}>Government of Himachal Pradesh</h6>
        </div>
          </div>
            <h3 className="mis-header">
               Ulb Wise Payment Report
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
                placeholder="Enter Applicant Name"
                name="district"
                mandatory
                type="textInput"
                //data={DistrictsData}
              />
               <InputContainer
                label="Application/Reference No:"
                control={control}
                placeholder="Enter Application/Reference No"
                name="district"
                mandatory
                type="textInput"
                //data={DistrictsData}
              />
              <InputContainer
                label="Application Type:"
                control={control}
                placeholder="Application Type"
                name="notifiedArea"
                mandatory
                type="selectInput"
                //data={NamesOFULB}
              />
            <InputContainer
                label="Applied By:"
                control={control}
                placeholder="Select Applied By"
                name="dateArea"
                mandatory
                type="selectInput"
              />
               <InputContainer
                label="Form No:"
                control={control}
                placeholder="Select Form No"
                name="dateArea"
                mandatory
                type="selectInput"
              />
               <InputContainer
                label="Notified Area:"
                control={control}
                placeholder="Select Notified Area"
                name="dateArea"
                mandatory
                type="selectInput"
              /> 
               <InputContainer
                label="Use Type:"
                control={control}
                placeholder="Select Use Type"
                name="dateArea"
                mandatory
                type="selectInput"
              />
             
            </div>
            <div className="columnWrapper">
            <InputContainer
                label="Status:"
                control={control}
                placeholder="Select Status"
                name="district"
                mandatory
                type="selectInput"
                data={DistrictsData}
              />
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
                label="CLU Type:"
                control={control}
                placeholder="Select CLU Type"
                name="notifiedArea"
                mandatory
                type="selectInput"
              />
              <InputContainer
                label="Area Type:"
                control={control}
                placeholder="Select Area Type"
                name="notifiedArea"
                mandatory
                type="selectInput"
              />
              <InputContainer
                label="Ranges:"
                control={control}
                placeholder="Select Ranges"
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
            <TableRow>
              <TableCell align="left" style={{border:"1px solid #000000"}}> Sl.#</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Name</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Email</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Mobile No.</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Form Name</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Planning Permission Fees(rs)</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Area Name</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Village Name</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Date Of Submission</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.area}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left" style={{border:"1px solid #000000"}}></TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}></TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}></TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}></TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}></TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}></TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}></TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}></TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default UlbWisePaymentReportTCP;
