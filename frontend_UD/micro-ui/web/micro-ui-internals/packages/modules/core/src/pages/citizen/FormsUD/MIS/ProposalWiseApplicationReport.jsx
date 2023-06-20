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
];

const ProposalWiseApplicationReport = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="container">
     {/* <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">Application Summary Report</h2>
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
            Proposal Wise Application Report 
            </h3>
            <span style={{marginBottom:"5px"}}>
            <button style={{marginLeft:"87%"}} className="btnstyle2"><PictureAsPdfIcon color="success" fontSize="small"/>Pdf</button>
          <button style={{marginLeft:"5px"}} className="btnstyle2"><InsertDriveFile fontSize="small" color="success" />Excel</button>
          </span>
          </div>
          <div className="formInputContainer">
            <div className="columnWrapper">
            <InputContainer
                label="Proposal Type:"
                control={control}
                placeholder="Select Praposal Type"
                name="district"
                mandatory
                type="selectInput"
                //data={DistrictsData}
              />
              <InputContainer
                label="Form No:"
                control={control}
                placeholder="Select Form No."
                name="district"
                mandatory
                type="selectInput"
                data={DistrictsData}
              />
               <InputContainer
                label="Area Type:"
                control={control}
                placeholder="Select Area Type."
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
                label="From Date:"
                control={control}
                placeholder="Select Date"
                name="dateArea"
                mandatory
                type="datePicker"
              />
               <InputContainer
                label="To Date:"
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
              <TableCell align="left" style={{border:"1px solid #000000"}}> Area</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Applied</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}> Under Processing</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}> Reverted</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}> Provissionaly Approved</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Permission Issued</TableCell>
              <TableCell align="left" style={{border:"1px solid #000000"}}>Rejected</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.area}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.area}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.applied}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.underProcessing}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.reverted}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.provissionalyApproved}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.permissionIssued}</TableCell>
                <TableCell align="left" style={{border:"1px solid #000000"}}>{row.rejected}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default ProposalWiseApplicationReport;
