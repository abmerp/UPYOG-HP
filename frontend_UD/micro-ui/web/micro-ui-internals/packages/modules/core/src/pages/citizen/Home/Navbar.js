import React, { useState } from 'react';
// import '../App.css';
//import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@material-ui/core';
//import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Button, Divider } from '@mui/material';
// import Home from './Components/Pages/Home';
// import { AboutUs } from './Pages/AboutUs';
import { Link, NavLink } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import Acts from './Pages/Acts';
import HomeIcon from '@mui/icons-material/Home';

const Navbar= () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorElsnp, setAnchorElsnp] = React.useState(null);
  const [anchorElswm, setAnchorElswm] = React.useState(null);
  const [anchorElmncacts, setAnchorElmncacts] = React.useState(null);
  const [anchorEltna, setAnchorEltna] = React.useState(null);
  const open = Boolean(anchorEl);
  const openAU = Boolean(anchorEl1);
  const opensnp = Boolean(anchorElsnp);
  const openswm = Boolean(anchorElswm);
  const openmncacts = Boolean(anchorElmncacts);
  const opentna = Boolean(anchorEltna);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickAboutUs = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleCloseAboutUs = () => {
    setAnchorEl1(null);
  };

  const handleClicksnp = (event) => {
    setAnchorElsnp(event.currentTarget);
  };

  const handleClosesnp = () => {
    setAnchorElsnp(null);
  };

  const handleClickswm = (event) => {
    setAnchorElswm(event.currentTarget);
  };

  const handleCloseswm = () => {
    setAnchorElswm(null);
  };

  const handleClickmncacts = (event) => {
    setAnchorElmncacts(event.currentTarget);

  };

  const handleClosemncacts = () => {
    setAnchorElmncacts(null);
  };

  const handleClicktna = (event) => {
    setAnchorEltna(event.currentTarget);
  };

  const handleClosetna = () => {
    setAnchorEltna(null);
  };

  


  return (
    <AppBar style={{alignItems:"center",height:"45px",backgroundColor:"#274472"}} position='static'>
      <Toolbar style={{minHeight:"45px"}}>
        {/* <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
          {/* <MenuIcon /> */}
        {/*</IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          getContentAnchorEl={null}
        >
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>About</MenuItem>
          <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Menu>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My App
        </Typography> */}
        <Button
        className='buttonStyle'
         id="home-button"
        //aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        //aria-expanded={open ? 'true' : undefined}
        // onClick={handleClick}
        component={Link}
        to="/"  
        
      >
        <HomeIcon style={{width:"30px",height:"30px"}}/>
      </Button>
        <Button
        className='buttonStyle'
        id="aboutus-button"
        // aria-controls={openAU ? 'about-us' : undefined}
        aria-haspopup="false"
        // aria-expanded={openAU ? 'true' : undefined}
        // onMouseOver={handleClickAboutUs}
        component={Link}
        to="/digit-ui/citizen/aboutus"        
      >
        About Us
      </Button>
      <Button
      component={Link}
      to='/digit-ui/citizen/notifications'
      className='buttonStyle'
        id="snp-button"
        aria-controls={opensnp ? 'schemes' : undefined}
        aria-haspopup="true"
        aria-expanded={opensnp ? 'true' : undefined}
        onMouseOver={handleClicksnp}
      >
        Notifications/Orders
      </Button>
      <Button
      className='buttonStyle'
        id="actnrules-button"
        aria-controls={open ? 'act' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseOver={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Act & Rules
      </Button>
    
      <Button
      //component={Link}
     // to="https://tcp.hp.gov.in/developmentPlan/8"
      href='https://tcp.hp.gov.in/developmentPlan/8'
      className='buttonStyle'
        id="swm-ngt-button"
        aria-controls={openswm ? 'solid' : undefined}
        aria-haspopup="true"
        aria-expanded={openswm ? 'true' : undefined}
        onMouseOver={handleClickswm}
      >
      Development Plan
      </Button>
      <Button
      component={Link}
      to='/digit-ui/citizen/faq'
      className='buttonStyle'
        id="mncacts-rules-button"
        aria-controls={openmncacts ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openmncacts ? 'true' : undefined}
        onClick={handleClickmncacts}
      >
        FAQ
      </Button>
      <Button
      component={Link}
      to='/digit-ui/citizen/userguidemanual'
      className='buttonStyle'
        id="tendnadvt-button"
        aria-controls={openmncacts ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={opentna ? 'true' : undefined}
        onClick={handleClicktna}
      >
      User Guide/Manual
      </Button>
      <Button
      className='buttonStyle'
        id="contactus-button"
        // aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        // aria-expanded={open ? 'true' : undefined}
        // onClick={handleClick}
        component={Link}
        to='/digit-ui/citizen/contactus'
      >
        Contact Us
      </Button>
    <Menu
       sx={{
        width: { sm: 400, md: 600 },
        "& .MuiInputBase-root": {
            height: 80,
            whiteSpace: 'nowrap',
           },
        "& .MuiList-root": {
          width:125,
          whiteSpace: 'nowrap',
          display:"Box",
          backgroundColor:"#274472",
          alignContent:"right"
          
      }
        
    }}
        id="act"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // onMouseOut={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{horizontal:'left', vertical:'bottom'}}
        transformOrigin={{vertical:'top',horizontal:'left'}}
       
      >
        <MenuItem style={{width:"80px",backgroundColor:"#274472"}}><NavLink  to="/digit-ui/citizen/acts" underline="none" style={{textDecoration:"none", color:'white'}}>Acts</NavLink></MenuItem>
        <Divider style={{color:"white"}}/>
        <MenuItem style={{width:"80px",backgroundColor:"#274472"}}><NavLink to="/digit-ui/citizen/rules" underline="none" style={{textDecoration:"none", color:'white'}}>Rules</NavLink></MenuItem>
       </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
