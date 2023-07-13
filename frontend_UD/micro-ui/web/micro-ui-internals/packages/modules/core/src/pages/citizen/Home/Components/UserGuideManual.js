import React from 'react';
import Header from '../Header';
import { NavbarFooter } from './NavbarFooter';
import { Box, Typography, Card, CardContent, Grid, CardHeader } from '@mui/material';
import { BsFilePdf } from 'react-icons/bs';
// import '../../App.css'
import { CalendarMonth } from '@mui/icons-material';

function UserGuideManual() {
  return (
    <div>
      <Header />
      <Box sx={{ width: '100%' }}>
      <Card style={{maxWidth: "100%", height: 'auto', margin: '20px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}}>
      <CardHeader title='User Manual/Guide' style={{color:"orange"}}></CardHeader>
      <CardContent>
       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ display: 'flex', flexDirection: 'row', margin: '10px'}}>
        <Grid xs={6} >
        <div className='noti-sec'>
            <div className='pdf-sec'>
              <a href='https://obpsud.hp.gov.in/Download/UM_HPUD_CITIZEN_PORTAL.pdf'>
          <BsFilePdf size={80} color='#274472'/>
          </a>
          Download
          </div>
          <div className='data-sec'>
             <h5 style={{fontSize:"18px",fontWeight:"500",fontFamily:"Open Sans",lineHeight:"22px"}}>User Manual for Private Professionals/Citizens</h5>
             <span style={{color:"#9e9e9e",display:"inline"}}>
             <CalendarMonth style={{verticalAlign:"bottom"}}/>
            <span style={{verticalAlign:"top"}}>1-1-2018</span>  
            </span>
          </div>
          </div>
        </Grid>
        <Grid xs={6} >
        <div className='noti-sec'>
            <div className='pdf-sec'>
              <a href='https://obpsud.hp.gov.in/Download/UM_HPUD_OFFICER_PORTAL.pdf'>
          <BsFilePdf size={80} color='#274472'/>
          </a>
          Download
          </div>
          <div className='data-sec'>
             <h5 style={{fontSize:"18px",fontWeight:"500",fontFamily:"Open Sans",lineHeight:"22px"}}>User Manual for Officers</h5>
             <span style={{color:"#9e9e9e",display:"inline"}}>
             <CalendarMonth style={{verticalAlign:"bottom"}}/>
            <span style={{verticalAlign:"top"}}>1-1-2018</span>  
            </span>
          </div>
          </div>
        </Grid>
        
        </Grid>
     </CardContent>

    
    </Card>
    </Box>
    <NavbarFooter/>
    </div>
  );
}

export default UserGuideManual;