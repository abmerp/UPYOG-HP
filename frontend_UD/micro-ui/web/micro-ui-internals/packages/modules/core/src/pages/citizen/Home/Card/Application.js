import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import {MdScreenshotMonitor} from 'react-icons/md'
import {IoMdReverseCamera} from 'react-icons/io'
import {BsFillClipboard2CheckFill} from 'react-icons/bs'
import {MdOutlineFactCheck} from 'react-icons/md'
import {BsFillCalendarXFill} from 'react-icons/bs'
import {HiOutlineClipboardDocumentCheck} from 'react-icons/hi2'

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
    width: '160px',
    margin: '20px', 
    height: '200px'

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
    title: 14020,
    status: 'Applied',
    logo:  <MdOutlineFactCheck style={{width: '80px', height: '100px', color: '#000033'}}/>,
    width: '80px'
  },
  {
    title: 1120,
    status: 'Under Process',
    logo: <MdScreenshotMonitor style={{width: '80px', height: '100px', color: '#000033'}} />,
    width: '75px'
  },
  {
    title: 2458,
    status: 'Reverted',
    logo: <IoMdReverseCamera style={{width: '80px', height: '100px', color: '#000033'}} />,
    width: '75px'
  },
  {
    title: '630',
    status: 'Provisional Approved',
    logo: <HiOutlineClipboardDocumentCheck style={{width: '80px', height: '100px', color: '#000033'}} />,
    width: '90px'
  },
  {
    title: '9746',
    status: 'Permission Granted',
    logo: <BsFillClipboard2CheckFill style={{width: '80px', height: '100px', color: '#000033'}} />,
    width: '95px'
  },
  {
    title: 66,
    status: 'Rejected',
    logo: <BsFillCalendarXFill style={{width: '80px', height: '100px', color: '#000033'}}  />,
    width: '85px'
  },
];

const ApplicationDetails = () => {
  const classes = useStyles();

  return (
    <div style={{background: 'linear-gradient(to right, #E5E5FF, #F5F5FF)', margin: '20px'}}>
      <Typography variant="h5" component="h1" className={classes.heading} style={{marginLeft: '300px', color: '#001A00', fontWeight: 'bold'}}>
      Application Status
      </Typography>
      <Grid container justifyContent="center">
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.title}>
            <Card className={classes.card} style={{width: '250px', height: '200px', margin: '10px', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', backgroundColor: '#4ca9d9', backgroundImage: 'linear-gradient(to right, #BCD2E8, #2E5984)'}}>
            {/* <CardMedia
                className={classes.media}
                title={card.title}
            >
             </CardMedia> */}
            <CardContent className={classes.transparentCard}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                <Typography gutterBottom variant="p" component="p" style={{color: '#1569C7', fontSize: '40px', padding: '10px', marginRight: '15px'}}>
                  {card.title}
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                 {card.logo}
                </div>
                </div>
                <Typography gutterBottom variant="p" component="p" style={{fontWeight: 'bold', color: '#003366', fontSize: '20px'}}>
                  {card.status}
                </Typography>
              </CardContent>
             
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ApplicationDetails;







