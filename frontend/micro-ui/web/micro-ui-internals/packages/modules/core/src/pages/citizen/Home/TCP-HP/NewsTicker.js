import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@mui/material';

const useStyles = makeStyles(theme => ({
  textContainer: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: 40, 
    marginTop: '10px', 
    backgroundColor: '#f0f0f0'
    
  },
  line1: {
    position: 'absolute',
    top: 0,
    whiteSpace: 'nowrap',
    animation: '$moveText 10s linear infinite',
    right: '10%',
    animationDelay: '0s',
  },
  line2: {
    position: 'absolute',
    top: 0,
    whiteSpace: 'nowrap',
    animation: '$moveText 10s linear infinite',
    // right: 'calc(100% + 10px)',
    right: '10%',
    animationDelay: '0s', // adjust to sync with line1
  },
  '@keyframes moveText': {
    '0%': {
      transform: 'translateX(100%)',
    },
    '100%': {
      transform: 'translateX(-200%)',
    },
  },
}));

function NewsTicker() {
  const classes = useStyles();

  return (
    <div className={classes.textContainer}>
      <div>
      <Typography variant="body1" className={classes.line2} style={{padding: '10px', color: '#1F4A7C', fontWeight: 'bold', fontSize: '15px'}}>For any queries regarding online services, kindly contact us at :</Typography>
      </div>
    </div>
  );
}

export default NewsTicker