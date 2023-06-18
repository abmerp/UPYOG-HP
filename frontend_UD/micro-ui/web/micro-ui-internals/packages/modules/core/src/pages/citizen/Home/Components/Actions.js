import { Card, Header } from "@egovernments/digit-ui-react-components";
import { Link } from 'react-router-dom';
import { Button, CardContent} from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import PaymentReportUD from "../../FormsUD/MIS/PaymentReportUD";
import ReceiptsCard from "../../../../../../receipts/src/receiptHomeCard";




const Actions=()=>{

return(

    <Card>
        <Header class="card-header">Take Action</Header>
        <CardContent>
            <span style={{marginRight:"30px"}}><Button variant="contained"><a href="http://localhost:3000/digit-ui/citizen/obps/my-applications">Send to Owner</a></Button></span>
            <span><Button variant="contained" component={Link} to="/digit-ui/citizen/payment2">Proceed for Payment</Button></span>
        </CardContent>
 </Card>
   
    )
}

export default Actions;