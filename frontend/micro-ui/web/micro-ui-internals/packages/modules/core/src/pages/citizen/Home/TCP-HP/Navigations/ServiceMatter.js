import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@material-ui/core";
import {AiFillFilePdf} from 'react-icons/ai'

const rows = [
  { slNo: 1, description: "Seniority List of Gazetted Officials", pdfUrl: "https://tcp.hp.gov.in/Application/uploadDocuments/content/2_1.pdf" },
  { slNo: 2, description: "Seniority List of Non Gazetted Official", pdfUrl: "https://www.tcp.hp.gov.in/Application/uploadDocuments/content/Seniority_list_of_Non_Gazetted_Official_.pdf" },
  { slNo: 3, description: "DETAILS OF SANCTIONED/FILLED/VACANT POSTS IN TOWN & COUNTRY PLANNING DEPARTMENT AS ON 31.03.2019", pdfUrl: "https://tcp.hp.gov.in/Application/uploadDocuments/content/1_1.pdf" },
  { slNo: 4, description: "R & P Rules for Surveyor Class-III", pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/rule/Rule20160130_133101.pdf" },
  { slNo: 5, description: "R & P Rules for Sr. Planning Draughtman Class-II", pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/rule/Rule20160130_132735.pdf" },
  { slNo: 6, description: " R & P Rules for Research Asstt. Class-III", pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/rule/Rule20160130_132351.pdf" },
  { slNo: 7, description: " R & P Rules for Research Officer Class-II", pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/rule/Rule20160130_132217.pdf"},
  { slNo: 8, description: "R & P Rules for Planning Officer Class-I", pdfUrl: "https://www.tcp.hp.gov.in/Application/uploadDocuments/content/P.O_Rules_2.pdf" },
  { slNo: 9, description: "R & P Rules for Jr. Engg. Class-III", pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/rule/Rule20160130_122246.pdf" },
  { slNo: 10, description: "R & P Rules for Jr. Engg. Class-III", pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/rule/Rule20160130_121634.pdf" },
  { slNo: 11, description: "R & P Rules for Jr. Draughtsman Class-III", pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/rule/Rule20160130_121634.pdf" },
  { slNo: 12, description: "R & P Rules for Ferro Printer Class-III Part-II", pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/rule/Rule20160130_121423.pdf" },
  { slNo: 13, description: "R & P Rules for Ferro Printer Class-III", pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/rule/Rule20160130_121217.pdf" },
  { slNo: 14, description: "R & P Rules for Draughtman Class-III", pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/rule/Rule20160130_121023.pdf" },
  { slNo: 15, description: "R & P Rules for Assistant Town Planner Class-I", pdfUrl: "https://tcp.hp.gov.in/Application/uploadDocuments/content/ATP.pdf" },
  { slNo: 16, description: "R & P Rules for Field Investigator Class-III Part-II", pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/rule/Rule20160130_114547.pdf" },
  { slNo: 17, description: "R & P Rules for Field Investigator Class-III", pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/rule/Rule20160130_114041.pdf" },
  { slNo: 18, description: " R & P Rules of Peon", pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/rule/Rule20151107_165941.pdf" },
  { slNo: 19, description: " R & P Rules of Chainman", pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/rule/Rule20151107_165339.pdf"},
  { slNo: 20, description: " Rules for Regulating the Payment for the Grant-in-Aid", pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/rule/Rule20150127_160650.pdf" },
  { slNo: 21, description: " R & P Rules of Officers", pdfUrl: "https://tcp.hp.gov.in/Application/uploadDocuments/content/combinepdf11.pdf" },
  { slNo: 22, description: "Job Profile", pdfUrl: "https://tcp.hp.gov.in/Application/uploadDocuments/content/job_profile.pdf" },
];

const handlePdfDownload = (pdfUrl) => {
  window.open(pdfUrl);
};

const ServiceMatter = () => {
  return (
    <React.Fragment>
    <TableContainer component={Paper}>
    <Typography variant='h6' style={{margin: '20px'}}>
      Service Matter
    </Typography>
      <Table aria-label="Sample Table" style={{width: '90%', margin: '30px'}}>
        <TableHead>
          <TableRow style={{background: '#1F4A7C', height: '20px'}}>
            <TableCell style={{width: '5%', color: 'white'}}>SL. No</TableCell>
            <TableCell style={{width: '75%', color: 'white'}}>Headline</TableCell>
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
              <TableCell onClick={() => handlePdfDownload(row.pdfUrl)}><AiFillFilePdf style={{width: '30px', height: '30px', color:'#1F4A7C'}}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </React.Fragment>
  );
};

export default ServiceMatter;
