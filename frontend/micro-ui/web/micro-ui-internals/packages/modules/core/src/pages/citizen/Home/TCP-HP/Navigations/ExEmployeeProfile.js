import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein, health, lact) {
  return { name, calories, fat, carbs, protein, health, lact };
}

const rows = [
  createData('Application for Permission of Sub-division/development of Land', 60, 61, 10, 59, 98, 120),
  createData('Application for Building Plan Permission', 67, 41, 60, 29, 58, 67),
  createData('Application for Composition of Offences', 50, 71, 100, 79, 98, 134),
  createData('Application for Real Estate Projects', 40, 51, 70, 89, 68, 122),
  createData('Application for Change of Land Use', 56, 61, 50, 39, 19, 120),
];

export default function ExEmployeeProfile() {
  return (
    <TableContainer component={Paper} sx={{width: '90%', margin: '20px 10px 0px 70px'}}>
        <Typography variant='h6' style={{display: 'flex', justifyContent: 'center', height:'50px',  fontWeight: 'bold', fontSize: '30px',color: '#1F4A7C', backgroundImage: 'linear-gradient(to right, #F5F5FF, #E5E5FF)'}}>
                Ex-Employee Profile 
        </Typography>
      <Table sx={{minWidth: 1200 }} aria-label="customized table">
        <TableHead>
          <TableRow style={{background: '#1F4A7C'}}>
            <StyledTableCell>Time-Limit Prescribed as per PSGA</StyledTableCell>
            <StyledTableCell align="right">Total No. of Application Received</StyledTableCell>
            <StyledTableCell align="right">Total No. of Application Approved</StyledTableCell>
            <StyledTableCell align="right">Avg. Time</StyledTableCell>
            <StyledTableCell align="right">Median Time</StyledTableCell>
            <StyledTableCell align="right">Minimum</StyledTableCell>
            <StyledTableCell align="right">Maximum</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.health}</StyledTableCell>
              <StyledTableCell align="right">{row.lact}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

