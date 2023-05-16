import { Card, CardContent, Typography, Modal,FormControlLabel, Radio, RadioGroup, Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import online from '../Images/online-service.png'
import officer from '../Images/computer-worker.png'
import fee from '../Images/fee.png'
import status from '../Images/project-status.png'
import { Link } from 'react-router-dom';
const OurServices = () => {
  const [open, setOpen] = useState(false);
  const [searchOption, setSearchOption] = useState('reference');
  const [placeholderText, setPlaceholderText] = useState('Enter reference number');
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSearchOptionChange = (event) => {
    setSearchOption(event.target.value);
    setPlaceholderText(
      event.target.value === 'reference'
        ? 'Enter reference number'
        : 'Enter mobile number'
    );
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: submit data to check application status
    console.log('Checking status...');
    handleClose();
  };
  return (
    <div>
    <Card style={{maxWidth: 900, height: '400px', margin: '20px', boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset' }}>
      <CardContent>
        <Typography variant="h5" style={{ backgroundColor: "#1F4A7C",  margin: '10px', color: "white", padding: "10px", fontSize: '15px', borderRadius: '5px' }}>
          Our Services
        </Typography>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
        <Link to='/digit-ui/citizen/applyOnline' style={{textDecoration: 'none'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
        <img src={online} alt="Registered private/professionals" style={{width: '80px', height: 'auto', padding: '10px', margin: '20px', marginLeft: '-60px',objectFit: 'cover'}} />
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px', fontWeight: 'bold', margin: '10px', marginTop: '50px', color: '#001A00'}}>
          Online Services
        </Typography>
        </div>
        </Link>
        <br></br>
        <Link to='/digit-ui/citizen/officerlogin' style={{textDecoration: 'none', cursor: 'pointer'}}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'row'}}>
        <img src={officer} alt="Online User Services" style={{width: '80px', height: 'auto', padding: '10px', margin: '20px'}} />
        <Typography variant="body1" component="p" style={{fontSize: '15px', fontWeight: 'bold', margin: '50px 15px 10px 10px', marginTop: '50px', color: '#001A00'}}>
          Officer Login
        </Typography>
        </div>
        </Link>
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'row'}}>
        <Link to='/digit-ui/citizen/feeCalculator' style={{textDecoration: 'none', cursor: 'pointer'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
        <img src={fee} alt="Fee Calculator" style={{width: '80px', height: '80px', padding: '5px', margin: '10px'}}/>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px', fontWeight: 'bold', margin: '30px 40px 10px 10px', color: '#001A00'}}>
          Fee Calculator
        </Typography>
        </div>
        </Link>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'row'}}>
        <img src={status} alt="Check/ Track application status" style={{width: '80px', height: '80px', padding: '5px', margin: '10px', cursor: 'pointer'}} onClick={handleOpen} />
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px', fontWeight: 'bold', margin: '30px 0px 10px 10px', color: '#001A00', cursor: 'pointer'}} onClick={handleOpen}>
          Check Application Status
        </Typography>
        </div>
        </div>
        <br></br>
        </div>
      </CardContent>
    </Card>
    <Modal open={open} onClose={handleClose}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '10px', outline: 'none' }}>
          <Typography variant="h5" component="h2" style={{ marginBottom: '20px' }}>
            Know Your Application Status
          </Typography>
          <div style={{display: 'flex', flexDirection: 'row'}}>
          <RadioGroup
            aria-label="search option"
            name="searchOption"
            value={searchOption}
            onChange={handleSearchOptionChange}
          >
            <FormControlLabel
              value="reference"
              control={<Radio />}
              label="Search by Reference No"
            />
            <FormControlLabel
              value="mobile"
              control={<Radio />}
              label="Search by Mobile No"
            />
          </RadioGroup>
          </div>
          <TextField
            label={placeholderText}
            placeholder={placeholderText}
            fullWidth
            margin="normal"
          />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default OurServices