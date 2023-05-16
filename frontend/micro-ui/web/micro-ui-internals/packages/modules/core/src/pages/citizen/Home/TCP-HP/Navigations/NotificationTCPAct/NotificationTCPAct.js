import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@material-ui/core";
import {AiFillFilePdf} from 'react-icons/ai'

const rows = [
  { slNo: 1, description: "New * Notification of IDP SHIMLA 13-08-2015*.", date: '06-Aug-2016', pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/notification/Notice20171107_111513.pdf" },
  { slNo: 2, description: "Clarification regarding mis - interpreting of Basements", date: '24-May-2019', pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/notification/Notice20190524_122513.pdf" },
  { slNo: 3, description: "Notice for publication of proposed amendment(s) in development plans.", date: '28-Sep-2016', pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/notification/Notice20160928_174624.pdf" },
  { slNo: 4, description: "Amendment in IDP Shimla notification dated 28/06/2016.", date: '28-Sep-2016', pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/notification/Notice20160928_174203.pdf" },
  { slNo: 5, description: "EXEMPTIONS IN RURAL AREAS-CLARIFICATIONS THEREOF", date: '28-Sep-2016', pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/notification/Notice20160928_173242.pdf" },
  { slNo: 6, description: "Policy on section 16(c) of HPTCP, Act 1977", date: '28-Sep-2016', pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/notification/Notice20160928_172748.pdf" },
  { slNo: 7, description: "Policy for Establishment of “Dr. A.P.J. Abdul Kalam e-Map Centre” in Town and Country Planning Department and Special Area Development Authority (SADA).", date: '28-Sep-2016', pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/notification/Notice20160928_172623.pdf" },
  { slNo: 8, description: "Comparison between notifications dated 28.02.2011 and 13.08.2015 in respect of IDP,Shimla.", date: '28-Sep-2016', pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/notification/Notice20160928_172410.pdf" },
  { slNo: 9, description: "Policy for setting up Mobile Communication towers, Dated 22-08-2016 and 4-10-2006 and Clarification on Appendix-9 in HPTCP Rules -2014.", date: '05-Aug-2016', pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/notification/Notice20170106_110550.pdf" },
  { slNo: 10, description: "Revised Sujanpur Planning Area", date: '19-Jul-2016', pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/notification/Notice20160719_111241.pdf" },
  { slNo: 11, description: "Revised Joginder nager Planning area", date: '19-Jul-2016', pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/notification/Notice20160719_111148.pdf" },
  { slNo: 12, description: "Revised Ghumarwin Planning Area ", date: '19-Jul-2016', pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/notification/Notice20160719_111108.pdf" },
  { slNo: 13, description: "Revised Bhota Planning Area ", date: '19-Jul-2016', pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/notification/Notice20160719_111014.pdf" },
  { slNo: 14, description: "Ceasing of Shri Naina Devi Ji Planning Area", date: '19-Jul-2016', pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/notification/Notice20160719_110911.pdf" },
  { slNo: 15, description: "Extention in Bilaspur Planning Area", date: '19-Jul-2016', pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/notification/Notice20160719_110831.pdf" },
  { slNo: 16, description: "Public Service Guarantee Act",date: '05-Apr-2016', pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/notification/Notice20230110_162642.pdf" },
  { slNo: 17, description: "Kasauli Development Plan amendment notification", date: '20-Nov-2015', pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/notification/Notice20151120_105756.pdf" },
]

const handlePdfDownload = (pdfUrl) => {
  window.open(pdfUrl);
};

const NotificationTCP = () => {
  return (
    <>
    <TableContainer component={Paper}>
    <Typography variant='h6' style={{margin: '20px'}}>
      Other Notifications
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

export default NotificationTCP;
