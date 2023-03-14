import React from "react";
import { useForm } from "react-hook-form";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(
  serialNo,
  ulbName,
  developmentFee,
  cluFee,
  builtUpFee,
  deviationFee,
  eCharges,
  muckFee,
  processingFee,
  otherFee,
  totalFee,
  totalApplication
) {
  return {
    serialNo,
    ulbName,
    developmentFee,
    cluFee,
    builtUpFee,
    deviationFee,
    eCharges,
    muckFee,
    processingFee,
    otherFee,
    totalFee,
    totalApplication,
  };
}

const rows = [
  createData(
    0,
    "Example Example",
    "0000000",
    "000000",
    "0000",
    "000000000",
    "0000000",
    "000000000000",
    "000000",
    "000000000",
    "00000",
    "0000000"
  ),
  createData(
    0,
    "Example Example",
    "0000000",
    "000000",
    "0000",
    "000000000",
    "0000000",
    "000000000000",
    "000000",
    "000000000",
    "00000",
    "0000000"
  ),
  createData(
    0,
    "Example Example",
    "0000000",
    "000000",
    "0000",
    "000000000",
    "0000000",
    "000000000000",
    "000000",
    "000000000",
    "00000",
    "0000000"
  ),
  createData(
    0,
    "Example Example",
    "0000000",
    "000000",
    "0000",
    "000000000",
    "0000000",
    "000000000000",
    "000000",
    "000000000",
    "00000",
    "0000000"
  ),
];

const UlbWisePaymentReport = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">ULB wise Payment Report</h2>
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
                {/* <div className="subCol">
                  <div className="first">
                    Notified Area/Planning Area/Special Area
                  </div>
                  <div className="second">:-</div>
                </div>
                <div className="subCol">
                  <div className="first">Village Name</div>
                  <div className="second">:-</div>
                </div> */}
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
              <TableCell>Sl.#</TableCell>
              <TableCell align="left">ULB Name</TableCell>
              <TableCell align="left">Development Fees</TableCell>
              <TableCell align="left"> CLU Fees</TableCell>
              <TableCell align="left"> Builtup Fees</TableCell>
              <TableCell align="left"> Deviation Fees</TableCell>
              <TableCell align="left">E-Charges</TableCell>
              <TableCell align="left">Muck Fees</TableCell>
              <TableCell align="left">Processing Fees</TableCell>
              <TableCell align="left">Other Fees</TableCell>
              <TableCell align="left">Total Fees</TableCell>
              <TableCell align="left">Total Applications</TableCell>
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
                <TableCell align="left">{row.ulbName}</TableCell>
                <TableCell align="left">{row.developmentFee}</TableCell>
                <TableCell align="left">{row.cluFee}</TableCell>
                <TableCell align="left">{row.builtUpFee}</TableCell>
                <TableCell align="left">{row.deviationFee}</TableCell>
                <TableCell align="left">{row.eCharges}</TableCell>
                <TableCell align="left">{row.muckFee}</TableCell>
                <TableCell align="left">{row.processingFee}</TableCell>
                <TableCell align="left">{row.otherFee}</TableCell>
                <TableCell align="left">{row.totalFee}</TableCell>
                <TableCell align="left">{row.totalApplication}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default UlbWisePaymentReport;
