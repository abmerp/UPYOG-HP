import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

function Strip() {
  return (
    <AppBar position="static" style={{backgroundColor:'#274472', height: '36px'}}>
      <Toolbar>
       <Typography variant="h6" component="div" style={{marginBottom: '24px', fontSize: '14px',whiteSpace:"nowrap"}}>
        हिमाचल प्रदेश सरकार
        </Typography>
        <Typography variant="h6" component="div" style={{marginBottom: '24px', marginLeft: '10px', marginRight: '10px', fontSize: '14px'}}>
        |
        </Typography>
        <Typography variant="h6" component="div" style={{marginBottom: '24px', marginRight: '400px', fontSize: '14px',whiteSpace:"nowrap"}}>
        Government of Himanchal Pradesh 
        </Typography>
        <img src='https://www.hsvphry.org.in/assets/img/font-small.png' alt='decrease' style={{marginBottom: '25px',marginRight: '15px', width: '22px', height: '22px'}}/>
        <img src='https://www.hsvphry.org.in/assets/img/font-small.png' alt='normal' style={{marginBottom: '25px', marginRight: '15px', width: '22px', height: '22px'}}/>
        <img src='https://www.hsvphry.org.in/assets/img/font-normal-size.png' alt='increase' style={{marginBottom: '25px',marginRight: '15px', width: '22px', height: '22px'}}/>
        <img src='https://www.hsvphry.org.in/assets/img/font-white.png' alt='dark' style={{marginBottom: '25px', marginLeft: '25px', marginRight: '15px', width: '22px', height: '22px'}}/>
        <img src='https://www.hsvphry.org.in/assets/img/font-black.png' alt='default' style={{marginBottom: '25px', marginRight: '10px', width: '22px', height: '22px'}}/>
        <Typography variant="h6" component="div" style={{marginBottom: '25px'}}>
          हिंदी 
        </Typography>
        <input type='text' placeholder='Search here...' style={{marginBottom: '25px', marginLeft: '20px'}}/>
        
      </Toolbar>
    </AppBar>
  );
}

export default Strip