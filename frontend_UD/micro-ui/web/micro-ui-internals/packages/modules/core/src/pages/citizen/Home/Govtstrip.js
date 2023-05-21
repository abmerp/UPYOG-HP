import { Box, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';


const useStyles = makeStyles(theme => ({
  textContainer: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: 40, 
    marginTop: '10px', 
    backgroundColor: '#f0f0f0'
    
  },
  line1: {
    position: 'absolute',
    top: 0,
    whiteSpace: 'nowrap',
    animation: '$moveText 10s linear infinite',
    right: '10%',
    animationDelay: '0s',
  },
  '@keyframes moveText': {
    '0%': {
      transform: 'translateX(100%)',
    },
    '100%': {
      transform: 'translateX(-200%)',
    },
  },
}));

const GovtStrip = () => {
  const classes = useStyles()
  return (
    <Box sx={{ height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', bgcolor: '#f0f0f0' }}>
       <img src="http://www.ud.hp.gov.in/sites/default/files/logo.png" alt="image1" style={{ width: '70px', height: '70px', marginLeft: '-250px', marginRight: '30px' }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography variant="h6" fontWeight="bold" sx={{ marginTop: '10px', fontSize: '20px', width: '450px' }} className='titlegov'>Urban Development Department</Typography>
        <Typography variant="h6" sx={{ marginTop: '12px', fontSize: '10px', fontStyle: "italic", width: '450px'}}>Govt of Himanchal Pradesh, India</Typography>
        <Typography variant="h6" className={classes.line1} sx={{marginTop: '120px', fontWeight: 'bold', fontSize: '12px', fontStyle: "italic", width: '450px'}}>e-Avedan Online Building Planning Permission in Urban local Bodies</Typography>
        </Box>
      <div style={{transform: 'translateX(180px)'}}>
      <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/logo1.png" alt="image2" style={{ width: '50px', height: '50px', marginLeft: '20px', marginRight: '30px' }} />
      <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/emblem.png" alt="image3" style={{ width: '50px', height: '50px', marginLeft: '20px', marginRight: '30px' }} />
      <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/G20-theme-and-logo_1.png" alt="image4" style={{ width: '50px', height: '50px', marginLeft: '20px', marginRight: '30px' }} />
      <img src='https://www.hsvphry.org.in/assets/img/150-years-Mahatma-Gandhi-Logo.png' alt='image5' style={{width: '50px', height: '50px', marginLeft: '20px', marginRight: '30px'}}/>
      </div>
    </Box>
  );
};

export default GovtStrip;
