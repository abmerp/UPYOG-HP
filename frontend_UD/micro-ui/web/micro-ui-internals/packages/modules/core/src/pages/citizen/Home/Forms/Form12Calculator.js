import React from "react";
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Grid,Radio,FormControlLabel,FormLabel,RadioGroup, TextField } from "@mui/material";
import Button from '@mui/material/Button';
import { useState } from "react";

const Form12Calculator = ()=>{
    const [checked,setChecked]=useState(true)

    const handleButton=(event)=>{
        if(event.target.value==="yes")
        {
            setChecked(true);
        }
        else{
            setChecked(false);
        }
    }
    




    return (
        <div>
            <Box>
            <h3 style={{width:'100%', backgroundColor:'#F1F1F1', height:'30px'}}>Hierarchy Details Of Area</h3>
       <Box display='flex' flexDirection='row'>
        
            <FormControl style={{width:"1300px"}} fullWidth>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {/* <InputLabel id="district-select-label">District</InputLabel> */}
            <Grid item xs={3}>
                <Typography variant="body2">District:</Typography>
            </Grid>
            <Grid item xs={3}>
                <Select
                    // labelId="district-select-label"
                    displayEmpty
                    id="ditrict-select"
                    value=''
                    // label="District"
                    sx={{
                        width:"250px",
                        marginRight:'20px'
                    }}
                    //onChange={handleChange}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={10} >Ten</MenuItem>
                    <MenuItem value={20} >Twenty</MenuItem>
                    <MenuItem value={30} >Thirty</MenuItem>
                </Select> 
                
                </Grid>
                <Grid item xs={3}>
                <Typography variant="body2">ULB:</Typography>
                </Grid>  
                {/* <InputLabel id="ulb-select-label">District</InputLabel> */}
                <Grid item xs={3}>
                <Select
                    // labelId="ulb-select-label"
                    displayEmpty
                    id="ulb-select"
                    value=''
                    // label="ULB"
                    sx={{
                        width:"250px",
                        marginRight:'20px'
                    }}
                    //onChange={handleChange}
                   
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                </Grid>
                </Grid>
           </FormControl>
           
    
           </Box>
           <h3 style={{width:'100%', backgroundColor:'#F1F1F1', height:'30px'}}>Description of Land Proposed for Subdivision/Development of Land</h3>
       <Box display='flex' flexDirection='row'>
        
            <FormControl style={{width:"1300px"}} fullWidth>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {/* <InputLabel id="district-select-label">District</InputLabel> */}
            <Grid item xs={3}>
                <Typography variant="body2">Total Plot Area:</Typography>
            </Grid>
            <Grid item xs={3}>
               <TextField style={{width:"250px"}}></TextField>
                
                </Grid>
                <Grid item xs={3}>
                <Typography variant="body2">Applied Land Use:</Typography>
                </Grid>  
                {/* <InputLabel id="ulb-select-label">District</InputLabel> */}
                <Grid item xs={3}>
                <Select
                    // labelId="ulb-select-label"
                    displayEmpty
                    id="ulb-select"
                    value=''
                    // label="ULB"
                    sx={{
                        width:"250px",
                        marginRight:'20px'
                    }}
                    //onChange={handleChange}
                   
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                </Grid>
                <Grid item xs={3}>
                <Typography variant="body2">Muck Quantity :</Typography>
            </Grid>
            <Grid item xs={3}>
               <TextField style={{width:"250px"}}></TextField>
                
                </Grid>
                <Grid item xs={3}>
                <Typography variant="body2">Proposal Submitted for:</Typography>
                </Grid>  
                {/* <InputLabel id="ulb-select-label">District</InputLabel> */}
                <Grid item xs={3}>
                <Select
                    // labelId="ulb-select-label"
                    displayEmpty
                    id="ulb-select"
                    value=''
                    // label="ULB"
                    sx={{
                        width:"250px",
                        marginRight:'20px'
                    }}
                    //onChange={handleChange}
                   
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                </Grid>
                <Grid item xs={3}>
                <Typography variant="body2">Whether Subdividion Approved ?:</Typography>
                </Grid>  
                {/* <InputLabel id="ulb-select-label">District</InputLabel> */}
                <Grid item xs={3}>
                <FormControl>
  {/* <FormLabel id="demo-radio-buttons-group-label">Whether Change Of Land Use Involved ?</FormLabel> */}
  <RadioGroup row
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Yes" />
    <FormControlLabel value="male" control={<Radio />} label="No" />
    
  </RadioGroup>
</FormControl>
                </Grid>
                
                </Grid>
           </FormControl>
           
    
           </Box>
          
           <h3 style={{width:'100%', backgroundColor:'#F1F1F1', height:'30px'}}>Built Up Area</h3>
           <Box display='flex' flexDirection='row'>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {/* <InputLabel id="district-select-label">District</InputLabel> */}
        <Grid item xs={3}>
            <Typography variant="body2">No Of Blocks:</Typography>
        </Grid>
        <Grid item xs={3}>
           <TextField style={{width:"250px"}}></TextField>
            </Grid>
        </Grid>
           </Box>
           <h3 style={{width:'100%', backgroundColor:'#F1F1F1', height:'30px'}}>Plot Details</h3>
       <Box display='flex' flexDirection='row'>
        
            <FormControl style={{width:"1300px"}} fullWidth>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {/* <InputLabel id="district-select-label">District</InputLabel> */}
            <Grid item xs={3}>
                <Typography variant="body2">Whether Change Of Land Use Involved ?:</Typography>
            </Grid>
            <Grid item xs={3}>
            <FormControl>
  {/* <FormLabel id="demo-radio-buttons-group-label">Whether Change Of Land Use Involved ?</FormLabel> */}
  <RadioGroup row
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
    onClick={handleButton}
  >
    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
    <FormControlLabel value="no" control={<Radio />} label="No" />
    
  </RadioGroup>
</FormControl>
                
                </Grid>
                { checked && <div>
    <Grid item xs={3}>
    <Typography variant="body2">Type Of CLU Involved?:</Typography>
    </Grid>  
{/* <InputLabel id="ulb-select-label">District</InputLabel> */}
   <Grid item xs={3}>
     <Select
     // labelId="ulb-select-label"
         displayEmpty
                    id="ulb-select"
                    value=''
                    // label="ULB"
                    sx={{
                        width:"250px",
                        marginRight:'20px'
                    }}
                    //onChange={handleChange}
                   
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                </Grid>
                </div>}
             
                </Grid>
           </FormControl>
           
    
           </Box>
          
           <Button variant="contained" style={{marginLeft:"45%",backgroundColor:"#47A447",marginTop:"50px"}}>
        Calculate Fee
      </Button>
        
           </Box>
           </div>
    )
        
    
}

export default Form12Calculator;