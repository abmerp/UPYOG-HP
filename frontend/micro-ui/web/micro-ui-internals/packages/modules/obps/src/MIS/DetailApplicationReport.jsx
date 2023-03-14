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
  ),
  createData(
    3,
    "Mohan Singh",
    "ahulbuntwddy542@gmail.com",
    "345345345",
    "Form 12",
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
];

const DetailApplicationReport = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section style={{ width: "97vw", margin: "auto", marginTop: "3vw" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">Detail Applicant Report</h2>
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
      </TableContainer>
    </section>
  );
};

export default DetailApplicationReport;
