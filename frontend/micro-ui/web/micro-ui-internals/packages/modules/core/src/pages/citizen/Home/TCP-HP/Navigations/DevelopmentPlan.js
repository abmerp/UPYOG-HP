import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Typography } from '@mui/material';
import {AiFillFilePdf} from 'react-icons/ai'

const records = [
  { photo: 'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanImeage20171226_124046.jpg', headline1: 'Amb Gagret', headline2: 'Amb Gagret Development Plan', headline3: '', Pdf1: 'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanDoc020171226_124046.pdf', Pdf2: '' },
  { photo: 'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanImeage20150127_180049.jpg', headline1: 'BADDI BAROTIWALA NALAGARH DEVELOPMENT AUTHORITY', headline2: 'Development Plan', headline3: 'General Development Control Regulations', Pdf1: 'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanDoc020160604_155907.pdf', Pdf2:'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanDoc120191106_111830.pdf' },
  { photo: 'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanImeage20171223_142125.jpg', headline1: 'Baijnath', headline2: 'Baijnath Development Plan', headline3: '', Pdf1: 'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanDoc020171223_142125.pdf', Pdf2: '' },
  { photo: 'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanImeage20170325_161944.jpg', headline1: 'Barog', headline2: 'Barog', headline3: '', Pdf1: 'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanDoc020170325_161944.pdf', Pdf2: '' },
  { photo: 'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanImeage20150127_180726.jpg', headline1: 'Bilaspur', headline2: 'Development Plan', headline3: '', Pdf1: 'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanDoc020160604_154135.pdf', Pdf2: '' },
  { photo: 'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanImeage20171227_123452.jpg', headline1: 'Bir-Billing', headline2: 'Bir-Billing Development Plan', headline3: '', Pdf1: 'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanDoc020171227_123452.pdf', Pdf2: '' },
  { photo: 'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanImeage20161017_153953.jpg', headline1: 'Chamba', headline2: 'Development Plan', headline3: 'Map Chamba Development Plan', Pdf1: 'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanDoc020161017_153953.pdf', Pdf2: 'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanDoc120161017_154849.pdf' },
  { photo: 'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanImeage20230307_125911.jpg', headline1: 'Chamumda Nandkeshwar Dham DP-2037', headline2: 'Chamumda Nandkeshwar Dham DP-2037', headline3: '', Pdf1: 'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanDoc020230307_125911.pdf', Pdf2: '' },
  { photo: 'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanImeage20150127_174621.jpg', headline1: 'DALHOUISE', headline2: 'Development Plan', headline3: '', Pdf1: 'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanDoc020171226_122950.pdf', Pdf2: '' },
  { photo: 'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanImeage20150127_174852.jpg', headline1: 'DHARAMSHALA', headline2: 'Development Plan', headline3: '', Pdf1: 'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanDoc020171226_122950.pdf', Pdf2: '' },
  { photo: 'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanImeage20150127_174852.jpg', headline1: 'DHARAMSHALA', headline2: 'Development Plan', headline3: '', Pdf1: 'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanDoc020171226_122950.pdf', Pdf2: '' },
];

const columns = [
  { id: 'photo', label: 'Photo', width: '15%' },
  { id: 'headline', label: 'Headline', width: '60%' },
  { id: 'download', label: 'Download', width: '15%' },
];

const rowsPerPage = 10;

const PdfTableCell = ({ pdf1, pdf2, onClick }) => {
    return (
      <TableCell onClick={onClick}>
        <div>{pdf1 && <a href={pdf1} target="_blank" rel="noopener noreferrer"><AiFillFilePdf style={{width: '30px', height: '30px', color:'#1F4A7C', marginRight: '10px'}}/></a>}</div>
        <div> {pdf2 && <a href={pdf2} target="_blank" rel="noopener noreferrer"><AiFillFilePdf style={{width: '30px', height: '30px', color:'#1F4A7C'}}/></a>}</div>
      </TableCell>
    );
  };

const DevelopmentPlan = () => {
  const [page, setPage] = useState(0);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };
  const handlePdfDownload = (pdfUrl) => {
    window.open(pdfUrl);
  };

  return (
    <TableContainer component={Paper}>
      <Typography variant='h6' style={{margin: '20px'}}>
        Development Plan
      </Typography>
      <Table style={{width: '90%', margin: '30px'}}>
        <TableHead>
          <TableRow style={{background: '#1F4A7C', height: '20px'}}>
            {columns.map((column) => (
              <TableCell key={column.id} style={{color: 'white', width: column.width}}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {records.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((record) => (
            <TableRow key={record.id}>
              <TableCell>
                <img src={record.photo} alt={record.name} width="80" height="80" />
              </TableCell>
              <TableCell>
                <div style={{fontWeight: 'bold'}}>{record.headline1}</div>
                <div>{record.headline2}</div>
                <div>{record.headline3}</div>
              </TableCell>
              <PdfTableCell pdf1={record.Pdf1} pdf2={record.Pdf2} onClick={() => handlePdfDownload(record.Pdf1 || record.Pdf2)} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={records.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </TableContainer>
  );
};

export default DevelopmentPlan;
