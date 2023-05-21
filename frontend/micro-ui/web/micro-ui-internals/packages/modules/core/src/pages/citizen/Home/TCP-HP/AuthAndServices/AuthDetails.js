import { Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react';

const items = [
  {
    image: "https://tcp.hp.gov.in/Application/uploadDocuments/offProfile/OffProfile20230215_151521.jpeg",
    text1: "Shri Sukhvinder Singh",
    text2: "Hon'ble Chief Minister",
  },
  {
    image: "https://secure.evidhan.nic.in/SecureFileStructure/Member/49.jpg",
    text1: "Shri Mukesh Agnihotri",
    text2: "Hon'ble Depuy Chief Minister"
  },
  {
    image: "http://www.ud.hp.gov.in/sites/default/files/inline-images/dev.png",
    text1: "Sh.Devesh Kumar, IAS",
    text2: "Pr.Secretary"
  },
  {
    image: "https://tcp.hp.gov.in/Application/uploadDocuments/offProfile/OffProfile20201123_150525.jpg",
    text1: "Sh.Kamal Kant Saroch, IAS",
    text2: "Director"
  },
];

const AuthDetails = () => {
  return (
    <div>
    <Card style={{maxWidth: 400, height: '400px', margin: '20px', boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'}}>
      <CardContent>
        <Grid container spacing={2} style={{ display: 'flex', flexDirection: 'column'}}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} style={{ display: 'flex', flexDirection: 'row'}}>
              <CardMedia
                component="img"
                image={item.image}
                title={`Item ${index + 1}`}
                style={{width: '52px'}}
              />
              <div style={{ margin: '10px 10px 10px 25px' }}>
              <Typography variant="body1" style={{ color: '#001A00', fontWeight: 'bold', fontSize: '15px', width: '300px', marginTop: '10px', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>{item.text1}</Typography>
              <Typography variant="body2" style={{color: '#001A00', width: '300px', fontSize: '12px'}}>{item.text2}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
    {/* <UsefulLinkCard /> */}
    </div>
  );
};

export default AuthDetails;