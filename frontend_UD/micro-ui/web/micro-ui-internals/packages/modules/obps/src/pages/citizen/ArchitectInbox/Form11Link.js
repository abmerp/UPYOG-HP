import { Card} from "@egovernments/digit-ui-react-components";
import React from "react";
import {Link} from 'react-router-dom';
import { CardContent, Typography } from "@mui/material";



const Form11Link=()=>{
    return(
        <div>
        <Card>
            <Typography><Link style={{textDecoration:"none", color:"#43446e", textAlign:"center"}} to="/digit-ui/citizen/form11">Apply Form11</Link></Typography>
            <Typography><Link style={{textDecoration:"none", color:"#43446e", textAlign:"center"}}>My Application</Link></Typography>
            <Typography><Link style={{textDecoration:"none", color:"#43446e", textAlign:"center"}}>Apply Now</Link></Typography>
            </Card>
        </div>
    )
}


export default Form11Link;