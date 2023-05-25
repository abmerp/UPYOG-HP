// import React from "react";
// import { useForm } from "react-hook-form";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";

// function createData(
//   serialNo,
//   name,
//   formNo,
//   address,
//   applicationNo,
//   paymentDate,
//   buildingPhoto,
//   status
// ) {
//   return {
//     serialNo,
//     name,
//     formNo,
//     address,
//     applicationNo,
//     paymentDate,
//     buildingPhoto,
//     status,
//   };
// }

// const rows = [
//   createData(
//     0,
//     "Example Example",
//     " Town/Village : Example  Dist : Example, State : Example",
//     "Example",
//     "ABCDEFGHIJKLMNOP",
//     "15-Feb-2022",
//     "000000000000000000",
//     "Success"
//   ),
// ];

// const NocReport = () => {
//   const { handleSubmit, control } = useForm();
//   const onSubmit = (data) => console.log(data);

//   return (
//     <section className="container">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="formContainer">
//           <div className="formHeaderContainer">
//             <h2 className="formHeading">NOC Report</h2>
//             <div className="tableWrapper">
//               <div className="row">
//                 <div className="subCol">
//                   <div className="first">District Name</div>
//                   <div className="second">: ALL</div>
//                 </div>
//                 {/* <div className="subCol">
//                   <div className="first">
//                     ULB Name - Municipal Corporation, Municipal Council, Nagar
//                     Panchayat)
//                   </div>
//                   <div className="second">:-</div>
//                 </div>
//                 <div className="subCol">
//                   <div className="first">Ward No.</div>
//                   <div className="second">:-</div>
//                 </div> */}
//                 <div className="subCol">
//                   <div className="first">
//                     Notified Area/Planning Area/Special Area
//                   </div>
//                   <div className="second">:-</div>
//                 </div>
//                 <div className="subCol">
//                   <div className="first">Village Name</div>
//                   <div className="second">:-</div>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="subCol">
//                   <div className="first">From Date</div>
//                   <div className="second">: 01/01/2023</div>
//                 </div>
//                 <div className="subCol">
//                   <div className="first">To Date</div>
//                   <div className="second">: 01/02/2023</div>
//                 </div>
//                 <div className="subCol">
//                   <div className="first">Plot No.</div>
//                   <div className="second">:-</div>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="subCol">
//                   <div className="first">Application No.</div>
//                   <div className="second">:-</div>
//                 </div>
//                 <div className="subCol">
//                   <div className="first">Property Type</div>
//                   <div className="second">: ALL</div>
//                 </div>
//                 <div className="subCol"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>

//       <TableContainer
//         sx={{
//           width: "100%",
//           marginTop: "2rem",
//           borderTop: "1px solid #e0e0e0",
//         }}
//       >
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Sl.#</TableCell>
//               <TableCell align="left">Applicant Name</TableCell>
//               <TableCell align="left">Address</TableCell>
//               <TableCell align="left">Form No.</TableCell>
//               <TableCell align="left">Application No.</TableCell>
//               <TableCell align="left">Applied on.</TableCell>
//               <TableCell align="left">Building Photo</TableCell>
//               <TableCell align="left">Status</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <TableRow
//                 key={row.serialNo}
//                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//               >
//                 <TableCell component="th" scope="row">
//                   {row.serialNo}
//                 </TableCell>
//                 <TableCell align="left">{row.name}</TableCell>
//                 <TableCell align="left">{row.address}</TableCell>
//                 <TableCell align="left">{row.formNo}</TableCell>
//                 <TableCell align="left">{row.applicationNo}</TableCell>
//                 <TableCell align="left">{row.paymentDate}</TableCell>
//                 <img
//                   className="table-image"
//                   src="https://www.ghar47.com/wp-content/uploads/2021/12/buy-property-online.jpg"
//                   alt="table"
//                 />
//                 <TableCell align="left">{row.status}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </section>
//   );
// };

// export default NocReport;
