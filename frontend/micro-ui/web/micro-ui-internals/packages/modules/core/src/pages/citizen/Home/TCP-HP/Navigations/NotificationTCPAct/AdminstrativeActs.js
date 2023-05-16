import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@material-ui/core";
import {AiFillFilePdf} from 'react-icons/ai'

const rows = [
  { slNo: 1, description: "Circular mandating online submission of Applications", date: '10-Dec-2020', pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/notification/Notice20201210_132526.pdf" },
]

const handlePdfDownload = (pdfUrl) => {
  window.open(pdfUrl);
};

const AdminstrativeOrders = () => {
  return (
    <>
    <TableContainer component={Paper}>
    <Typography variant='h6' style={{margin: '20px'}}>
      AdminstrativeOrders
    </Typography>
      <Table aria-label="Sample Table" style={{width: '90%', margin: '30px'}}>
        <TableHead>
          <TableRow style={{background: '#1F4A7C', height: '20px'}}>
            <TableCell style={{width: '5%', color: 'white'}}>SL. No</TableCell>
            <TableCell style={{width: '60%', color: 'white'}}>Headline</TableCell>
            <TableCell style={{width: '10%', color: 'white'}}>Notification Date</TableCell>
            <TableCell style={{width: '5%', color: 'white'}}>Download</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.slNo}>
              <TableCell component="th" scope="row">
                {row.slNo}
              </TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell onClick={() => handlePdfDownload(row.pdfUrl)}><AiFillFilePdf style={{width: '30px', height: '30px', color:'#1F4A7C'}}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default AdminstrativeOrders;
