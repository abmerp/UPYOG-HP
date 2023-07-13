import React from 'react';
import { Card, CardContent, Typography, Grid, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const cards = [
  {
    title: 'Application for permission of Sub-division/Develoment of land - Form11',
    inbox: 'inbox',
    apply: 'apply',
    applied: 'Applied: 140',
    Approve: 'Approve: 30',
    Rejected: 'Rejected: 12',
    image: 'https://live.staticflickr.com/65535/52918330942_e84025ff6b_m.jpg',
    link1: '/digit-ui/citizen/services/form11',
    link2: '/digit-ui/citizen/obps/bpa/inbox'
  },
  {
    title: 'Application for building plan Permission - Form12',
    inbox: 'inbox',
    apply: 'apply',
    applied: 'Applied: 143',
    Approve: 'Approve: 40',
    Rejected: 'Rejected: 22',
    image: 'https://live.staticflickr.com/65535/52919069089_4f9b54e131_m.jpg',
    link1: '/digit-ui/citizen/obps/edcrscrutiny/apply/home',
    link2: '/digit-ui/citizen/obps/bpa/inbox'
  },
  {
    title: 'Application for composition of offences - Form26',
    inbox: 'inbox',
    apply: 'apply',
    applied: 'Applied: 196',
    Approve: 'Approve: 50',
    Rejected: 'Rejected: 2',
    image: 'https://live.staticflickr.com/65535/52919298260_7d4f971a64_m.jpg',
    link1: '/digit-ui/citizen/services/form26',
    link2: '/digit-ui/citizen/obps/bpa/inbox'
  },
  {
    title: 'Application for Real Estate Project - Form47',
    inbox: 'inbox',
    apply: 'apply',
    applied: 'Applied: 218',
    Approve: 'Approve: 20',
    Rejected: 'Rejected: 42',
    image: 'https://live.staticflickr.com/65535/52919069129_39ee000a4a_m.jpg',
    link1: '/digit-ui/citizen/services/form34',
    link2: '/digit-ui/citizen/obps/bpa/inbox'
  },
  {
    title: 'Application for Change of Land Use',
    inbox: 'inbox',
    apply: 'apply',
    applied: 'Applied: 76',
    Approve: 'Approve: 10',
    Rejected: 'Rejected: 12',
    image: 'https://live.staticflickr.com/65535/52919371468_12b6c2f069_m.jpg',
    link1: '/digit-ui/citizen/services/form34',
    link2: '/digit-ui/citizen/obps/bpa/inbox'
  },
  {
    title: 'Application for permission of mobile tower',
    inbox: 'inbox',
    apply: 'apply',
    applied: 'Applied: 96',
    Approve: 'Approve: 17',
    Rejected: 'Rejected: 32',
    image: 'https://live.staticflickr.com/65535/52919069099_3e46737a47_m.jpg',
    link1: '/digit-ui/citizen/services/form11',
    link2: '/digit-ui/citizen/obps/bpa/inbox'
  }
];

function CardGroup() {
  return (
    <Grid container>
    <Grid item xs={12} md={2} sx={{ backgroundColor: '#1F4A7C', minHeight: '100vh' , marginTop: '10px'}}>
      <Typography variant="h6" sx={{ color: '#fff', padding: '20px' }}>Services <span><img src='https://live.staticflickr.com/65535/52919070339_14b9b713b3_m.jpg' alt='drop-down' style={{width: '18px', height: '18px', color: 'blue'}}/></span></Typography>
      <Typography variant="h6" sx={{ color: '#fff', padding: '20px' }}>Reports <span><img src='https://live.staticflickr.com/65535/52919070339_14b9b713b3_m.jpg' alt='drop-down' style={{width: '18px', height: '18px', color: '#fff'}}/></span></Typography>
    </Grid>
    <Grid item xs={12} md={10}>
    <Card sx={{ backgroundColor: '#1f4a7c', margin: '20px' }}>
    <CardContent>
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, width: '100%', height: '100%', margin: '10px', borderRadius:'10px',backgroundColor:'#F5F5FF', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}>
              <CardContent>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <CardMedia
                  component="img"
                  image={card.image}
                  alt={card.title}
                  sx={{ height: '100px', width: '100px', margin: '10px' }}
                />
                <Typography variant="p" component="div" style={{color: '#000033', fontSize: '16px', fontWeight: 'bold', margin: '15px' }}>
                  {card.title} 
                </Typography>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '10px'}}>
                <Button style={{ backgroundColor: '#1F4A7C', color: 'white', width: '60px', height: '30px' }}>
                <Link to={card.link2} style={{color: 'white'}}>
                 {card.inbox}
                </Link>
                </Button>
                <Button style={{ backgroundColor: '#1F4A7C', color: 'white', width: '60px', height: '30px' }}>
                <Link to={card.link1} style={{color: 'white'}}>
                 {card.apply}
                </Link>
                </Button>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '10px'}}>
                <Typography sx={{ mb: 1.5, marginTop: '20px 10px -10px 10px' }} color="text.secondary">
                  {card.applied} <span><img src='https://live.staticflickr.com/65535/52919069164_1ec479a0a5_m.jpg' alt='check' style={{width: '10px', height: '10px'}}/></span>
                </Typography>
                <Typography variant="body2" sx={{ mb: 1.5, marginTop: '20px 10px -10px 10px', fontWeight: 'bold' }}>
                  {card.Approve} <span><img src='https://live.staticflickr.com/65535/52918331032_08b7107514_m.jpg' alt='list' style={{width: '10px', height: '10px'}}/></span>
                </Typography>
                <Typography variant="body2">
                  {card.Rejected} <span><img src='https://live.staticflickr.com/65535/52919069094_d95886b736_m.jpg' alt='remove' style={{width: '10px', height: '10px'}}/></span>
                </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </CardContent>
  </Card>
  </Grid>
  </Grid>
  );
}

export default CardGroup;
