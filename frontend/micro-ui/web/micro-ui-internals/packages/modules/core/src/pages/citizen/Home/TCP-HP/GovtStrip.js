import React from 'react';
import { Box } from '@mui/material';

const GovtStrip = () => {
  return (
    <Box sx={{ height: 180, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', bgcolor: '#fff', color: 'black' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row'}}>
        <div>
          <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/logo1.png" alt="image2" style={{ width: '90px', height: '90px', margin: '20px 0px 20px -25%'}} />
        </div>
          <div style={{display: 'flex', flexDirection: 'row', color: '#1F4A7C', width: '605px', height: 'auto', border: '7px solid #1F4A7C', position:'relative', marginRight:'50px'}}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
          <h4 style={{fontWeight: '30px', margin: '10px 10px', width: '25%', position: 'absolute', top: '-20px', backgroundColor: 'white'}}>हिमाचल प्रदेश सरकार</h4>
          <h2 style={{color: '#154773', margin: '20px 10px 10px 10px'}}>नगर एवम् ग्राम योजना विभाग</h2>
          <h2 style={{fontSize: '25px', margin: '0px 0px 35px 10px'}}>Town & Country Planning Department </h2>
          <h6 style={{fontSize: '15.75px', color: '#154773',margin: '10px 10px 10px 310px', position: 'absolute', bottom:'-20px', backgroundColor: 'white'}}>Government of Himanchal Pradesh</h6>
          </div>
          <div>
            <img src='https://live.staticflickr.com/65535/52909341539_2d77079c38_m.jpg' alt='himanchal' style={{width: '120px', height: '100px', margin: '10px 10px 10px 10px'}}/>
          </div>
          </div>
        </Box>
      <div style={{margin: '10px', display: 'flex', flexDirection: 'row'}}>
      <img src='http://tcpo.gov.in/sites/default/files/amrit_mahotsav.jpg' alt='image5' style={{width: '120px', height: '120px', margin: '15px'}}/> 
      <img src="http://tcpo.gov.in/sites/default/files/TCPO/header-img/swatch-bharat.png" alt="image4" style={{ width: '120px',  margin: '10px 10px 50px 10px'}} /> 
      <img src='http://tcpo.gov.in/sites/default/files/TCPO/header-img/150-years.png' alt='image5' style={{width: '120px', margin: '20px 10px 30px 10px'}}/>  
      {/* <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/emblem.png" alt="image3" style={{ width: '60px', height: '60px', margin: '10px'}} /> */}
      </div>
    </Box>
  );
};

export default GovtStrip;