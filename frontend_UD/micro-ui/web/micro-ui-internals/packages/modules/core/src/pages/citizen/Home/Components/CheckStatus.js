import React, { useState } from 'react';
import Header from '../Header';
import { Box, Typography, Card, CardContent, Grid, CardHeader, CardMedia, Radio, FormControl, FormControlLabel, RadioGroup, TextField, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import FaxIcon from '@mui/icons-material/Fax';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { NavbarFooter } from './NavbarFooter';
import { Label } from '@mui/icons-material';




function CheckStatus() {
    const [value, setValue] = React.useState('');
    const [helperText, setHelperText] = React.useState('Reference Number');
    const [refNumCheck, setRefNumCheck] = useState(true);
    const [mobNumCheck, setMobNumCheck] = useState(false);
    const [aadhNumCheck, setAadhNumCheck] = useState(false);
  
    const handleRadioButton = (event) => {
        event.preventDefault();
        if(event.target.value==="referencenumber"){
              setHelperText("Reference Number");
              setRefNumCheck(true);
              setAadhNumCheck(false);
              setMobNumCheck(false);
        }
        else if(event.target.value==="aadharnumber"){
            setHelperText("Aadhar Number");
            setRefNumCheck(false);
            setAadhNumCheck(true);
            setMobNumCheck(false);
        }
        else {
            setHelperText("Mobile Number");
            setRefNumCheck(false);
              setAadhNumCheck(false);
              setMobNumCheck(true);
        }
      };




  return (
    <div>
    <Header />
      <Card style={{maxWidth: "100%", height: 'auto', margin: '10px'}}>
      <CardContent>
      <Grid container spacing={1} style={{ display: 'flex', flexDirection: 'row', marginLeft: '200px'}} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
     
        <Card style={{width:"60%", height: '230px',backgroundColor:"#274472"}}>
          <CardContent style={{margin:"10px"}}>
           <h2 style={{color:"white"}}>KNOW YOUR APPLICATION STATUS</h2>
           <FormControl>
            <RadioGroup 
            sx={{
                color:"white",
                "&.Mui-checked":{
                    color:"white"
                }
            }}
              row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="referencenumber"
        onClick={handleRadioButton}>
             <FormControlLabel value="referencenumber" control={<Radio sx={{color:'white',
                "&.Mui-checked":{
                    color:"white"
                }}} checked={refNumCheck} />} label="Reference Number"/>
             <FormControlLabel value="mobilenumber" control={<Radio sx={{color:'white',
                "&.Mui-checked":{
                    color:"white"
                }}} checked={mobNumCheck} />} label="Mobile Number" />
             <FormControlLabel value="aadharnumber" control={<Radio sx={{color:'white',
                "&.Mui-checked":{
                    color:"white"
                }}} checked={aadhNumCheck}/>} label="Aadhar Number" />
            </RadioGroup>
           </FormControl>
         <div><label style={{color:"white",fontSize:"17px",margin:"20px 20px 20px 7px"}}>{helperText}</label><span style={{margin:"10px"}}>:</span><TextField style={{width:"300px",height:"20px",borderColor:"white"}}></TextField><Button sx={{ mt: 1, mr: 1 , margin:"10px"}} type="submit" variant="contained">Submit</Button></div>
            </CardContent>
            
          </Card>
        
      </Grid>
     </CardContent>
    </Card>
    <NavbarFooter/>
     </div>
  
  );
  }

export default CheckStatus;
