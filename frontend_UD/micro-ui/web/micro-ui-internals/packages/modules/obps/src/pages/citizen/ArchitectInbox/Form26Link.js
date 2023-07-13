import { Card } from "@egovernments/digit-ui-react-components";
import React from "react";
import {Link} from 'react-router-dom';
import { CardContent, Typography } from "@mui/material";



const Form26Link=()=>{
    return(
        <div>
             <CardContent style={{alignItems:"center"}}>
            <Card>
            <Typography><Link style={{textDecoration:"none", color:"#43446e", textAlign:"center"}} to="/digit-ui/citizen/form26">Apply Form26</Link></Typography>
            <Typography><Link style={{textDecoration:"none", color:"#43446e", textAlign:"center"}}>My Application</Link></Typography>
            <Typography><Link style={{textDecoration:"none", color:"#43446e", textAlign:"center"}}>Apply Now</Link></Typography>
            </Card>
            </CardContent>
        </div>
    )
}


export default Form26Link;