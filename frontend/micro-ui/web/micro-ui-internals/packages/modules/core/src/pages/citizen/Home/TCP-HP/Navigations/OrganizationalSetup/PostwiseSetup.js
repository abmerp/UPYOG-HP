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
  createData(1, 'Director', 1, 1, '-', '-'),
  createData(2, 'State Town Planner', 1, '-', 1, '-'),
  createData(3, 'Town & COuntry Planner', 8, 6, 2, '-'),
  createData(4, 'Astt. Town Planner', 16, 11, 5, '-'),
  createData(5, 'Planning Officer', 31, 18, 13, '-'),
  createData(6, 'Law Officer', 1, 1, '-', '-'),
  createData(7, 'Tehsildar', 1, '-', 1, '-'),
  createData(8, 'Supdt.Gr.I', 1, 1, '-', '-'),
  createData(9, 'Research Officer', 1, '-', 1, '-'),
  createData(10, 'Section Officer', 1, 1, '-', '-'),
  createData(11, 'Supdt.Gr.II', 2, 2, '-', '-'),
  createData(12, 'Sr.Planning Draughtsman', 10, 8, 2, '-'),
  createData(13, 'Personal Assistant', 1, '-', 1, '-'),
  createData(14, 'Junior Engineer', 38, 30, 8, '-'),
  createData(15, 'Draughtssman', 11, 8, 3, '-'),
  createData(16, 'Jr.Draughtsman', 29, 18, 11, '-'),
  createData(17, 'Ferro Printer', 2, 2, '-', '-'),
  createData(18, 'Research Assistant', 1, 1, '-', '-'),
  createData(19, 'Field Investigator', 2, 1, 1, '-'),
  createData(20, 'Senior Assistant', 11, 11, '-', '-'),
  createData(21, 'Sr.Scale Stenographer', 1, 1, '-', '-'),
  createData(22, 'Computer Operator', 2, 2, '-', '-'),
  createData(23, 'Steno Typist', 12, 12, '-', '-'),
  createData(24, 'Clerk', 17, 15, 2, '-'),
  createData(25, 'Junior Office Assistant', 28, 5, 23, '-'),
  createData(26, 'Driver', 7, 6, 1, '-'),
  createData(27, 'Patwari', 25, 6, 19, '-'),
  createData(28, 'Surveyer', 2, 2, '-', '-'),
  createData(29, 'Head Constable', 1, 1, 1, '-', '-'),
  createData(30, 'Constable',  3, '-', 3, '-'),
  createData(31, 'Process server', 3, '-', 3, '-'),
  createData(32, 'Peon', 26, 23, 3, '-'),
  createData(33, 'Chowkidar-cum-Sweeper',  5, 4, 1, '-'),
  createData(34, 'Chainman', 31, 25, 6, '-'),
  createData(35, 'Welder', 3, '-', 3, '-'),
  createData(36, 'Sweeper', 2, 2, '-', '-'),
];

export default function PostwiseSetup() {
  return (
    <TableContainer component={Paper} sx={{width: '90%', margin: '20px 10px 0px 70px'}}>
        <Typography variant='p' style={{margin: '20px'}}>
        Detail of  Sanctioned/Filled and Vacant Posts in teh Town & Country Planning Deparatment, Himachal Pradesh as on 31st March 2019:
        </Typography>
      <Table sx={{maxWidth: 900, margin: '20px 20px 20px 200px' }} aria-label="customized table">
        <TableHead style={{height: '20px'}}>
          <TableRow style={{background: '#1F4A7C', height: '20px'}}>
            <StyledTableCell>SL#</StyledTableCell>
            <StyledTableCell align="right">Name of Post</StyledTableCell>
            <StyledTableCell align="right">Sanctioned Posts</StyledTableCell>
            <StyledTableCell align="right">Filled</StyledTableCell>
            <StyledTableCell align="right">Vacant</StyledTableCell>
            <StyledTableCell align="right">Remarks</StyledTableCell>
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
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

