import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import {BsFillVolumeUpFill} from 'react-icons/bs'
import {DiAndroid} from 'react-icons/di'
import {AiFillWindows} from 'react-icons/ai'
import {BsApple} from 'react-icons/bs'
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
  iconStyle: {
    width: '25px', 
    height: '25px', 
    borderRadius: '50%', 
    border: '2px solid #1F4A7C' , 
    color: '#1F4A7C',
    margin: '5px'
  },
});

function Strip() {
  const classes = useStyles()
  return (
    <AppBar position="static" style={{backgroundColor:'#fbfbfb', height: '36px', color: 'black', marginTop: '-75px'}}>
      <Toolbar>
        <div style={{display: 'flex', flexDirection: 'row', marginRight: '5%'}}>
          <BsFillVolumeUpFill className={classes.iconStyle}/>
          <DiAndroid className={classes.iconStyle}/>
          <AiFillWindows className={classes.iconStyle}/>
          <BsApple className={classes.iconStyle}/>
          <Typography variant='p' style={{width: '200px', margin: '10px'}}>e-service User Guide</Typography>
        <Button style={{width: '130px', height: '35px', margin: '0px 10px 30px 10px', backgroundColor: '#207CBD', color: 'white'}}>E-Map Login</Button>
        </div>
        <Typography variant='h6' component='div' style={{fontSize: '14px', margin: '0px 20px 25px 20px'}}>Skip to main content</Typography>
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



