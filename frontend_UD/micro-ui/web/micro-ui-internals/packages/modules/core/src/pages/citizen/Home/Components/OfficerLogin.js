import React from 'react';
import Header from '../Header';
import { Box, Typography, Card, CardContent, Grid, CardHeader, CardMedia, Avatar, TextField, Button, ButtonBase } from '@mui/material';
import { NavbarFooter } from './NavbarFooter';
import { AccountCircle, Block, Password, PasswordSharp } from '@mui/icons-material';
import { HiUserCircle, HiUserGroup, HiUser } from 'react-icons/hi2';
import { useState } from 'react';
// import '../../App.css'
import { Link } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';



function OfficerLogin() {
  return (
    <div>
    <div>
    {/* <Header /> */}
    <Card style={{backgroundColor:"#344A58",height:"600px"}} alignItems='center'>
    <div style={{alignItems:"center",margin:"auto",width:"200px"}}>
        <img style={{width:"100px",height:"100px",marginLeft:"25px",marginTop:"10px"}} src='https://obpsud.hp.gov.in/Application/img/logoHP.png'/>
        </div>
        <div style={{textAlign:"center",margin:"auto"}}>
          <h1 style={{margin:"0px 40px 0px 0px",fontWeight:"normal",fontSize:"22px",lineHeight:"1.1",color:"white"}}>Urban Development Department</h1>
          <h2 style={{margin:"7px 40px 20px 0px",fontWeight:"normal",fontSize:"18px",lineHeight:"1.1",color:"white"}}>Government of Himachal Pradesh</h2>
        </div>
    <Box display="flex" flexDirection="row">
    
      <Card style={{width: "400px", height: '370px', margin: '10px 10px 10px 430px',backgroundColor:"#274472"}} 
    //   classes={{root: state.raised ? classes.cardHovered : ""}} 
    // className={ state.raised ? 'cardHovered':''}
   
    >
       
  <CardHeader title='SIGN IN' titleTypographyProps={{variant:'h6'}} style={{color:"white", alignItems:'center',marginLeft:"45px"}} />
      <CardContent style={{alignItems:"center",marginTop:"-17px"}}>
      <Box sx={{display:"block", border:"1px solid white",borderRadius:"25px",height:"210px",width:"300px",margin:"0px 20px 0px 20px"}}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end',margin:"10px 10px 10px 30px" }}>
        <AccountCircle sx={{ color: 'white', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="User Name" variant="standard" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', margin:"10px 10px 10px 30px" }}>
        <PasswordSharp sx={{ color: 'white', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Password" variant="standard" />
        </Box>
        <Box sx={{ display: 'flex', alignItems:'normal',flexDirection:"column", margin:"10px 5px 10px 30px"}}>
       <Button variant="contained" size='small' style={{width:"100px",marginLeft:"65px"}}>Send OTP</Button>
       <TextField label="Enter OTP" style={{height:"8px",width:"90px",color:"white",marginLeft:"70px"}} variant='standard' />
     </Box>
      </Box> 
    <Button size="medium" style={{width:"150px",border:"1px solid blue",backgroundColor:"orange",color:"white",margin:"10px 0px 0px 100px"}}>Login</Button>
      </CardContent>
    </Card>

    </Box>
    </Card>
    </div>
{/* <NavbarFooter/> */}
     </div>
  
  );
}

export default OfficerLogin;
