import { Card, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';



const OurServices = () => {
  return (
    <div>
    <Card style={{maxWidth: '100%', height: 200, margin: '10px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'}}>
      <CardContent>
        <Typography variant="h5" style={{ backgroundColor: "#274472", color: "white", padding: "10px", fontSize: '15px', borderRadius: '5px' }}>
          Our Services
        </Typography>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
        <div style={{width: '120px', height: '120px', borderRadius: '50%'}}>
        <img src="https://obpsud.hp.gov.in/img/professionals.png" alt="Registered private/professionals" style={{width: '80px', height: '80px', padding: '10px', margin: '20px', borderRadius: '50%', backgroundColor: '#f0f0f0', border: '2px solid #29465B',}} />
        </div>
        <Typography variant="body1" style={{fontSize: '15px', padding: '5px', margin: '10px', marginTop: '30px',textDecoration:"none"}}>
         {/* <Link to="https://tcp.hp.gov.in/registeredArchitect/23/52" target="_blank" rel="noopener noreferrer">Registered Private / Professionals </Link>  */}
         <a href='https://tcp.hp.gov.in/registeredArchitect/23/52' target='_blank'>Registered Private / Professionals</a>
        </Typography>
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'row'}}>
        <div style={{width: '120px', height: '120px', borderRadius: '50%'}}>
        <img src="https://obpsud.hp.gov.in/img/support.png" alt="Online User Services" style={{width: '80px', height: '80px', padding: '10px', margin: '20px', borderRadius: '50%', backgroundColor: '#f0f0f0', border: '2px solid #29465B'}} />
        </div>
        <Typography variant="body1" component={Link} to="/digit-ui/citizen/onlineuserservices" style={{fontSize: '15px', padding: '5px', margin: '20px',textDecoration:"none"}}>
          <Link to="/digit-ui/citizen/onlineuserservices">Online User Services</Link>
        </Typography>
        </div>
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'row'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
        <div style={{width: '120px', height: '120px', borderRadius: '50%'}}>
        <img src="https://obpsud.hp.gov.in/img/budget.png" alt="Fee Calculator" style={{width: '80px', height: '80px', padding: '5px', margin: '20px', borderRadius: '50%', backgroundColor: '#f0f0f0', border: '2px solid #29465B'}}/>
        </div>
        <Typography variant="body1" component={Link} to='/digit-ui/citizen/feecalculator' style={{fontSize: '15px', padding: '5px', margin: '20px',textDecoration:"none"}}>
         <Link to="/digit-ui/citizen/feecalculator">Fee Calculator</Link>
        </Typography>
        
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'row'}}>
        <div style={{width: '120px', height: '120px', borderRadius: '50%'}}>
        <img src="https://obpsud.hp.gov.in/img/businessman.png" alt="Check/ Track application status" style={{width: '80px', height: '80px', padding: '5px', margin: '20px', borderRadius: '50%', backgroundColor: '#f0f0f0', border: '2px solid #29465B'}} />
        </div>
        <Typography variant="body1" component={Link} to="/digit-ui/citizen/CheckStatus" style={{fontSize: '15px', padding: '5px', margin: '20px',textDecoration:"none"}}>
          <Link to="/digit-ui/citizen/CheckStatus">Track Application Status</Link>
        </Typography>
        </div>
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'left', alignItems: 'row'}}>
        <div style={{width: '120px', height: '120px', borderRadius: '50%'}}>
        <img src="https://obpsud.hp.gov.in/img/user.png" alt="Officer Login" style={{width: '80px', height: '80px', padding: '5px', margin: '20px', borderRadius: '50%', backgroundColor: '#f0f0f0', border: '2px solid #29465B'}} />
        </div>
        <Typography variant="body1" component={Link} to='/digit-ui/citizen/officerlogin' style={{fontSize: '15px', padding: '5px', margin: '10px', marginTop: '30px',textDecoration:"none"}}>
         <Link to="/digit-ui/citizen/officerlogin">Officer-Login</Link> 
        </Typography>
        </div>
        <br></br>
        </div>
      </CardContent>
    </Card>
    </div>
  );
};

export default OurServices;