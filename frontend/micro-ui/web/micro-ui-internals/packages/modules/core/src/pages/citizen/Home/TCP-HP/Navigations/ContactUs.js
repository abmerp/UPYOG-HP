// import mapImage from '../Components/Icons-Images/maptcp.png'
import React from "react"
import { Card, CardContent, Typography } from '@material-ui/core';

const ContactUs = () => {
    return(
        <>
    <Card style={{width: 1200, height: '350px', margin: '50px 50px 50px 200px', color: 'black'}}>
      <CardContent style={{padding: '30px', display: 'flex', justifyContent: 'center', alignItems:'space-between'}}>
        <div style={{width: '50%'}}>
        <Typography variant="h5" style={{margin: '10px 0px', color: "black", padding: "5px", fontSize: '16px', fontWeight: 'bold', borderBottom: '1px solid black'}}>
          Contact Us
        </Typography>
        <Typography variant="p" style={{ margin: '-10px', padding: "10px", fontSize: '15px', borderRadius: '5px', lineHeight: '1.6'}}>
         <strong>Directorate of Town and Country Planning Department</strong>
        </Typography>
        <br />
        <Typography variant="p" style={{ margin: '-10px', padding: "10px", fontSize: '15px', borderRadius: '5px', lineHeight: '1.6'}}>
          Yojna Bhawan, Block No. 32A, SDA Complex, Vikas Nagar,
        </Typography>
        <br />
        <Typography variant="p" style={{ margin: '-10px', padding: "10px", fontSize: '15px', borderRadius: '5px', lineHeight: '1.6'}}>
         PBX NO. 0177-2624762, Toll Free No. 1800-180-8103 FAX NO. 0177- 2625787,
        </Typography>
        <br />
        <Typography variant="p" style={{ margin: '-10px', padding: "10px", fontSize: '15px', borderRadius: '5px', lineHeight: '1.6'}}>
        E-mail ID: tcp-hp@nic.in  , Web Site: www.tcp.hp.gov.in
        </Typography>
        <br />
        <Typography variant="p" style={{ margin: '-10px', padding: "10px", fontSize: '15px', borderRadius: '5px', lineHeight: '1.6'}}>
        Shimla - 171 009, Himachal Pradesh
        </Typography>
        </div>
        <div style={{width: '50%', color: 'white'}}>
        <h4>Google Map Location</h4>
        <img src={mapImage} alt='mapImage' style={{width: '400px', height: '300px', translate: '100px -100px'}}/>
        </div>
      </CardContent>
    </Card>
    </>
    )
}

export default ContactUs
