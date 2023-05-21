import React from 'react';
import { Box, Typography, Card, CardContent, Grid, CardHeader } from '@mui/material';
import Header from '../Home/Header';
import { NavbarFooter } from '../Home/Components/NavbarFooter';



const AboutUs = () => {
  return(
    <div>
     <div>
      <Header/>
     
      <Card style={{maxWidth: "auto", height: 'auto', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',marginBottom:"30px"}}>
      <CardHeader title='About Us' style={{color:"orange"}}></CardHeader>
      <CardContent>
      <Grid container spacing={1} style={{maxWidth:"auto", display: 'flex', flexDirection: 'column',padding:"0px 10px 0px 10px"}}>
        <div> 
        <img src='https://obpsud.hp.gov.in/img/nahan.jpg' alt="Image" style={{float:"right",width:"40%",margin:"15px 0px 10px 16px"}}/>
        <p  className='paragraph'>The Himachal Pradesh State is a predominantly hill State with the total population of 68.56 (6.85 Millions) residing in 55673 sq km area. Like any other part of our great country, urbanization is fast increasing and posing variety of problems related to urbanization in Himachal Pradesh as well. Currently urban population of the state is 6.89 Lakhs (0.69 Million) (10.04% of the total population) but it is fast increasing. The Directorate of Urban Development was established during the year 1985-86 to direct, control and monitor the activities of the Urban Local Bodies in the state of Himachal Pradesh. The Directorate 
        has been assigned the responsibility to look after the legislative, Administrative and Development activities of 54 Municipalities (Local Urban Bodies) i.e. 2 Municipal Corporations, 31 Municipal Councils and 21 Nagar Panchayats.</p>
        <p  className='paragraph'>From 1986 to May,1994, the Directorate was performing nominal regulatory
         functions which merely relates to the coordination of development works, release of grants and passing of municipal budgets. Consequent upon the 74th amendment of the constitution and the enactment of 3 new Municipal Acts viz. H.P. Municipal Corporation Act, 1994, Municipal Act, 1994 and H.P Municipal Services Act 1994, numerous Constitutional, Statutory and obligatory functions are entrusted to the Directorate. The 74th Constitutional Amendment envisages greater decentralization of administrative, legislative and financial functions to the Urban Local Government coupled with more and more functional autonomy to all the municipalities.</p>
        <p  className='paragraph'>The urban Development Department of State, 
        in close partnership with ULBs is striving to find innovative and advanced technological solutions to urban problems of the State like; integrated urban transport, Sanitation, Solid Waste Management, Urban Infrastructure, Urban Poverty, Urban Housing, Urban Planning, Financial Sustainability of ULBs and general Urban Governance. </p>
        <p  className='paragraph'>The task is gigantic; but the Department find it to be achievable through 
        the active community involvement and hard work and sincere efforts of all officers and employees of the department.</p>
        </div>
     </Grid>
     </CardContent>
    </Card>
     </div>
  <NavbarFooter/>
    </div>
  )
}

export default AboutUs