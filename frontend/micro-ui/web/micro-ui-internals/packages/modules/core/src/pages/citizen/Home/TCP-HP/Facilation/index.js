import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import {AiOutlineDoubleRight} from 'react-icons/ai'
import { AiOutlineDoubleLeft } from 'react-icons/ai';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '30px',
        backgroundImage: `url('https://tcp.hp.gov.in/img/bg.jpg')`,
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover',  
      },
  heading: {
    marginLeft: '100px'
  },
  card: {
    width: '180px',
    margin: '10px',
    height: '220px'

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  transparentCard: {
    
  },
}));

const cards = [
  {
    title: 'Notified Planning/Special Area',
    logo: <img src='https://live.staticflickr.com/65535/52909644598_eb2a41fa3b_m.jpg' alt='image1' style={{width: '100px', height: '100px', marginTop: '20px'}}/>
  },
  // {
  //   title: 'RTI',
  //   logo: 'https://tcp.hp.gov.in/img/registration.png',
  //   width: '75px'
  // },
  {
    title: 'Directory of Reg. Professionals',
    logo: <img src='https://live.staticflickr.com/65535/52908615252_f771955e60_m.jpg' alt='image2' style={{width: '100px', height: '100px', marginTop: '20px'}}/>
  },
  {
    title: 'Download Form',
    logo: <img src='https://live.staticflickr.com/65535/52909341114_802fe94f83_m.jpg' alt='image3' style={{width: '100px', height: '100px', marginTop: '20px'}}/>

  },
  {
    title: 'Public Service Guarantee ACT',
    logo: <img src='https://live.staticflickr.com/65535/52909577000_a721b63e6a_m.jpg' alt='image4' style={{width: '100px', height: '100px', marginTop: '20px'}}/>
  },
  {
    title: 'License and Essentiality Certifiate',
    logo: <img src='https://live.staticflickr.com/65535/52908615227_83e4e657c3_m.jpg' alt='image5' style={{width: '100px', height: '100px', marginTop: '20px'}}/>
  },
  {
    title: 'Planing Permission Cases',
    logo: <img src='https://live.staticflickr.com/65535/52908615297_481fa695db_m.jpg' alt='image6' style={{width: '100px', height: '100px', marginTop: '20px'}}/>
  },
  {
    title: 'Instructions/Orders',
    logo: <img src='https://live.staticflickr.com/65535/52909644403_5a4537d0e5_m.jpg' alt='image7' style={{width: '100px', height: '100px', marginTop: '20px'}}/>
  },
  {
    title: 'Area Locator',
    logo: <img src='https://live.staticflickr.com/65535/52909644368_64f6dfbd30_m.jpg' alt='image8' style={{width: '100px', height: '100px', marginTop: '20px'}}/>
  },
  {
    title: 'Unauthorised constructions complainants',
    logo: <img src='https://live.staticflickr.com/65535/52909341679_1e186a63f7_m.jpg' alt='image9' style={{width: '100px', height: '100px', marginTop: '20px'}}/>
  },
];

const Facilation = () => {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleCards = cards.slice(currentIndex, currentIndex + 5).length < 6 ? cards.slice(currentIndex, currentIndex + 5) : cards.slice(currentIndex + 5)

  return (
    <div style={{}}>
      <Button onClick={handlePrevClick} style={{transform: 'translateY(180px)'}}><AiOutlineDoubleLeft style={{width: '30px', height: '30px', color: '#FFFFFF', padding: '10px',borderRadius: '50%', backgroundColor: '#1F4A7C'}} /></Button>
      <Typography variant="h4" component="h1" className={classes.heading} style={{display:'flex', justifyContent: 'center', color: '#1F4A7C', fontWeight: 'bold'}}>
        Citizen Facilitation
      </Typography>
      <Grid container justifyContent="center">
        {visibleCards.map((card) => (
          <Grid item xs={12} sm={6} md={2} key={card.title}>
            <Card className={classes.card} style={{background: 'linear-gradient(to bottom, #FFFFFF, #CCCCFF)'}}>
            <CardContent className={classes.transparentCard}>
                <Typography gutterBottom variant="p" component="p" style={{fontSize: '13px', color: '#00004D',fontWeight: 'bold'}}>
                  {card.title}
                </Typography>
              </CardContent>
              {/* <CardMedia
                className={classes.media}
                image={card.logo}
                title={card.title}
                style={{width: `${card.width}`,  marginLeft: '15px'}}
              /> */}
              <div style={{ display: 'flex', justifyContent: 'center'}}>
                 {card.logo}
                </div>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button onClick={handleNextClick} style={{transform: 'translateX(1180px) translateY(-150px)'}}><AiOutlineDoubleRight style={{width: '30px', height: '30px', color: '#FFFFFF',padding: '10px',borderRadius: '50%', backgroundColor: '#1F4A7C'}} /></Button>
    </div>
  );
};

export default Facilation;







