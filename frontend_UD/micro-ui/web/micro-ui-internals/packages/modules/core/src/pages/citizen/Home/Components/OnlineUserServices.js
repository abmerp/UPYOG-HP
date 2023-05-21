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



function OnlineUserServices() {
        const [state, setState] = useState({
            raised1:false,
            shadow1:1,
            raised2:false,
            shadow2:1,
            raised3:false,
            shadow3:1,
        })
        

    const items = [
        {
          header:"Director Directorate of\nUrban Development",
          address:"Palika Bhavan, Talland,Shimla-171002",
          mail:"ud-hp@nic.in",
          phone:"+91-177-2626518",
          fax:"+91-177-2626518",
          mobile:"+91-8580672055(For Portal Related Query)",
        },
        {
            header:"Addl./Dy./Joint Director,\nDirectorate of Urban Development",
            address:"Palika Bhavan,Talland,Shimla-171002",
            mail:"",
            phone:"+91-177-2626516",
            fax:"+91-177-2626516",
            mobile:""

        },
        {
            header:"Superintendent Grade-I, \nDirectorate of Urban Development",
            address:"Palika Bhavan,Talland,Shimla-171002",
            mail:"",
            phone:"+91-177-2627130",
            fax:"",
            mobile:""
        }
      ];

  return (
    <div>
    <Header />
    <Box display="flex" flexDirection="row" marginBottom="70px">
      <Card style={{width: "400px", height: '370px', margin: '10px',backgroundColor:"#274472"}} 
    //   classes={{root: state.raised ? classes.cardHovered : ""}} 
    // className={ state.raised ? 'cardHovered':''}
    className='cardHovered'
      onMouseOver={()=>setState({ raised1: true, shadow1:6})} 
      onMouseOut={()=>setState({ raised1:false, shadow1:1 })} 
      raised={state.raised1} zdepth={state.shadow1}
    >
        
      <CardHeader title='Private Professional' titleTypographyProps={{variant:'h6'}} style={{color:"white", alignItems:'center',marginLeft:"40px"}} avatar={
        // <Avatar aria-label="Private Professional" style={{marginRight:"-10px"}} variant='string'>
       <AdminPanelSettingsIcon style={{height:"35px", width:"35px", color:'white'}} />
    //   </Avatar>
      } />
      <CardContent style={{alignItems:"center",marginTop:"-17px"}}>
      <Box sx={{display:"block", border:"1px solid white",borderRadius:"25px",height:"220px",width:"300px",margin:"0px 20px 0px 20px"}}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end',margin:"10px 10px 10px 30px" }}>
        <AccountCircle sx={{ color: 'white', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="User Name" variant="standard" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', margin:"10px 10px 10px 30px" }}>
        <PasswordSharp sx={{ color: 'white', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Password" variant="standard" />
        </Box>
        <Box sx={{ display: 'flex', alignItems:'normal',flexDirection:"column", margin:"10px 5px 10px 30px"}}>
        <Button variant="contained" size='small' style={{width:"100px",marginLeft:"60px"}}>Send OTP</Button>
      <TextField label="Enter OTP" style={{height:"8px",width:"90px",color:"white",marginLeft:"70px"}} variant='standard' />
       </Box>
      </Box> 
    <Button size="medium" style={{width:"150px",border:"1px solid blue",backgroundColor:"orange",color:"white",margin:"10px 0px 0px 100px"}}>Login</Button>
      </CardContent>
    </Card>
    <Card style={{width: "400px", height: '400px', margin: '10px', alignItems:'center'}} className='cardHovered1'
     onMouseOver={()=>setState({ raised2: true, shadow2:3})} 
     onMouseOut={()=>setState({ raised2:false, shadow2:1 })} 
     raised={state.raised2} zdepth={state.shadow2}
    >
      <CardHeader title='New User' titleTypographyProps={{variant:'h6'}} style={{color:"#144398",alignItems:"center", marginLeft:"80px"}} avatar={
        // <Avatar aria-label="Private Professional" style={{marginRight:"-10px"}}>
       <PersonAddIcon style={{height:"35px", width:"35px", color:'#144398'}} />
    //   </Avatar>
      }
      />
      <CardContent style={{alignItems:"center", marginTop:"-17px"}}>
      <Grid container spacing={1} style={{ display: 'flex', flexDirection: 'column', margin: '0px 10px 10px 0px'}} justifyContent='space-between' rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Typography variant='body2'>Form of application for permission of Development of Land / Construction of Building. <strong>(Form - 12)</strong></Typography>
        <Link style={{textDecoration:"none", color:"orange", textAlign:"center"}} to="https://obpsud.hp.gov.in/form12 ">Apply Now</Link>
        <Typography variant='body2'>Form of application for permission of sub-division / development of land. <strong>(Form - 11)</strong></Typography>
        <Link style={{textDecoration:"none", color:"orange", textAlign:"center"}} to="https://obpsud.hp.gov.in/form11  ">Apply Now</Link>
        <Typography variant='body2'>Form Application for composition of offences under section 39-C read with sub-section (3) of section <strong>(Form - 26)</strong></Typography>
        <Link style={{textDecoration:"none", color:"orange", textAlign:"center"}} to="https://obpsud.hp.gov.in/form26">Apply Now</Link>
        <Typography variant='body2'>Registered citizen user may apply for NOC of water, Electricity and severage.</Typography>
        <Link style={{textDecoration:"none", color:"orange", textAlign:"center"}}>Apply Now</Link>
      </Grid>
     </CardContent>
    </Card>
    <Card style={{width: "400px", height: '370px', margin: '10px',backgroundColor:"#274472"}} className='cardHovered2'
     onMouseOver={()=>setState({ raised3: true, shadow3:3})} 
     onMouseOut={()=>setState({ raised3:false, shadow3:1 })} 
     raised={state.raised3} zdepth={state.shadow3}
    >
      <CardHeader title='Citizen & Others' titleTypographyProps={{variant:'h6'}} style={{color:"white",marginLeft:"40px"}} avatar={
        // <Avatar>
       <HiUserGroup style={{height:"35px", width:"35px", color:'white'}} />
    //   </Avatar>
      } />
   
      <CardContent style={{alignItems:"center",marginTop:"-17px"}}>
      <Box sx={{display:"block", border:"1px solid white",borderRadius:"25px",height:"220px",width:"300px",margin:"10px 20px 10px 20px"}}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end',margin:"10px 10px 10px 20px" }}>
        <AccountCircle sx={{ color: 'white', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="User Name" variant="standard" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', margin:"10px 10px 10px 30px" }}>
        <PasswordSharp sx={{ color: 'white', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Password" variant="standard" />
      </Box>
      <Box sx={{ display: 'flex', alignItems:'normal',flexDirection:"column", margin:"10px 5px 10px 30px"}}>
      <Button variant="contained" size='small' style={{width:"100px",marginLeft:"60px"}}>Send OTP</Button>
      <TextField label="Enter OTP" style={{height:"8px",width:"90px",color:"white",marginLeft:"70px"}} variant='standard' />
       
     </Box>
      </Box> 
    <Button size="medium" style={{width:"150px",border:"1px solid blue",backgroundColor:"orange",color:"white",margin:"0px 0px 0px 100px"}}>Login</Button>
      </CardContent>
    </Card>
    </Box>
    <NavbarFooter/>
     </div>
  
  );
}

export default OnlineUserServices;
