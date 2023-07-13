import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function OtherUse() {
  return (
    <TableContainer component={Paper} style={{margin: '20px'}}>
      <Table sx={{ minWidth: 700 }} aria-label="industry table">
        <TableHead>
          <TableRow style={{background: '#1F4A7C', height: '20px'}}>
            <TableCell style={{color: 'white'}} rowspan={2}><strong>Sr. No.</strong></TableCell>
            <TableCell style={{color: 'white'}} rowspan={2}><strong>Description and Minimum Plot Area</strong></TableCell>
            <TableCell style={{color: 'white'}} colspan={4}><strong>Minimum Set Back in Metres</strong></TableCell>
            <TableCell style={{color: 'white'}} rowspan={2}><strong>Maximum Floor Area Ratio</strong></TableCell>
            <TableCell style={{color: 'white'}} rowspan={2}><strong>Maximum Height in Metres</strong></TableCell>
          </TableRow>
          <TableRow style={{background: '#1F4A7C', height: '20px'}}>
            <TableCell style={{color: 'white'}}><strong>Front</strong></TableCell>
            <TableCell style={{color: 'white'}}><strong>Left</strong></TableCell>
            <TableCell style={{color: 'white'}}><strong>Right</strong></TableCell>
            <TableCell style={{color: 'white'}}><strong>Rear</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell colSpan={9} style={{textAlign: 'center'}}><strong>Resedential Use</strong></TableCell>
            </TableRow>
          <TableRow>
            <TableCell>1.</TableCell>
            <TableCell>
                <p>Detached Houses</p>
                <p>i. 150 M^2 to 250 M^2</p>
                <p>ii. 150 M^2 to 250 M^2</p>
                <p>iii. Above 500 M^2</p>
            </TableCell>
            <TableCell>
                <p>2.00</p>
                <p>3.00</p>
                <p>5.00</p>
            </TableCell>
            <TableCell>
                <p>1.50</p>
                <p>2.00</p>
                <p>3.00</p>
            </TableCell>
            <TableCell>
                <p>1.50</p>
                <p>2.00</p>
                <p>3.00</p>
            </TableCell>
            <TableCell>
                <p>1.50</p>
                <p>2.00</p>
                <p>2.00</p>
            </TableCell>
            <TableCell>
                <p>1.75</p>
                <p>1.75</p>
                <p>1.75</p>
            </TableCell>
            <TableCell>
                <p>21.00</p>
                <p>21.00</p>
                <p>21.00</p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2.</TableCell>
            <TableCell>
                <p>Semi-detached Houses with common wall on one side</p>
                <p>Upto 120 M^2</p>
                <p>Above 120 M^2 to 250 M^2</p>
            </TableCell>
            <TableCell>
                <p>2.00</p>
                <p>2.00</p>
            </TableCell>
            <TableCell>
                <p>1.50</p>
                <p>1.75</p>
            </TableCell>
            <TableCell>
                <p>1.50</p>
                <p>1.75</p>
            </TableCell>
            <TableCell>
                <p>1.50</p>
                <p>1.75</p>
            </TableCell>
                <TableCell>
                    <p>1.75</p>
                    <p>1.75</p>
                </TableCell>
                <TableCell>
                    <p>21.00</p>
                    <p>21.00</p>
                </TableCell>
            </TableRow>
          <TableRow>
            <TableCell>3.</TableCell>
            <TableCell>
                <p>Row Houses with common wall on two sides</p>
                <p>90 M^2 to 120 M^2</p>
            </TableCell>
            <TableCell>2.00</TableCell>
            <TableCell>Nil</TableCell>
            <TableCell>Nil</TableCell>
            <TableCell>1.50</TableCell>
            <TableCell>1.75</TableCell>
            <TableCell>18.00</TableCell>
          </TableRow>
          <TableRow>
                <TableCell colSpan={9} style={{textAlign: 'center'}}><strong>Commercial Use</strong></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.</TableCell>
            <TableCell>
                Booths upto 10 M^2
            </TableCell>
            <TableCell>1.00</TableCell>
            <TableCell>Nil</TableCell>
            <TableCell>Nil</TableCell>
            <TableCell>Nil</TableCell>
            <TableCell>---</TableCell>
            <TableCell>4.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2.</TableCell>
            <TableCell>
                <p>Shops</p>
                <p>
				   (i.) Independent Shop/ Showrooms (standalone) above 10 M<sup>2</sup> to 30 M<sup>2</sup>
			    </p>
                <p>(ii)Row Shops with common wall on two sides above&nbsp; 30 M<sup>2</sup>to 100 M<sup>2</sup></p>
                <p>(iii)Row Shops with common wall on two sides above&nbsp; 100 M<sup>2</sup>to 250 M<sup>2</sup></p>
                <p>(iv) Above 250 M<sup>2</sup> to 500 M<sup>2</sup></p>
            </TableCell>
            <TableCell>
                <p>2.00</p>
                <p>2.00</p>
                <p>2.00</p>
                <p>3.00</p>
            </TableCell>
            <TableCell>
                <p>Nil</p>
                <p>Nil</p>
                <p>1.50</p>
                <p>2.00</p>
            </TableCell>
            <TableCell>
                 <p>Nil</p>
                <p>Nil</p>
                <p>1.50</p>
                <p>2.00</p>
            </TableCell>
            <TableCell>
            <p>1.00</p>
                <p>1.00</p>
                <p>1,50</p>
                <p>2.00</p>
            </TableCell>
            <TableCell style={{ marginLeft: '30px' }}>
            <p>--</p>
                <p>1.75</p>
                <p>1.75</p>
                <p>1.75</p>
            </TableCell>
            <TableCell>
            <p>6.00</p>
                <p>9.00</p>
                <p>21.00</p>
                <p>21.00</p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3.</TableCell>
            <TableCell>
                <p>Shopping Complex</p>
                <p>
				   (i.) 500 M<sup>2</sup> to 1500 M<sup>2</sup>
			    </p>
                <p>(ii)Above&nbsp; 1500 M<sup>2</sup>to 4000 M<sup>2</sup></p>
                <p>(iii)Above&nbsp; 4000 M<sup>2</sup></p>
            </TableCell>
            <TableCell>
                <p>5.00</p>
                <p>10.00</p>
                <p>12.00</p>
            </TableCell>
            <TableCell>
                <p>3.00</p>
                <p>5.00</p>
                <p>7.50</p>
            </TableCell>
            <TableCell>
                <p>3.00</p>
                <p>5.00</p>
                <p>7.50</p>
            </TableCell>
            <TableCell>
                 <p>3.00</p>
                <p>5.00</p>
                <p>6.00</p>
            </TableCell>
            <TableCell>
            <p>1.75</p>
                <p>1.75</p>
                <p>1.50</p>
            </TableCell>
            <TableCell style={{ marginLeft: '30px' }}>
            <p>21.00</p>
                <p>21.00</p>
                <p>21.00</p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell colSpan={8}>
                <p>Parking</p>
                <p>
                <p>(i) 500 M<sup>2</sup> to 1500 M<sup>2</sup>&nbsp;&nbsp; =&nbsp; 1.50 ECS per100 M<sup>2</sup> of built up area</p>
			    </p>
                <p>(ii)1500 M<sup>2</sup> to 4000 M<sup>2&nbsp;&nbsp; </sup>= 2.00 ECS per100 M<sup>2</sup> of built up area</p>
                <p>(iii) Above 4000 M<sup>2&nbsp;&nbsp;&nbsp;&nbsp; </sup>= 3.00ECS per100 M<sup>2</sup> of built up area</p>
            </TableCell>
            
          </TableRow>
          <TableRow>
            <TableCell>4.</TableCell>
            <TableCell>
                <p>Tourism Unit</p>
                <p>
				   (i.) 250 M<sup>2</sup> to 500 M<sup>2</sup>
			    </p>
                <p>(ii)Above&nbsp; 500 M<sup>2</sup>to 1500 M<sup>2</sup></p>
                <p>(iii)Above&nbsp; 1500 M<sup>2</sup></p>
            </TableCell>
            <TableCell>
                <p>3.00</p>
                <p>5.00</p>
                <p>7.00</p>
            </TableCell>
            <TableCell>
                <p>2.00</p>
                <p>4.00</p>
                <p>5.00</p>
            </TableCell>
            <TableCell>
                <p>2.00</p>
                <p>4.00</p>
                <p>5.00</p>
            </TableCell>
            <TableCell>
                 <p>2.00</p>
                <p>3.00</p>
                <p>4.00</p>
            </TableCell>
            <TableCell>
            <p>1.75</p>
                <p>1.50</p>
                <p>1.50</p>
            </TableCell>
            <TableCell style={{ marginLeft: '30px' }}>
            <p>21.00</p>
                <p>21.00</p>
                <p>21.00</p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell colSpan={8}>
                <p>Parking</p>
                <p>
                <p>(i) 250 M<sup>2</sup> to 500 M<sup>2</sup>&nbsp;&nbsp; =&nbsp; 1.00 ECS per100 M<sup>2</sup> of built up area</p>
			    </p>
                <p>Above (ii)500 M<sup>2</sup> to 1500 M<sup>2&nbsp;&nbsp; </sup>= 1.50 ECS per100 M<sup>2</sup> of built up area</p>
                <p>(iii) Above 1500 M<sup>2&nbsp;&nbsp;&nbsp;&nbsp; </sup>= 2.00ECS per100 M<sup>2</sup> of built up area</p>
                <p>(iv.)Tourism Units, can be known by the name of Hotel or Guest House or Eco-Tourism or by any other name.</p>
                <p>(v.)In existing built up areas like Bazaars, the building line can be maintained.</p>
            </TableCell>    
          </TableRow>
          <TableRow>
            <TableCell>5.</TableCell>
            <TableCell>
                <p>Cinema / Cineplex</p>
                <p> 4000 M<sup>2</sup> and above</p>
            </TableCell>
            <TableCell>
               15.00
            </TableCell>
            <TableCell>
                7.50
            </TableCell>
            <TableCell>
                7.50
            </TableCell>
            <TableCell>
                6.00
            </TableCell>
            <TableCell>
                1.50
            </TableCell>
            <TableCell style={{ marginLeft: '30px' }}>
                21
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell colSpan={8}>
                <p>Parking</p>
                <p>(i)  3.00 ECS per100 M<sup>2</sup> of built up area</p>
                <p>Other Regulations as per Cinematography Act shall also apply.</p>
            </TableCell>    
          </TableRow>
          <TableRow>
            <TableCell>6.</TableCell>
            <TableCell>
                <p>Multiplexes</p>
                <p> 4000 M<sup>2</sup> and above</p>
            </TableCell>
            <TableCell>
               15.00
            </TableCell>
            <TableCell>
                9.00
            </TableCell>
            <TableCell>
                9.00
            </TableCell>
            <TableCell>
                9.00
            </TableCell>
            <TableCell>
                1.50
            </TableCell>
            <TableCell style={{ marginLeft: '30px' }}>
                21
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell colSpan={8}>
                <p>Parking</p>
                <ol>
				<li>Permissible within the complex.</li>
				<li>Parking space to be provided within Multiplex @&nbsp; 3 ECS for every 100 M<sup>2</sup> of built up area.</li>
				<li>Other Regulations as per Cinematography Act shall also apply.</li>
				<li>Multiplex complex shall mean an integrated entertainment and shopping centre/ complex having at least 2 Cinema Halls. The minimum area on which this use shall be permitted should not be less than 4000 M<sup>2</sup>. Apart from Cinema Halls, the Multiplexes may also have Restaurant, Fast Food, Outlet, Pubs, Health Spas/ Centers, Hotels and other Re-creational activities. The shopping center may have Retail Outlet, Video Games, Parlours, Bowling Alleys, Health Centers, Shopping Malls, Office space.</li>
			    </ol>
            </TableCell>    
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell colSpan={8}>
                <p>Note:-</p>
                <p>1.00 ECS (Equivalent Car Space) shall mean as under:-</p>
                <ol>
				<li>For parking in open &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 23 M<sup>2</sup></li>
				<li>For parking in stilts or ground floor&nbsp; = 28 M<sup>2</sup></li>
				<li>For parking in basement floor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = 32 M<sup>2</sup></li>
			    </ol>
            </TableCell>    
          </TableRow>
          <TableRow>
            <TableCell>7.</TableCell>
            <TableCell>
                <p>Multi level parking</p>
                <p>
				   (i.) 500 M<sup>2</sup> to 1500 M<sup>2</sup>
			    </p>
                <p>(ii)Above&nbsp; 1500 M<sup>2</sup>to 4000 M<sup>2</sup></p>
                <p>(iii)Above&nbsp; 4000 M<sup>2</sup></p>
            </TableCell>
            <TableCell>
                <p>5.00</p>
                <p>10.00</p>
                <p>12.00</p>
            </TableCell>
            <TableCell>
                <p>3.00</p>
                <p>5.00</p>
                <p>7.50</p>
            </TableCell>
            <TableCell>
                <p>3.00</p>
                <p>5.00</p>
                <p>7.50</p>
            </TableCell>
            <TableCell>
                 <p>3.00</p>
                <p>5.00</p>
                <p>6.00</p>
            </TableCell>
            <TableCell>
            <p>1.75</p>
                <p>1.75</p>
                <p>1.50</p>
            </TableCell>
            <TableCell style={{ marginLeft: '30px' }}>
            <p>21.00</p>
                <p>21.00</p>
                <p>21.00</p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={9}>
            <p>Other Uses including public &amp; semi –public, educational buildings, police/fire-stations, medical, community hall, library / religious buildings,&nbsp; etc.</p>
            </TableCell>  
          </TableRow>
          <TableRow>
            <TableCell>1.</TableCell>
            <TableCell>
                <p>
				   (i.) 250 M<sup>2</sup> to 500 M<sup>2</sup>
			    </p>
                <p>(ii)Above&nbsp; 500 M<sup>2</sup>to 1000 M<sup>2</sup></p>
                <p>(iii)Above&nbsp; 1000 M<sup>2</sup> to 5000 M<sup>2</sup></p>
                <p>(iii)Above 5000 M<sup>2</sup></p>

            </TableCell>
            <TableCell>
                <p>3.00</p>
                <p>5.00</p>
                <p>10.00</p>
                <p>15.00</p>
            </TableCell>
            <TableCell>
                <p>2.00</p>
                <p>2.00</p>
                <p>5.00</p>
                <p>7.50</p>
            </TableCell>
            <TableCell>
                <p>2.00</p>
                <p>2.00</p>
                <p>5.00</p>
                <p>7.50</p>
            </TableCell>
            <TableCell>
            <p>2.00</p>
                <p>3.00</p>
                <p>5.00</p>
                <p>7.50</p>
            </TableCell>
            <TableCell>
                <p>2.00</p>
            <p>1.75</p>
                <p>1.50</p>
                <p>1.50</p>
            </TableCell>
            <TableCell style={{ marginLeft: '30px' }}>
                <p>21.00</p>
            <p>21.00</p>
                <p>21.00</p>
                <p>21.00</p>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OtherUse
