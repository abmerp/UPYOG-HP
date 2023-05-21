import { Box, Typography, Divider } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box sx={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', bgcolor: '#f0f0f0' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Typography variant="h5"  sx={{ margin: '10px', fontSize: '15px' }}>Total Visitors: 232128</Typography>
          <Divider style={{ margin: '10px 0' }} />
          <Typography variant="h5" sx={{ margin: '10px', fontSize: '15px' }}>Powered by ABM Knowledgeware Ltd</Typography>
          <img src="https://obpsud.hp.gov.in/img/hpreralogo.png" alt="image5" style={{height: '50px', margin: '20px'}} />
        </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '20px', width: '100%'}}>
      <img src="https://obpsud.hp.gov.in/img/emblem.png" alt="image1" height='50px' style={{margin: '20px'}} />
      <img src="https://obpsud.hp.gov.in/img/moudlogo.png" alt="image2" height='50px' style={{margin: '20px'}} />
      <img src="https://obpsud.hp.gov.in/img/mhupalogo.png" alt="image3" height='50px' style={{margin: '20px'}} />
      <img src="https://obpsud.hp.gov.in/img/Namco.png" alt="image4" style={{height: '50px', margin: '20px'}} />
      </Box>
    </Box>
   
  );
};

export default Footer;
