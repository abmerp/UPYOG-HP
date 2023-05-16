import React from 'react';
import Header from '../Header';
import { Box, Typography, Card, CardContent, Grid, CardHeader } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavbarFooter } from './NavbarFooter';


function Faq() {
  return (
    <div>
    <Header />
    <div>
    
      <Card style={{maxWidth: "100%", height: 'auto', margin: '20px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}}>
      <CardHeader title='Do you know ?' style={{color:"orange"}}></CardHeader>
      <CardContent>
      <Grid container spacing={1} style={{ display: 'flex', flexDirection: 'column',padding:"0px 10px 0px 10px"}}>
        <p className='paragraph1'>According to the provisions of the Himachal Pradesh Town and Country Planning Act, 1977 
            ( Act No. 12 of 1977), no construction / development activity can be undertaken in any Planning / 
            Special Area or deemed Planning Area without the prior permission of the competent Authority namely 
            Director, Town and Country Planning, Himachal Pradesh. No local authority or any office or any officer
             or other authority shall, notwithstanding anything 9apps contained in any other law for the time 
             being in force, grant permission for the change in use of land without the permission in writing 
             of the Director.
        </p>
        <p className='paragraph1'>
        No Registrar or the Sub-Registrar, appointed under the Indian Registration Act, 1908, shall register any deed or document of transfer of any sub-division of land by way of sale, gift, exchange, lease or mortgage with possession, unless the sub-division of land is duly approved by the Director, 
        subject to such rules as may be framed in this behalf by the State Government.
        </p>
        <ul className='paragraph1'>
            <li>Where the land is owned by a person and the transfer is made without involving any further divisions;</li>
             <li>where the partition/sub-division of land is made in a joint Hindu Family;</li>
             <li>Where the lease is made in relation to a part or whole of a building;</li>
             <li>Where the mortgage is made for procuring the loans for construction or improvements over the land either from the Government or from any other financial institution constituted or 
                established under any law for the time being in force or recognized by the State Government.</li>
                </ul>
            <p className='paragraph1'>
            No electricity, water or sewerage connections shall be given to any person within the Planning or Special Area constituted under the Act, unless a No Objection Certificate has been obtained
             by such person from the Director or the Special Area Development Authority.
            </p>
            <p className='paragraph1'>
            Provided that the service providing authorities shall disconnect the service connections forthwith of a building or land, in case any deviations from the approved plan or unauthorized constructions is brought to the notice or such authorities 
            by the Director or the officer vested with the powers of the Director.
            </p>
            
            <div style={{display:'block',margin:"20px"}}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What is an apartment building? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
            <p className='paragraph1'>
          “apartment” whether called block, chamber, dwelling unit, flat, lot, premises, suite, 
          tenement, unit ,cottage or by any other name means a separate and self-contained part of any property including one or more rooms or enclosed spaces located on one or more floors or any part or parts thereof, in a building, or in a plot of land, used or intended to be used for residence, Office, shop, showroom, or godown or for carrying on any business, industry, occupation, profession or trade, or for any other type of independent use ancillary to the purpose specified above and with a direct exit to a public street, road or highway or to a common area leading to such street, road or highway and includes any garage or room whether or not adjacent to the building in which such apartment is located, provided by the promoter for the use by the allottee for parking any vehicle 
          or as the case may be, for the residence of any domestic servant employed in such apartment;
          </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What is a colony?  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='paragraph1'>
            <ul className='paragraph1'>
                <li>
                Any area of land comprising of 2500 or more than 2500 square metres of land 
                contiguous divided or proposed to be divided into plots or apartments or building for residential, 
                commercial or industrial including purpose including cyber city,
                 cyber park purpose.
                </li>
                <li>
                Except:-
                    <ul className='paragraph1'>
                        <li>Family partition by way inheritance or succession without a motive of earning profit.</li>
                        <li>Earmarked by a factory owner for housing colony for his employees or labourers.</li>
                    </ul>
                </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography> Who is a Promoter or can become a Promoter under TCP Act?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p className='paragraph1'>
          Any individual, Firm, Company, Co-operative Society & Association of Persons, 
          who constructs/causes to construct a building consisting more than eight apartments 
          or sets up/causes to set up a colony 
          over land having area of 2500 or more than 2500 square meters for selling purpose.
          </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
     </Grid>
     </CardContent>
    </Card>
    </div>
    <NavbarFooter/>
    </div>
  );
}

export default Faq;