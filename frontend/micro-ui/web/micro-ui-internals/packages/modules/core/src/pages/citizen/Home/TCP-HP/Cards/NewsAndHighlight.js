import React from 'react';
import {  Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import { Button } from '@mui/material';


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


const NewsAndHighlights = () => {
  const classes = useStyles()
  return (
    <Card style={{maxWidth: 350, margin: '10px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;'}}>
      <CardContent>
        <Typography variant="h6" style={{ backgroundColor: '#1F4A7C',color: "#fff", padding: "10px", fontSize: '15px' }}>
            What's New
        </Typography>
        
        <a variant="body1" href='/' component="p" className={classes.button}>
            Public Notice on Revision of Recruitment Rules for the post of Planning Assistant (re-designated as Planning Officer) in TCPO
        </a>
        
        
        <a variant="body1" href='/' component="p" className={classes.button}>
         Azadi ka Amrut Mahotsav
        </a>
        
        
        <a variant="body1" href='/' component="p" className={classes.button}>
            Public Procurement (Preference to Make in India) (PPP-MIII) Order 2017
        </a>
        
        
        <a variant="body1"  href='/' component="p"  className={classes.button}>
            Nodal Officer for Public grievances pertaining to COVID-19
        </a>
        
    
        <a variant="body1" href='/' component="p" className={classes.button}>
         Training Report on Vetting under AMRUT GIS Sub Scheme at Tamilnadu
        </a>
        
        
        <a variant="body1" href='/' component="p" className={classes.button}>
            Public Procurement (Preference to Make in India) (PPP-MIII) Order 2017
        </a>
        
        
        <a variant="body1"  href='/' component="p" className={classes.button}>
            Nodal Officer for Public grievances pertaining to COVID-19
        </a>
        <Button className={classes.view} style={{padding: '6px 12px', backgroundColor: '#012951', color: 'white', border: '1px solid #122b40', marginLeft: '200px'}}>View More</Button>
      </CardContent>
    </Card>
  );
};

export default NewsAndHighlights