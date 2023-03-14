import React from "react";
import { useForm } from "react-hook-form";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

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

const ApplicationSummaryReport = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">Application Summary Report</h2>
            <div className="tableWrapper">
              <div className="row">
                <div className="subCol">
                  <div className="first">District Name</div>
                  <div className="second">: ALL</div>
                </div>
                {/* <div className="subCol">
                  <div className="first">
                    ULB Name - Municipal Corporation, Municipal Council, Nagar
                    Panchayat)
                  </div>
                  <div className="second">:-</div>
                </div>
                <div className="subCol">
                  <div className="first">Ward No.</div>
                  <div className="second">:-</div>
                </div> */}
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
              <TableCell align="left"> Area</TableCell>
              <TableCell align="left">Applied</TableCell>
              <TableCell align="left"> Under Processing</TableCell>
              <TableCell align="left"> Reverted</TableCell>
              <TableCell align="left"> Provissionaly Approved</TableCell>
              <TableCell align="left">Permission Issued</TableCell>
              <TableCell align="left">Rejected</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.area}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.area}</TableCell>
                <TableCell align="left">{row.applied}</TableCell>
                <TableCell align="left">{row.underProcessing}</TableCell>
                <TableCell align="left">{row.reverted}</TableCell>
                <TableCell align="left">{row.provissionalyApproved}</TableCell>
                <TableCell align="left">{row.permissionIssued}</TableCell>
                <TableCell align="left">{row.rejected}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default ApplicationSummaryReport;
