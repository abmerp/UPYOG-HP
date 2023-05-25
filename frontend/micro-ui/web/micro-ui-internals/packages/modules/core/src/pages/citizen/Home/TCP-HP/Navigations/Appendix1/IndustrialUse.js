import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function IndustrialUse() {
  return (
    <TableContainer component={Paper} style={{margin: '20px'}}>
      <Table sx={{ minWidth: 700 }} aria-label="industry table">
        <TableHead>
          <TableRow style={{background: '#1F4A7C', height: '20px'}}>
            <TableCell style={{color: 'white'}} rowspan={2}><strong>Sr. No.</strong></TableCell>
            <TableCell style={{color: 'white'}} rowspan={2}><strong>Type of Industry and Minimum Plot Area</strong></TableCell>
            <TableCell style={{color: 'white'}} colspan={4}><strong>Minimum Set Back in Metres</strong></TableCell>
            <TableCell style={{color: 'white'}} rowspan={2}><strong>Maximum FAR</strong></TableCell>
            <TableCell style={{color: 'white'}} rowspan={2}><strong>Maximum Height in Metres from Mean Sea Level upto 1000M</strong></TableCell>
            <TableCell style={{color: 'white'}} rowspan={2}><strong>Maximum Height in Metres from Mean Sea Level above 1000M</strong></TableCell>
          </TableRow>
          <TableRow style={{background: '#1F4A7C', height: '20px'}}>
            <TableCell style={{color: 'white'}}><strong>Front</strong></TableCell>
            <TableCell style={{color: 'white'}}><strong>Left</strong></TableCell>
            <TableCell style={{color: 'white'}}><strong>Right</strong></TableCell>
            <TableCell style={{color: 'white'}}><strong>Rear</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>1.</TableCell>
            <TableCell>Small Scale Industries 250 M<sup>2</sup> to 500 M<sup>2</sup></TableCell>
            <TableCell>3.00</TableCell>
            <TableCell>2.00</TableCell>
            <TableCell>2.00</TableCell>
            <TableCell>2.00</TableCell>
            <TableCell>1.75</TableCell>
            <TableCell>15.00</TableCell>
            <TableCell>12.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2.</TableCell>
            <TableCell>Service/Light scale Industries Above 500 M<sup>2</sup> to 1000 M<sup>2</sup></TableCell>
            <TableCell>5.00</TableCell>
            <TableCell>2.00</TableCell>
            <TableCell>2.00</TableCell>
            <TableCell>3.00</TableCell>
            <TableCell>1.50</TableCell>
            <TableCell>15.00</TableCell>
            <TableCell>12.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3.</TableCell>
            <TableCell>Medium scale Industries Above 1000 M<sup>2</sup> to 5000 M<sup>2</sup></TableCell>
            <TableCell>10.00</TableCell>
            <TableCell>5.00</TableCell>
            <TableCell>5.00</TableCell>
            <TableCell>5.00</TableCell>
            <TableCell>1.25</TableCell>
            <TableCell>20.00</TableCell>
            <TableCell>15.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>4.</TableCell>
            <TableCell>Large and Heavy Scale Industries Above 5000 M<sup>2</sup></TableCell>
            <TableCell>15.00</TableCell>
            <TableCell>7.50</TableCell>
            <TableCell>7.50</TableCell>
            <TableCell>7.50</TableCell>
            <TableCell>1.00</TableCell>
            <TableCell>20.00</TableCell>
            <TableCell>15.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default IndustrialUse
