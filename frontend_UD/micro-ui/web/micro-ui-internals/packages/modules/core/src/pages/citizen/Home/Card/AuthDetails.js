import { Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react';

const items = [
  {
    image: "http://www.ud.hp.gov.in/sites/default/files/inline-images/CM_1.png",
    text1: "Shri Sukhvinder Singh",
    text2: "Hon'ble Chief Minister"
  },
  {
    image: "http://www.ud.hp.gov.in/sites/default/files/inline-images/photo_0.jpg",
    text1: "Urban Development Minister",
    text2: ""
  },
  {
    image: "http://www.ud.hp.gov.in/sites/default/files/inline-images/dev.png",
    text1: "Sh.Devesh Kumar, IAS",
    text2: "Pr.Secretary"
  },
  {
    image: "http://www.ud.hp.gov.in/sites/default/files/inline-images/download_0.png",
    text1: "Sh.Manmohan Sharma,IAS",
    text2: "Director"
  },
];

const AuthDetails = () => {
  return (
    <div>
    {/* <Card style={{maxWidth: 400, margin: '10px', boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'}}> */}
    <Card style={{maxWidth: 500, height: '490px', margin: '20px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}}>
    {/* <Card style={{maxWidth: 400, margin: '10px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'}}> */}

      <CardContent>
        <Grid container spacing={2} style={{ display: 'flex', flexDirection: 'column', margin: '10px'}}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} style={{ display: 'flex', flexDirection: 'row'}}>
              <CardMedia
                component="img"
                image={item.image}
                title={`Item ${index + 1}`}
                style={{borderRadius: '50%'}}
              />
              <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '30px', marginTop: '20px' }}>
              <Typography variant="body1" style={{ color: '#274472', fontWeight: 'bold', fontSize: '15px', width: '300px', marginTop: '10px', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>{item.text1}</Typography>
              <Typography variant="body2" style={{color: '#274472', width: '300px', fontSize: '12px'}}>{item.text2}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
    </div>
  );
};

export default AuthDetails;