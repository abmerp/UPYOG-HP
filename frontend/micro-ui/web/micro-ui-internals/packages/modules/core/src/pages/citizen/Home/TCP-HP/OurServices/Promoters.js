import {  Card, CardContent, Divider, makeStyles, Typography } from '@material-ui/core';
import { Button } from '@mui/material';
import React from 'react';

const useStyles = makeStyles({
  button: 
  {
    borderRadius: '10px', 
    color: '#154773',
    textDecoration: 'none',
    fontSize: '14px',
    display: 'block',
    margin: '10px', 
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  view: {
    padding: "6px 12px",
    border: "1px solid #122b40",
    color: "#fff",
    backgroundColor:" #012951",
    borderRadius: '4px'
  },
})


const Promoters = () => {
  const classes = useStyles()
  return (
    <Card style={{maxWidth: 350, margin: '10px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;'}}>
      <CardContent>
        <Typography variant="h6" style={{ backgroundColor: '#1F4A7C',color: "#fff", padding: "10px", fontSize: '15px' }}>
            Promoters
        </Typography>
        
        <a variant="body1" href='/digit-ui/citizen/profile' component="p" className={classes.button}>
        Apply for registration as promoter <strong>Form -34</strong>
        </a>
        <Divider />
        
        <a variant="body1" href='/digit-ui/citizen/profile' component="p" className={classes.button}>
        Apply for renewal of registration as promoter  <strong>Form - 38</strong>
        </a>
        <Divider />
        
        <a variant="body1" href='/digit-ui/citizen/profile' component="p" className={classes.button}>
        Apply for  permission of  sub-division/Development  of land    <strong>Form - 11</strong>
        </a>
        <Divider />
        
        <a variant="body1"  href='/digit-ui/citizen/obps/edcrscrutiny/apply/home' component="p"  className={classes.button}>
        Apply for permission of Development of land and Proposed/ existing building construction   <strong>Form - 12</strong>
        </a>
        <Divider />
    
        <a variant="body1" href='/digit-ui/citizen/profile' component="p" className={classes.button}>
        Apply for real estate license    <strong>Form - 47</strong>
        </a>
        <Divider />
        
        <a variant="body1" href='/digit-ui/citizen/profile' component="p" className={classes.button}>
        Apply for appeal   <strong>Form - 16</strong>
        </a>
        
        <Divider />
        <a variant="body1"  href='/digit-ui/citizen/profile' component="p" className={classes.button}>
        Apply for composition of offences  to extent  of  permissible limit of 10%  <strong>Form - 26</strong>
        </a>
        <Divider />
        <Button className={classes.view} style={{padding: '6px 12px', backgroundColor: '#012951', color: 'white', border: '1px solid #122b40', margin: '30px 20px 20px 200px'}}>Sign In</Button>
      </CardContent>
    </Card>
  );
};

export default Promoters