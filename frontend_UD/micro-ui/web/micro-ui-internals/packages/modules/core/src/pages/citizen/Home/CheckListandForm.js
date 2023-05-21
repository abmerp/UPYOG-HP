import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {RiInboxArchiveLine} from 'react-icons/ri'
import ImportantLinks from './ImportantLinks';
import UserForm from './UserForm';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundImage: `url('https://obpsud.hp.gov.in/img/briefhimuda.jpg')`,
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover',  
  },
  card: {
    minWidth: 275,
    backgroundColor: '#3784d2',
  },
}));

function CheckListAndForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
         <div style={{marginLeft: '50px'}}>
            <ImportantLinks />
         </div>
        </Grid>
        <Grid item xs={12} sm={6}>
            <div style={{marginLeft: '60px', borderLeft: '1 px solid white', display: 'flex', flexDirection: 'row'}}>
                <RiInboxArchiveLine style={{width: '50px', height: '50px', margin: '10px', color: 'white'}}/>
              <Typography variant="h4" component="h2" style={{color: 'white', padding: '10px', borderBottom: '1px solid white'}}>
                Feedback / Complaint
              </Typography>
              </div>
             <UserForm/>
        </Grid>
      </Grid>
    </div>
  );
}

export default CheckListAndForm;
