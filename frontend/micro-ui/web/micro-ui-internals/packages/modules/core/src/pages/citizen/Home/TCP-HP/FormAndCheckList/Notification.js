import React from 'react';
import { Card, CardContent, Typography, List, ListItem, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Divider } from '@material-ui/core';
import {IoMdNotifications} from 'react-icons/io'

const useStyles = makeStyles({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    margin: '10px',
    height: '260px',
    color: 'white',
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0
  }
});

const Notification = () => {
  const classes = useStyles();

  const handleReadMoreClick = () => {
    // handle read more click event
  }

  return (
    <div>
    <Card className={classes.cardContainer} style={{boxShadow: 'rgba(240, 240, 240, 1) 0px 0px 0px 10px'}}>
      <CardContent>
        <div style={{display: 'flex', flexDirection: 'row'}}>
        <IoMdNotifications style={{width: '40px', height: '40px', color: '#154773'}}/>
        <Typography variant="h5" component="h2" gutterBottom style={{fontSize: '22px', color: '#000066', fontWeight: 'bold'}}>
          Notifications/Orders
        </Typography>
        </div>
        <List className={classes.list}>
          <ListItem>
          <a href="https://tcp.hp.gov.in/Application/uploadDocuments/notification/Notice20201210_132526.pdf" target="_blanck" style={{textDecoration: 'none', fontSize: '15px', color: '#207CBD', fontWeight: 'bold'}} class="screenReader" title="Circular Mandating Online Submission Of Applications" tabindex="91">Circular Mandating Online Submission Of ...</a>
          </ListItem>
          <Divider />
          <ListItem>
          <a href="https://tcp.hp.gov.in/Application/uploadDocuments/notification/Notice20190524_122513.pdf" target="_blanck" style={{textDecoration: 'none', fontSize: '15px', color: '#207CBD', fontWeight: 'bold'}} class="screenReader" title="Clarification Regarding Mis - Interpreting Of Basements" tabindex="92">Clarification Regarding Mis - Interpreting ...</a>
          </ListItem>
          <Divider />
          <ListItem>
          <a href="https://tcp.hp.gov.in/Application/uploadDocuments/notification/Notice20160928_174624.pdf" target="_blanck" style={{textDecoration: 'none', fontSize: '15px', color: '#207CBD', fontWeight: 'bold'}} class="screenReader" title="Notice For Publication Of Proposed Amendment(s) In Development Plans." tabindex="93">Notice For Publication Of Proposed ...</a>
          </ListItem>
          <Divider />
          <ListItem>
          <a href="https://tcp.hp.gov.in/Application/uploadDocuments/notification/Notice20160928_174203.pdf" target="_blanck" style={{textDecoration: 'none', fontSize: '15px', color: '#207CBD', fontWeight: 'bold'}} class="screenReader" title="Amendment In Idp Shimla Notification Dated 28/06/2016." tabindex="94">Amendment In Idp Shimla Notification Dated ...</a>
          </ListItem>
          <Divider />
          <ListItem>
          <a href="https://tcp.hp.gov.in/Application/uploadDocuments/notification/Notice20160928_173242.pdf" target="_blanck" style={{textDecoration: 'none', fontSize: '15px', color: '#207CBD', fontWeight: 'bold'}} class="screenReader" title="Exemptions In Rural Areas-clarifications Thereof" tabindex="95">Exemptions In Rural Areas-clarifications ...</a>
          </ListItem>
          <Divider />
        </List>
      </CardContent>
    </Card>
    <Button onClick={handleReadMoreClick} style={{width: '120px', height: '40px', backgroundColor: '#012951', margin: '10px 10px 10px 25px',   padding: '5px', borderColor: '#001325', color: 'white', border: '2px solid #1F4A7C'}}>Read More +</Button>
    </div>
  );
}

export default Notification;