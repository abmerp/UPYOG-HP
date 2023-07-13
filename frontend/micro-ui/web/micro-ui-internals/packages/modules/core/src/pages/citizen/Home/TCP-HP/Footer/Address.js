import React from 'react';
import { Typography } from '@material-ui/core';
import {ImLocation2} from 'react-icons/im'
import {IoIosCall} from 'react-icons/io'
import {AiOutlineMail} from 'react-icons/ai'

const OfficeAddress = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', color: 'white', marginLeft: '50px'}}>   
      <Typography variant="body1">
          <br></br>
          <span><ImLocation2 style={{marginRight: '10px'}}/></span>
          Town Country Planning Department
          <br></br>
          Ministry of Housing and Urban Affairs
          <br></br>
          Government of India,
          <br></br>
          SDA Complex Block Number, 32A
          <br></br>
          Shimla Bypass, Kasumpati, Shimla
          <br></br>
          Himachal Pradesh - 171009
      </Typography>
      <Typography variant="body1" style={{display: 'flex', flexDirection: 'row', marginRight: '140px', marginTop: '20px'}}>
          <span><IoIosCall style={{margin: '5px'}}/></span>
          +91-11-XXXXXXXX
          <br></br>
          +91-11-XXXXXXXX
          <br></br>
          +91-11-XXXXXXXX
      </Typography>
      <Typography variant="body1" style={{display: 'flex', flexDirection: 'row', marginRight: '200px', marginTop: '10px'}}>
        <span><AiOutlineMail style={{margin: '5px'}}/></span>
          xyz@nic.in
          <br></br>
          pqr@nic.in
      </Typography>
    </div>
  );
};

export default OfficeAddress;
