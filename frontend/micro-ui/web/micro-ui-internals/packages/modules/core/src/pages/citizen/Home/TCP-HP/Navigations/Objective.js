import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const Objectives = () => {
    return(
        <React.Fragment>
    <Card style={{width: 1200, height: '350px', margin: '50px 50px 50px 200px', color: 'black'}}>
      <CardContent style={{padding: '30px'}}>
        <Typography variant="h5" style={{margin: '10px 0px', color: "black", padding: "5px", fontSize: '16px', fontWeight: 'bold', borderBottom: '1px solid black'}}>
          Objectives
        </Typography>
        <Typography variant="p" style={{ margin: '-10px', padding: "10px", fontSize: '15px', borderRadius: '5px', lineHeight: '1.6'}}>
         1. To encourage planned and systematic urban and rural growth in a comprehensive manner.
        </Typography>
        <br />
        <Typography variant="p" style={{ margin: '-10px', padding: "10px", fontSize: '15px', borderRadius: '5px', lineHeight: '1.6'}}>
         2. To stop haphazard constructions.
        </Typography>
        <br />
        <Typography variant="p" style={{ margin: '-10px', padding: "10px", fontSize: '15px', borderRadius: '5px', lineHeight: '1.6'}}>
         3. To make optimum use of precious urban land.
        </Typography>
        <br />
        <Typography variant="p" style={{ margin: '-10px', padding: "10px", fontSize: '15px', borderRadius: '5px', lineHeight: '1.6'}}>
        4. To create conducive conditions for encouraging planned constructions.
        </Typography>
        <br />
        <Typography variant="p" style={{ margin: '-10px', padding: "10px", fontSize: '15px', borderRadius: '5px', lineHeight: '1.6'}}>
        5. To plan for creating essential urban infrastructure.
        </Typography>
        <br />
        <Typography variant="p" style={{ margin: '-10px', padding: "10px", fontSize: '15px', borderRadius: '5px', lineHeight: '1.6'}}>
        6.  To sub serve the basic needs of poor and especially urban slum population.
        </Typography>
        <br />
        <Typography variant="p" style={{ margin: '-10px', padding: "10px", fontSize: '15px', borderRadius: '5px', lineHeight: '1.6'}}>
        7.  To upgrade environment for conducive habitat.
        </Typography>
        <br />
        <Typography variant="p" style={{ margin: '-10px', padding: "10px", fontSize: '15px', borderRadius: '5px', lineHeight: '1.6'}}>
        8. To preserve the hilly architecture and rich heritage of the State
        </Typography>
      </CardContent>
    </Card>
    </React.Fragment>
    )
}

export default Objectives