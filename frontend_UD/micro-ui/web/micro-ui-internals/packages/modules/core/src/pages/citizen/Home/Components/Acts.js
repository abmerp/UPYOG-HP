import React from 'react';
import Header from '../Header';
import { Box, Typography, Card, CardContent, Grid, CardHeader } from '@mui/material';
import { Table } from 'react-bootstrap';
// import '../../App.css';
import { NavbarFooter } from './NavbarFooter';
import { BsFilePdf } from 'react-icons/bs';

function Acts() {
  return (
    <div>
    <Header />
    <Card style={{maxWidth: "100%", height: '490px', margin: '20px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}}>
      <CardHeader title='Acts'  style={{color:"orange"}}/>
      <CardContent>
      <Grid container spacing={1} style={{ display: 'flex', flexDirection: 'row', margin: '10px'}}>
        <table className='tableStyle'>
          <tr>
            <th>Sl#</th>
            <th>Subject</th>
            <th>Download</th>
            </tr>
            <tr>
            <td>1</td>
            <td>Himachal Pradesh Town and Country Planning Act</td>
            <td><BsFilePdf  color='#274472' size={25}  style={{marginLeft:"50px"}}/></td>
            </tr>
            <tr>
            <td>2</td>
            <td>HP Municipal Act, 1994</td>
            <td><BsFilePdf  color='#274472' size={25} style={{marginLeft:"50px"}}/></td>
            </tr>
            <tr>
            <td>3</td>
            <td>HP Municipal Corporation Act,1994</td>
            <td><BsFilePdf  color='#274472' size={25} style={{marginLeft:"50px"}}/></td>
            </tr>
        </table>
        </Grid>
         
     
     </CardContent>
   
    </Card>
    <NavbarFooter/>
    </div>
  );
}

export default Acts
