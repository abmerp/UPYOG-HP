import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Typography } from '@mui/material';

const records = [
  { id: 1, photo: 'https://tcp.hp.gov.in/Application/uploadDocuments/employee/Emp20220215_120357.jpg', name: 'Sh. Devesh kumar, IAS, IAS', designation: 'Principal Secretary ,TCP', PhoneNo: '', MobNo: '', Email: "N/A" },
  { id: 2, photo: 'https://tcp.hp.gov.in/img/noPhptoPassport.jpg', name: 'Sh. Madan Negi', designation: 'Section Officer ,TCP', PhoneNo: '0177-2880435', MobNo: '8988054386', Email: "N/A" },
  { id: 3, photo: 'https://tcp.hp.gov.in/Application/uploadDocuments/employee/Emp20201027_113328.jpg', name: 'Sh. Kamal Kant Saroch', designation: 'Director, TCP Department', PhoneNo: '0177-2622494', MobNo: '', Email: "N/A" },
  { id: 4, photo: 'https://tcp.hp.gov.in/img/noPhptoPassport.jpg', name: 'State Town Planner', designation: 'STP', PhoneNo: 'N/A', MobNo: 'N/A', Email: "N/A" },
  { id: 5, photo: 'https://tcp.hp.gov.in/Application/uploadDocuments/employee/Emp20210129_115347.jpg', name: 'Sh. Kamar Chand Nanta', designation: 'TCP(HQ), Directorate', PhoneNo: '0177-2621450', MobNo: '9816600890', Email: "kc.nanta40@hp.gov.in" },
  { id: 6, photo: 'https://tcp.hp.gov.in/Application/uploadDocuments/employee/Emp20210129_115322.jpg', name: 'Ms. Soma Devi', designation: 'ATP(HQ), Direcotrate', PhoneNo: '', MobNo: '', Email: "N/A" },
  { id: 7, photo: 'https://tcp.hp.gov.in/Application/uploadDocuments/employee/Emp20210204_113131.jpg', name: 'Ajay Kumar Sharma', designation: 'Programmer(HQ), Directorate', PhoneNo: '', MobNo: '', Email: "tcpdatabank@gmail.com" },
  { id: 8, photo: 'https://tcp.hp.gov.in/Application/uploadDocuments/employee/Emp20230427_130224.jpg', name: 'Mr. Akshit Mehta, B.TECH in URBAN AND REGIONAL PLANNING', designation: 'ASSTT. TOWN PLANNER, HQ', PhoneNo: '0177-2624762', MobNo: '9888333320', Email: "tcpdatabank@gmail.com" },
  { id: 9, photo: 'https://tcp.hp.gov.in/img/noPhptoPassport.jpg', name: 'Mr. Harender Sharma', designation: 'P.O(HQ), Directorate', PhoneNo: '0177-2624762', MobNo: '', Email: "tcpdatabank@gmail.com" },
  { id: 10, photo: 'https://tcp.hp.gov.in/img/noPhptoPassport.jpg', name: 'Sh. Mayank Manta', designation: 'Law Officer, Directorate', PhoneNo: '0177-2627619', MobNo: '9459040229', Email: "NA" },
  { id: 11, photo: 'https://tcp.hp.gov.in/img/noPhptoPassport.jpg', name: 'Sh. Jai Ram', designation: 'Sutd.I, Directorate', PhoneNo: '0177-2624762', MobNo: '9418192290', Email: "jairam171965@gmail.com" },
  { id: 12, photo: 'https://tcp.hp.gov.in/Application/uploadDocuments/employee/Emp20210129_115347.jpg', name: 'Sh. Kamar Chand Nanta', designation: 'TCP, Shimla, D.T.P Office Shimla', PhoneNo: '0177-2624762', MobNo: '9816600890', Email: "kc.nanta40@hp.gov.in" },
  { id: 13, photo: 'https://tcp.hp.gov.in/img/noPhptoPassport.jpg', name: 'ATP Shimla', designation: 'A.T.P, D.T.P Office Shimla', PhoneNo: '01792-233507', MobNo: '', Email: "tcpdatabank@gmail.com" },
  { id: 14, photo: 'https://tcp.hp.gov.in/Application/uploadDocuments/employee/Emp20210129_115627.jpg', name: 'Mr. Chetan Sharma', designation: 'P.O D.T.P Office Shimla', PhoneNo: '', MobNo: '9418088730', Email: "NA" },
  { id: 15, photo: 'https://tcp.hp.gov.in/img/noPhptoPassport.jpg', name: 'Mr. Jay Prakash', designation: 'PQ HQ', PhoneNo: '', MobNo: '9418625202', Email: "tcpdatabank@gmail.com" },
  { id: 16, photo: 'https://tcp.hp.gov.in/Application/uploadDocuments/employee/Emp20220504_164216.jpg', name: 'Smt. Prem Lata Chauhan', designation: 'TCP, D.T.P. Office, SOlan', PhoneNo: '01792-228485', MobNo: '9418589531', Email: "premlatachauhan@hotmail.com" },
  { id: 17, photo: 'https://tcp.hp.gov.in/img/noPhptoPassport.jpg', name: 'Sh. Ramesh Bharadwaj', designation: 'ATP, DTP. Office SOlan', PhoneNo: '01792-228486', MobNo: '9418075289', Email: "ramesh.rc1472@rediffmail.com" },
  { id: 18, photo: 'https://tcp.hp.gov.in/img/noPhptoPassport.jpg', name: 'Sh. Rajesh Kumar', designation: 'P.O TCP Office Shimla', PhoneNo: '', MobNo: '9418479019', Email: "NA" },
  { id: 19, photo: 'https://tcp.hp.gov.in/Application/uploadDocuments/employee/Emp20210129_120543.jpg', name: 'MR. Raj Mohan Singh', designation: 'P.O D.T.P Office Solan', PhoneNo: '', MobNo: '', Email: "NA" },
  { id: 20, photo: 'https://tcp.hp.gov.in/Application/uploadDocuments/employee/Emp20210129_115627.jpg', name: 'Akshay Kumar Sharma', designation: 'A.T.P , S.D.T.P Office, Kasauli', PhoneNo: '', MobNo: '8219267407', Email: "akshay.upmanyu01@gmail.com" },
  { id: 20, photo: 'https://tcp.hp.gov.in/Application/uploadDocuments/employee/Emp20220504_164216.jpg', name: 'Smt. Prem Lata Chauhan', designation: 'TCP, D.T.P. Office, SOlan', PhoneNo: '01792-228485', MobNo: '9418589531', Email: "premlatachauhan@hotmail.com" },
  { id: 21, photo: 'https://tcp.hp.gov.in/img/noPhptoPassport.jpg', name: 'Sh. Nirdosh Kumar', designation: 'P.O.S.D.T.P Office, Parwanoo', PhoneNo: '01792-233507', MobNo: '8679166401', Email: "nirdoshkaushal1899@gmail.com" },
];

const columns = [
  { id: 'photo', label: 'Photo', width: '15%' },
  { id: 'name', label: 'Name & Designation', width: '50%' },
  { id: 'contact', label: 'Contact Information', width: '25%' },
];

const rowsPerPage = 10;

const EmployeeProfile = () => {
  const [page, setPage] = useState(0);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  return (
    <TableContainer component={Paper}>
      <Typography variant='h6' style={{margin: '20px'}}>
        Employee Profile
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
                <div>{record.name}</div>
                <div>{record.designation}</div>
              </TableCell>
              <TableCell>
              <div>Phone No: {record.PhoneNo}</div>
              <div>Mobile No: {record.MobNo}</div>
              <div>Email: {record.Email}</div>
              </TableCell>
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

export default EmployeeProfile;
