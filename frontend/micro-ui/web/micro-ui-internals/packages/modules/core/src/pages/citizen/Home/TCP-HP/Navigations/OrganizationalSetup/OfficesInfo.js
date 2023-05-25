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

function createData(name, calories, fat, carbs, protein, health) {
  return { name, calories, fat, carbs, protein, health };
}

const rows = [
  createData(1, 'Shimla', 1, 'Una', 1, 'Amb'),
  createData(2, 'Solan', 2, 'Chamba', 2, 'SunderNagar'),
  createData(3, 'Dharmasala', 3, 'Rampur Bushehar', 3, 'Ponta Sahib'),
  createData(4, 'Mandi', 4, 'Parwanoo', 4, 'Rohru'),
  createData(5, 'Kullu', 5, 'Bilaspur', 5, 'Nadaun'),
  createData(6, 'Hamirpur', 6, 'Kasuli', 6, ''),
  createData(7, 'Nahan', 7, 'Manali', 7, ''),
  createData(8, '', 8, 'Palampur', 8, ''),
];

export default function OfficesInfo() {
  return (
    <TableContainer component={Paper} sx={{width: '90%', margin: '20px 10px 0px 70px'}}>
        <Typography variant='p' style={{marginTop: '30px'}}>
        The Town & Country Planning Department in the State is still in its infancy. Besides Directorate, it has 7 Divisional Town and Country Planning Offices , 5 Sub-Divisional Town Planning Offices and 5 Town Planning Offices. The Divisional offices are headed by Town and Country Planners and Sub-Divisional offices by Assistant Town Planners and Town Planning Offices by Planning officers . The Divisional as well as Sub-Divisional offices and Town Planning Offices are located in following Towns :-
        </Typography>
      <Table sx={{maxWidth: 900, margin: '20px 20px 20px 200px' }} aria-label="customized table">
        <TableHead style={{height: '20px'}}>
          <TableRow style={{background: '#1F4A7C', height: '20px'}}>
            <StyledTableCell>SL#</StyledTableCell>
            <StyledTableCell align="right">Divisional Offices</StyledTableCell>
            <StyledTableCell align="right">SL#</StyledTableCell>
            <StyledTableCell align="right">Sub-Divisonal Offices</StyledTableCell>
            <StyledTableCell align="right">SL#</StyledTableCell>
            <StyledTableCell align="right">Town Planning Offices</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" style={{width: '10px'}}>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.health}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

