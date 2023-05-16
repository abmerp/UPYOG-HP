import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Paper } from '@mui/material';


const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    margin: '20px 50px 20px 50px'
  },
  slide: {
    width: '80%',
    height: '70px'
  },
});

const photos = [
  'https://tcp.hp.gov.in/Application/uploadDocuments/importantLink/link20230210_155939.jpeg',
  'https://tcp.hp.gov.in/Application/uploadDocuments/importantLink/link20200313_154929.jpg',
  'https://tcp.hp.gov.in/Application/uploadDocuments/importantLink/link20191207_143303.png',
  'https://tcp.hp.gov.in/Application/uploadDocuments/importantLink/link20180830_114904.jpg',
  'http://www.tcpo.gov.in/sites/default/files/newfile/make-india_1.png',
  'https://tcp.hp.gov.in/Application/uploadDocuments/importantLink/link20171004_160733.png',
  'https://tcp.hp.gov.in/Application/uploadDocuments/importantLink/link20171004_160810.png',
  'https://tcp.hp.gov.in/Application/uploadDocuments/importantLink/link20171004_160837.png',
  'https://tcp.hp.gov.in/Application/uploadDocuments/importantLink/link20171010_170436.jpg',
  'https://tcp.hp.gov.in/Application/uploadDocuments/importantLink/link20171004_160952.png',
  'https://tcp.hp.gov.in/Application/uploadDocuments/importantLink/link20171004_161018.png',
  'http://www.tcpo.gov.in/sites/default/files/newfile/skill.png',
];

const LinksSlideshow = () => {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((currentIndex + 4) % 12);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const renderPhotos = () => {
    const items = [];
    for (let i = currentIndex; i < currentIndex + 4; i++) {
      items.push(
        <Grid item xs={3} key={i}>
          <Paper elevation={3}>
            <img src={photos[i]} alt={`slide-${i}`} className={classes.slide} />
          </Paper>
        </Grid>
      );
    }
    return items;
  };

  return (
    <div style={{margin: '40px'}}>
        <h2 style={{marginLeft: '550px', fontSize: '30px', fontWeight: 'normal'}}>Important Links</h2>
        <Grid container spacing={1} className={classes.container}>
        {renderPhotos()}
        </Grid>
    </div>
    
  );
};

export default LinksSlideshow;
