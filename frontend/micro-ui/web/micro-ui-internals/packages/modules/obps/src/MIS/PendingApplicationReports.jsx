import React from "react";
import { useForm } from "react-hook-form";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

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

const PendingApplicationReports = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
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
              <TableCell align="left">Applicant Name</TableCell>
              <TableCell align="left">Form No.</TableCell>
              <TableCell align="left"> Mobile No.</TableCell>
              <TableCell align="left"> Application/Ref. No</TableCell>
              <TableCell align="left"> Applied On</TableCell>
              <TableCell align="left"> Pending With</TableCell>
              <TableCell align="left"> Pending Days</TableCell>
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
                <TableCell align="left">{row.formNo}</TableCell>
                <TableCell align="left">{row.mobileNo}</TableCell>
                <TableCell align="left">{row.applicationNo}</TableCell>
                <TableCell align="left">{row.appliedNo}</TableCell>
                <TableCell align="left">{row.pendingWith}</TableCell>
                <TableCell align="left">{row.pendingDays}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default PendingApplicationReports;
