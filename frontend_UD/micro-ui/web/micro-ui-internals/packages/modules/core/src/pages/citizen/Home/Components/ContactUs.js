import React from 'react';
import { Box, Typography, Card, CardContent, Grid, CardHeader, CardMedia } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import FaxIcon from '@mui/icons-material/Fax';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Header from '../Header';
import { NavbarFooter } from './NavbarFooter';



function ContactUs() {

    const items = [
        {
          header:"Director Directorate of\nUrban Development",
          address:"Palika Bhavan, Talland,Shimla-171002",
          mail:"ud-hp@nic.in",
          phone:"+91-177-2626518",
          fax:"+91-177-2626518",
          mobile:"+91-8580672055(For Portal Related Query)",
        },
        {
            header:"Addl./Dy./Joint Director,\nDirectorate of Urban Development",
            address:"Palika Bhavan,Talland,Shimla-171002",
            mail:"",
            phone:"+91-177-2626516",
            fax:"+91-177-2626516",
            mobile:""

        },
        {
            header:"Superintendent Grade-I, \nDirectorate of Urban Development",
            address:"Palika Bhavan,Talland,Shimla-171002",
            mail:"",
            phone:"+91-177-2627130",
            fax:"",
            mobile:""
        }
      ];

  return (
    <div>
    <Header />
    <div>
      <Card style={{maxWidth: "100%", height: 'auto', margin: '10px'}}>
      <CardHeader title='Contact Us' style={{color:"#144398"}} />
      <CardContent>
      <Grid container spacing={1} style={{ display: 'flex', flexDirection: 'row', margin: '10px'}} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {items.map((item, index) => (
        <Card style={{maxWidth:"90%", height: 'auto', margin: '10px'}}>
            <CardHeader title={item.header} className='headerStyle' titleTypographyProps={{variant:'h6' }} ></CardHeader>
          <CardContent>
            <Grid item xs={8} sm={2} md={5} key={index} style={{ display: 'flex', flexDirection: 'column'}}>
              <Typography variant="body1" style={{ color: '#274472',height:"40px", fontWeight: 'bold', fontSize: '15px', width: '350px', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale',verticalAlign:"top"}}><HomeIcon style={{verticalAlign:"bottom"}}/>{item.address}</Typography>
              <Typography variant="body1" style={{ color: '#274472',height:"40px", fontWeight: 'bold', fontSize: '15px', width: '350px', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale',verticalAlign:"top"}}><MailOutlineIcon style={{verticalAlign:"bottom"}}/>{item.mail}</Typography>
              {/* <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '30px', marginTop: '20px' }}> */}
              <Typography variant="body1" style={{ color: '#274472',height:"40px", fontWeight: 'bold', fontSize: '15px', width: '350px', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale',verticalAlign:"top" }}><PhoneIcon style={{verticalAlign:"bottom"}} />{item.phone}</Typography>
              <Typography variant="body1" style={{color: '#274472',height:"40px", width: '300px', fontSize: '15px'}}><FaxIcon/>{item.fax}</Typography>
              {/* </div> */}
            </Grid>
            
            </CardContent>
            
          </Card>
          ))}
      </Grid>
     </CardContent>
     <CardMedia image='./Images/map.png' component="img" height="500" alt="image" width="150" style={{marginBottom:"80px"}}></CardMedia>
    </Card>
    </div>
    <NavbarFooter />
     </div>
  
  );
}

export default ContactUs
