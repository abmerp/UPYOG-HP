import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import {AiFillFilePdf} from 'react-icons/ai'

const rows = [
  { slNo: 1, description: "Latest Order - Delegation of Power under TCP Act,1977 to Executive Officers/Secretaries of Urban Local Bodies", pdfUrl: "https://www.tcp.hp.gov.in/Application/uploadDocuments/content/Department_notification.pdf" },
  { slNo: 2, description: "Delegation of powers under TCP Act", pdfUrl: "https://tcp.hp.gov.in/Application//uploadDocuments/rule/Rule20160830_161834.pdf" },
  { slNo: 3, description: "Dealing of cases for Regularization of Deviations and Un-authorised Constructions under Section 30-B of the Himachal Pradesh Town and Country Planning (Amendment) Ordinance,2016( Ordinance No. 1 of 2016)", pdfUrl: "https://www.tcp.hp.gov.in/Application/uploadDocuments/content/Deligation_of_section_30_B_to_.pdf" },
  { slNo: 4, description: "Delegation of Power under TCP Act,1977 to Commissioner,M.C Dharamshala", pdfUrl: "https://www.tcp.hp.gov.in/Application/uploadDocuments/content/Deligation_of_power_MC_Dharamshal.pdf" },
  { slNo: 5, description: "Deligation of Power under section 30-B of Himachal Pradesh Town and country Planning (Amendment)Act,2016(Act No. of 2017)", pdfUrl: "https://www.tcp.hp.gov.in/Application/uploadDocuments/content/Deligation_of_power.pdf" },
  { slNo: 6, description: "Competent Authority of dealing cases under Section 30-B of the Himachal Pradesh Town and Country Planning (Amendment) Act,2016(Act No.1 of 2017)", pdfUrl: "https://www.tcp.hp.gov.in/Application/uploadDocuments/content/compitent_Authority.pdf" },
  { slNo: 7, description: "Delegation of  power to ULBs under Single Window System.", pdfUrl: "https://www.tcp.hp.gov.in/Application/uploadDocuments/content/Deligation_of_Power_14-05-2017.pdf" },
  { slNo: 8, description: " Delegation of power in respect of Flatted/Plotted Colonies or Real Estate Projects", pdfUrl: "https://tcp.hp.gov.in/Application/uploadDocuments/content/delegation_of_power.pdf" },
  { slNo: 9, description: "Delegation of Power to 20 constituted as planning area.(2018).", pdfUrl: "https://tcp.hp.gov.in/Application/uploadDocuments/content/New_Doc_2018-12-11_13.10.29_3.pdf" },
  { slNo: 10, description: "Delegation of Power to Enforcement Wing.", pdfUrl: "https://tcp.hp.gov.in/Application/uploadDocuments/content/DelegationOfPower_1.pdf" },
  { slNo: 11, description: "Delegation of Power to BBNDA.", pdfUrl: "https://tcp.hp.gov.in/Application/uploadDocuments/content/notification.pdf" },
  { slNo: 12, description: "Delegation of Power for new MC Solan, MC Palampur & MC Mandi.", pdfUrl: "https://tcp.hp.gov.in/Application/uploadDocuments/content/Deligation_of_power_for_new_MCs_SolanPalampurMandi.pdf" },

];

const handlePdfDownload = (pdfUrl) => {
  window.open(pdfUrl);
};

const PowerDelegation = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Sample Table" style={{width: '90%', margin: '30px'}}>
        <TableHead>
          <TableRow style={{background: '#1F4A7C', height: '20px'}}>
            <TableCell style={{width: '5%', color: 'white'}}>SL. No</TableCell>
            <TableCell style={{width: '75%', color: 'white'}}>Description</TableCell>
            <TableCell style={{width: '5%', color: 'white'}}>PDF</TableCell>
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
  );
};

export default PowerDelegation;
