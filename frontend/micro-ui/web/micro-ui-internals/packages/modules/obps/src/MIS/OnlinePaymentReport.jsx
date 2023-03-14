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
    1,
    "Sun City Project Pvt Ltd.",
    "Form 12",
    2685345345,
    "HPUD2741676455772",
    "15-Feb-2022",
    "3u436484297029",
    "Success",
    "Rs. 0000"
  ),
  createData(
    1,
    "Sun City Project Pvt Ltd.",
    "Form 12",
    2685345345,
    "HPUD2741676455772",
    "15-Feb-2022",
    "3u436484297029",
    "Success",
    "Rs. 0000"
  ),
  createData(
    1,
    "Sun City Project Pvt Ltd.",
    "Form 12",
    2685345345,
    "HPUD2741676455772",
    "15-Feb-2022",
    "3u436484297029",
    "Success",
    "Rs. 0000"
  ),
  createData(
    1,
    "Sun City Project Pvt Ltd.",
    "Form 12",
    2685345345,
    "HPUD2741676455772",
    "15-Feb-2022",
    "3u436484297029",
    "Success",
    "Rs. 0000"
  ),
  createData(
    1,
    "Sun City Project Pvt Ltd.",
    "Form 12",
    2685345345,
    "HPUD2741676455772",
    "15-Feb-2022",
    "3u436484297029",
    "Success",
    "Rs. 0000"
  ),
  createData(
    1,
    "Sun City Project Pvt Ltd.",
    "Form 12",
    2685345345,
    "HPUD2741676455772",
    "15-Feb-2022",
    "3u436484297029",
    "Success",
    "Rs. 0000"
  ),
  createData(
    1,
    "Sun City Project Pvt Ltd.",
    "Form 12",
    2685345345,
    "HPUD2741676455772",
    "15-Feb-2022",
    "3u436484297029",
    "Success",
    "Rs. 0000"
  ),
  createData(
    1,
    "Sun City Project Pvt Ltd.",
    "Form 11",
    268232325345345,
    "HPUD2741676455772",
    "15-Feb-2022",
    "3u436484297029",
    "Success",
    "Rs. 0000"
  ),
  createData(
    1,
    "Sun City Project Pvt Ltd.",
    "Form 12",
    26345345,
    "HPUD2741676455772",
    "15-Feb-2022",
    "3u436484297029",
    "Success",
    "Rs. 0000"
  ),
  createData(
    1,
    "Sun City Project Pvt Ltd.",
    "Form 12",
    2685345345,
    "HPUD2741676455772",
    "15-Feb-2022",
    "3u436484297029",
    "Success",
    "Rs. 0000"
  ),
];

const OnlinePaymentReport = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formContainer">
          <div className="formHeaderContainer">
            <h2 className="formHeading">Online payment report</h2>
            <div className="tableWrapper">
              <div className="row">
                <div className="subCol">
                  <div className="first">Form Number</div>
                  <div className="second">: ALL</div>
                </div>
                <div className="subCol">
                  <div className="first">Applicant Name</div>
                  <div className="second">:-</div>
                </div>
                <div className="subCol">
                  <div className="first">Transaction Id</div>
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
                  <div className="first">Payment Ref. No</div>
                  <div className="second">:-</div>
                </div>
              </div>
              <div className="row">
                <div className="subCol">
                  <div className="first">Application/Ref. No</div>
                  <div className="second">:-</div>
                </div>
                <div className="subCol">
                  <div className="first">Status</div>
                  <div className="second">: ALL</div>
                </div>
                <div className="subCol">
                  <div className="first">Area Type</div>
                  <div className="second">: ALL</div>
                </div>
              </div>
              <div className="row">
                <div className="subCol">
                  <div className="first">District</div>
                  <div className="second">: ALL</div>
                </div>
                <div className="subCol">
                  <div className="first">ULB</div>
                  <div className="second">: ALL</div>
                </div>
                <div className="subCol">
                  <div className="first">
                    <button>Show</button>
                  </div>
                </div>
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
              <TableCell align="left">Form No.</TableCell>
              <TableCell align="left"> Application/Ref. No</TableCell>
              <TableCell align="left"> Payment/Ref. No.</TableCell>
              <TableCell align="left"> Payment Date</TableCell>
              <TableCell align="left">Transaction Id</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Amount</TableCell>
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
                <TableCell align="left">{row.applicationNo}</TableCell>
                <TableCell align="left">{row.paymentNo}</TableCell>
                <TableCell align="left">{row.paymentDate}</TableCell>
                <TableCell align="left">{row.trasactionId}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="left">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default OnlinePaymentReport;
