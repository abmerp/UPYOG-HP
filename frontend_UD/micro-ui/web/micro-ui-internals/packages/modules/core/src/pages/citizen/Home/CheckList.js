import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import {HiOutlineClipboardDocumentList} from 'react-icons/hi2'
import { Button, CardContent, Card } from '@material-ui/core';
import {AiOutlineDoubleRight} from 'react-icons/ai'


const useStyles = makeStyles({
  container: {
    padding: '10px',
    backgroundColor: 'transparent',
    borderRadius: '4px',
    color: 'blue', 
    
  },
  heading: {
    padding: '10px',
    borderBottom: '1px solid white'
  },
  paragraph: {
    padding: '10px',
    marginBottom: '8px',
    color: '#00001A',
    textDecoration: 'underline'
  },
});

const Checklist = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Card style={{maxWidth: 600, margin: '10px',background: 'linear-gradient(to right, #F5F5FF, #CCCCFF)', boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'}}>
      <CardContent>
        <div style={{display: 'flex', flexDirection: 'row'}}>
        <HiOutlineClipboardDocumentList style={{width: '50px', height: '50px'}}/>
        <Typography variant="h4" className={classes.heading}>
          Form / CheckList
        </Typography>
      </div>
      <Typography variant="body1" className={classes.paragraph}>
        <span style={{margin: '3px'}}><AiOutlineDoubleRight /></span> Form of application for permission of sub-division / development of land
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
      <span style={{margin: '3px'}}><AiOutlineDoubleRight /></span> Inspection Procedure And Checklist For Obtaining Final Noc
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
      <span style={{margin: '3px'}}><AiOutlineDoubleRight /></span> Inspection Procedure And Checklist Of Obtaining Construction Permit
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
      <span style={{margin: '3px'}}><AiOutlineDoubleRight /></span> Inspection Procedure And Checklist Of Obtaining Construction Permit
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
      <span style={{margin: '3px'}}><AiOutlineDoubleRight /></span> Form of application for permission of Development of Land / Construction of Building      
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
      <span style={{margin: '3px'}}><AiOutlineDoubleRight /></span> Form Application for composition of offences under section 39-C read with sub-section (3) of section
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
      <span style={{margin: '3px'}}><AiOutlineDoubleRight /></span> Procedure And Guidelines For Obtaning Planning Permission On Form 12
      </Typography>
      <Button style={{color: 'white', padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '10px', marginBottom: '30px', background: 'linear-gradient(to right, #659EC7, #151B54)', transform: 'translateX(400px)' }}>Read More +</Button>
      </CardContent>
      </Card>
    </div>
  );
};

export default Checklist;
