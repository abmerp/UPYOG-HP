import React from "react";
import Header from "../Header";
import { Box, Grid, Typography, FormControl, FormControlLabel, RadioGroup, Radio } from "@mui/material";
import { useState } from "react";
import Form11Calculator from "../Forms/Form11Calculator";
import Form12Calculator from "../Forms/Form12Calculator";
import Form26Calculator from "../Forms/form26Calculator";


const FeeCalculator = () => {

    const [value, setValue] = React.useState('');
    const [helperText, setHelperText] = React.useState('Reference Number');
    const [form11Check, setForm11Check] = useState(true);
    const [form12Check, setForm12Check] = useState(false);
    const [form26Check, setForm26Check] = useState(false);
  
    const handleRadioButton = (event) => {
        event.preventDefault();
        if(event.target.value==="form11"){
              setHelperText("Form-11");
              setForm11Check(true);
              setForm12Check(false);
              setForm26Check(false);
        }
        else if(event.target.value==="form12"){
            setHelperText("Form-12");
            setForm11Check(false);
            setForm12Check(true);
            setForm26Check(false);
        }
        else {
            setHelperText("Form-26");
            setForm11Check(false);
              setForm12Check(false);
              setForm26Check(true);
        }
      };


    return (
        <div>
        <Header/>
        <div className="formCalContainer">
        <div className="formDataContainer">
            <Box>
                <Box display='flex' flexDirection='row'>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={9}>
                    <Typography variant="h6" color='orange'>Fee Calculator</Typography>
                    </Grid>
                    <Grid item xs={3}>
                    <Typography variant="body2" color='red'>(*) Indicates Mandatory Field</Typography>
                    </Grid>
                    </Grid>
                </Box>
                <hr style={{borderTop:'1px solid blue'}}></hr>
                <Box>
                
                 
                    <h3 style={{width:'100%', backgroundColor:'#F1F1F1', height:'30px'}}>Form Type</h3>
                    <Box display='flex' flexDirection='row'>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={3}>
                        <Typography variant="body2">Form Name:</Typography>
                        </Grid>
                        <Grid item xs={4}>
                        <FormControl>
            <RadioGroup
              row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="form11"
                onClick={handleRadioButton}>
             <FormControlLabel value="form11" control={<Radio  checked={form11Check} />} label="Form-11"/>
             <FormControlLabel value="form12" control={<Radio  checked={form12Check} />} label="Form-12" />
             <FormControlLabel value="form26" control={<Radio  checked={form26Check}/>} label="Form-26" />
            </RadioGroup>
           </FormControl>
           </Grid>
                    </Grid>
                    </Box>

                    {
                        form11Check && <Form11Calculator/>
                    }
                    {
                        form12Check &&  <Form12Calculator/>
                    }
                    {
                        form26Check &&   <Form26Calculator/>
                    }
                    
                </Box>
            </Box>
        </div>

       </div>
       </div>
    );
}

export default FeeCalculator;