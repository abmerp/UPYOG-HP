import { Button, Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import Divider from '@mui/material/Divider';
import Checklist from './CheckList';
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


const FormLinks = () => {
  const classes = useStyles()
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
    <Card style={{maxWidth: 1500, margin: '20px', display: 'flex', flexDirection: 'row', background: 'linear-gradient(to right, #F5F5FF, #6666FF)'}}>
    <Card style={{maxWidth: 600, margin: '20px', boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'}}>
      <CardContent>
        <Typography variant="h6" style={{ backgroundColor: '#274472', color: "white", padding: "10px", fontSize: '15px', borderRadius: '5px' }}>
            Form Links
        </Typography>
        <Button variant="body1" component="p" className={classes.button} style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '20px'}}>
            Form of application for permission of Development of Land / Construction of Building. (Form-12) - Apply Now
        </Button>
        <Button variant="body1" component="p" className={classes.button} style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '20px', marginBottom: '10px'}}>
        Form of application for permission of sub-division / development of land. (Form - 11) - Apply Now
        </Button>
        <Divider></Divider>
        <Button variant="body1" component="p" className={classes.button} style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '20px'}}>
        Form Application for composition of offences under section 39-C read with sub-section (3) of section (Form - 26) - Apply Now
        </Button>
        <Button variant="body1" component="p" className={classes.button} style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '20px'}}>
         Registered citizen user may apply for NOC of water, Electricity and severage. - Apply Now
        </Button>
        <Divider style={{margin: '10px'}}></Divider>
        <Button variant="body1" component="p" className={classes.button} style={{ padding: '10px', width: '570px', height: '60px', borderRadius: '10px', fontSize: '14px', marginTop: '20px', display: 'flex', justifyContent: 'left'}}>
          Application for permission of Mobile Tower - Apply Now
        </Button>
        <Button variant="body1" component="p" className={classes.button} style={{ padding: '10px', width: '570px', height: '60px', borderRadius: '10px', fontSize: '14px', marginTop: '20px', display: 'flex', justifyContent: 'left'}}>
          Application for permission of NOC - Apply Now
        </Button>
      </CardContent>
    </Card>
   <Checklist/>
    </Card>
    </div>
  );
};

export default FormLinks;