import React from 'react';
import Header from '../Header';
import { NavbarFooter } from './NavbarFooter';
import { Box, Typography, Card, CardContent, Grid, CardHeader } from '@mui/material';
import { BsFilePdf } from 'react-icons/bs';
// import '../../App.css'
import { CalendarMonth } from '@mui/icons-material';



const Notifications=()=> {
  return (
    <div>
      <Header />
      <Box sx={{ width: '100%' }}>
      <Card style={{maxWidth: "100%", height: 'auto', margin: '20px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}}>
      <CardHeader title='Notifications/Orders' style={{color:"orange"}}></CardHeader>
      <CardContent>
       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ display: 'flex', flexDirection: 'row', margin: '10px'}}>
        <Grid xs={6} >
        <div className='noti-sec'>
            <div className='pdf-sec'>
              <a href='https://obpsud.hp.gov.in/Download/Central%20Inspection%20Framework%20information.pdf'>
          <BsFilePdf size={80} color='#274472'/>
          </a>
          Download
          </div>
          <div className='data-sec'>
             <h5 style={{fontSize:"18px",fontWeight:"500",fontFamily:"Open Sans",lineHeight:"22px"}}>Central Inspection Framework information</h5>
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
              <a href='https://obpsud.hp.gov.in/Download/Clarification%20on%20%20Delegation%20of%20power%20under%20TCP%20Act%201977.pdf'>
          <BsFilePdf size={80} color='#274472'/>
          </a>
          Download
          </div>
          <div className='data-sec'>
             <h5 style={{fontSize:"18px",fontWeight:"500",fontFamily:"Open Sans",lineHeight:"22px"}}>Clarification from TCP Deptt. on Delegations of Powers</h5>
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
              <a href='https://obpsud.hp.gov.in/Download/Clarification%20on%20%20Delegation%20of%20power%20under%20TCP%20Act%201977.pdf'>
          <BsFilePdf size={80} color='#274472'/>
          </a>
          Download
          </div>
          <div className='data-sec'>
             <h5 style={{fontSize:"18px",fontWeight:"500",fontFamily:"Open Sans",lineHeight:"22px"}}>Clarification on  Delegation of power under TCP Act 1977</h5>
             <span style={{color:"#9e9e9e",display:"inline"}}>
             <CalendarMonth style={{verticalAlign:"bottom"}}/>
            <span style={{verticalAlign:"top"}}>1-1-2018</span>  
            </span>
          </div>
          </div>
        </Grid>
        <Grid CardContent xs={6} >
        <div className='noti-sec'>
            <div className='pdf-sec'>
              <a href='https://obpsud.hp.gov.in/Download/Clarification%20on%20%20Delegation%20of%20power%20under%20TCP%20Act%201977.pdf'>
          <BsFilePdf size={80} color='#274472'/>
          </a>
          Download
          </div>
          <div className='data-sec'>
             <h5 style={{fontSize:"18px",fontWeight:"500",fontFamily:"Open Sans",lineHeight:"22px"}}>Instruction on Strengthening of IT Infrastructure in the ULBs</h5>
             <span style={{color:"#9e9e9e",display:"inline"}}>
             <CalendarMonth style={{verticalAlign:"bottom"}}/>
            <span style={{verticalAlign:"top"}}>1-1-2018</span>  
            </span>
          </div>
          </div>
        </Grid>
        <Grid  CardContent xs={6} >
        <div className='noti-sec'>
            <div className='pdf-sec'>
              <a href='https://obpsud.hp.gov.in/Download/Instruction%20regarding%20Issuance%20of%20Trade%20Licences.pdf'>
          <BsFilePdf size={80} color='#274472'/>
          </a>
          Download
          </div>
          <div className='data-sec'>
             <h5 style={{fontSize:"18px",fontWeight:"500",fontFamily:"Open Sans",lineHeight:"22px"}}>Instruction regarding Issuance of Trade Licences</h5>
             <span style={{color:"#9e9e9e",display:"inline"}}>
             <CalendarMonth style={{verticalAlign:"bottom"}}/>
            <span style={{verticalAlign:"top"}}>1-1-2018</span>  
            </span>
          </div>
          </div>
        </Grid>
        <Grid  CardContent xs={6} >
        <div className='noti-sec'>
            <div className='pdf-sec'>
              <a href='https://obpsud.hp.gov.in/Download/Instruction%20regarding%20Publishing%20Information%20on%20website.pdf'>
          <BsFilePdf size={80} color='#274472'/>
          </a>
          Download
          </div>
          <div className='data-sec'>
             <h5 style={{fontSize:"18px",fontWeight:"500",fontFamily:"Open Sans",lineHeight:"22px"}}>Instruction regarding Publishing Information on website</h5>
             <span style={{color:"#9e9e9e",display:"inline"}}>
             <CalendarMonth style={{verticalAlign:"bottom"}}/>
            <span style={{verticalAlign:"top"}}>1-1-2018</span>  
            </span>
          </div>
          </div>
        </Grid>
        <Grid  CardContent xs={6} >
        <div className='noti-sec'>
            <div className='pdf-sec'>
              <a href='https://obpsud.hp.gov.in/Download/Instructions%20on%20adoption%20of%20the%20HP%20TCP%20Rules,%202014.pdf'>
          <BsFilePdf size={80} color='#274472'/>
          </a>
          Download
          </div>
          <div className='data-sec'>
             <h5 style={{fontSize:"18px",fontWeight:"500",fontFamily:"Open Sans",lineHeight:"22px"}}>Instructions on adoption of the HP TCP Rules, 2014</h5>
             <span style={{color:"#9e9e9e",display:"inline"}}>
             <CalendarMonth style={{verticalAlign:"bottom"}}/>
            <span style={{verticalAlign:"top"}}>1-1-2018</span>  
            </span>
          </div>
          </div>
        </Grid>
        <Grid  CardContent xs={6} >
        <div className='noti-sec'>
            <div className='pdf-sec'>
              <a href='https://obpsud.hp.gov.in/Download/Notification_Regarding_deligation_of_Powers_of_Director_TCP_to_34_ULBs.pdf'>
          <BsFilePdf size={80} color='#274472'/>
          </a>
          Download
          </div>
          <div className='data-sec'>
             <h5 style={{fontSize:"18px",fontWeight:"500",fontFamily:"Open Sans",lineHeight:"22px"}}>Notification Regarding deligation of  Powers  of  Director TCP to 34 ULBs</h5>
             <span style={{color:"#9e9e9e",display:"inline"}}>
             <CalendarMonth style={{verticalAlign:"bottom"}}/>
            <span style={{verticalAlign:"top"}}>1-1-2018</span>  
            </span>
          </div>
          </div>
        </Grid>
        <Grid  CardContent xs={6} >
        <div className='noti-sec'>
            <div className='pdf-sec'>
              <a href='https://obpsud.hp.gov.in/Download/Office%20Orders%20on%20inseption%20to%20be%20carried%20out.pdf'>
          <BsFilePdf size={80} color='#274472'/>
          </a>
          Download
          </div>
          <div className='data-sec'>
             <h5 style={{fontSize:"18px",fontWeight:"500",fontFamily:"Open Sans",lineHeight:"22px"}}>Office Orders on inseption to be carried out</h5>
             <span style={{color:"#9e9e9e",display:"inline"}}>
             <CalendarMonth style={{verticalAlign:"bottom"}}/>
            <span style={{verticalAlign:"top"}}>1-1-2018</span>  
            </span>
          </div>
          </div>
        </Grid>
        <Grid  CardContent xs={6} >
        <div className='noti-sec'>
            <div className='pdf-sec'>
              <a href='https://obpsud.hp.gov.in/Download/Risk%20Based%20Classification%20of%20Buildings.pdf'>
          <BsFilePdf size={80} color='#274472'/>
          </a>
          Download
          </div>
          <div className='data-sec'>
          <h5 style={{fontSize:"18px",fontWeight:"500",fontFamily:"Open Sans",lineHeight:"22px"}}>Risk Based Classification of Buildings</h5>
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

export default Notifications;