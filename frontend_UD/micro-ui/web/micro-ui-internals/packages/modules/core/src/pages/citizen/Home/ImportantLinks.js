import { Button, Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import Divider from '@mui/material/Divider';
import React from 'react';


const useStyles = makeStyles({
  button: 
  {
    padding: '10px',
    borderRadius: '10px',
    fontSize: '12px',
    backgroundColor: '#4ca9d9',
    backgroundImage: 'linear-gradient(to right, #BCD2E8, #2E5984)',
    transition: 'background-color: .5s ease'
  },
})


const ImportantLinks = () => {
  const classes = useStyles()
  return (
    <Card style={{width: '500px', height: '600px', margin: '10px', background: 'linear-gradient(to right, #E5E5FF, #CCCCFF)', boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;'}}>
      <CardContent>
        <Typography variant="h6" style={{ backgroundColor: '#274472', width: '400px', margin: '10px',color: "white", padding: "10px", fontSize: '15px', borderRadius: '5px' }}>
            Important Websites/Links
        </Typography>
        <Button variant="body1" component="p" className={classes.button} style={{ borderRadius: '10px', fontSize: '14px', margin: '10px'}}>
        <img src="https://obpsud.hp.gov.in/img/tcp_logo.png" alt="tcp.hp.gov.in" style={{width: '400px', height: '60px'}}/>
        </Button>
        <Button variant="body1" component="p" className={classes.button} style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', margin: '10px'}}>
        <img src="	https://obpsud.hp.gov.in/img/hmpg.png" alt="tcpomud.gov.in" style={{width: '400px', height: '60px'}} />
        </Button>
        <Divider></Divider>
        <Button variant="body1" component="p" className={classes.button} style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', margin: '10px'}}>
        <img src="https://obpsud.hp.gov.in/img/noc.jpg" alt="nmanoc" style={{width: '400px',height: '60px'}} />
        </Button>
        <Button variant="body1" component="p" className={classes.button} style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', margin: '10px'}}>
        <img src="https://obpsud.hp.gov.in/img/tcp_logo.png" alt="tcp.hp.gov.in" style={{width: '400px', height: '60px'}}/>
        </Button>
        <Button variant="body1" component="p" className={classes.button} style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', margin: '10px'}}>
        <img src="https://obpsud.hp.gov.in/img/noc.jpg" alt="nmanoc" style={{width: '400px',height: '60px'}} />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ImportantLinks;