import React from 'react';
import { Box, Typography } from '@mui/material';

const Footers = () => {
  return (
    <Box sx={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', bgcolor: '#0e2948', color: 'white' }}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
        <Typography variant='body1' style={{margin: '20px'}}> 
          Home | Important Links | Disclaimer | Privacy policy | Terms & Conditions| FAQ | Feedback/Complaints | E-Samadhan
        </Typography>
        <div>
        {/* <BsFacebook />
        <AiFillTwitterCircle /> */}
        </div>
        </div>
        <Typography variant='body2' style={{margin: '25px'}}>
        © 2023-24 - All Rights Reserved - Department of Town & Country Planning, Govt of Himanchal Pardesh | Powered by- ABM Knowledgeware Pvt. ltd
        <br></br>
        <p style={{marginLeft: '300px'}}>Last Updated On: XX/XX/XXXX, XX:XX:XX</p>
        </Typography>
    </Box>
   
  );
};

export default Footers;
