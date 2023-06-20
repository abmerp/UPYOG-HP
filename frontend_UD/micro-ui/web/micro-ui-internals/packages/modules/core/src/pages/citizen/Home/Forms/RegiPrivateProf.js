import React from 'react';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Grid,Radio,FormControlLabel,FormLabel,RadioGroup, TextField, Card} from "@mui/material";
import {Link} from 'react-router-dom'
import { MdAlignHorizontalLeft } from 'react-icons/md';

const RegiPrivateProf=()=>{

    return(
        <div>
          <Typography>
            <Link to="/">Home</Link>
          </Typography>
          <Card>
            <Box style={{marginTop:"15px"}}>
         <Box display='flex' flexDirection='row'>
        
        <FormControl style={{width:"1300px",marginLeft:"60px"}} fullWidth>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {/* <InputLabel id="district-select-label">District</InputLabel> */}
        <Grid item xs={2}>
            <Typography variant="body2">State:</Typography>
        </Grid>
        <Grid item xs={2}>
           
        <Select
                // labelId="ulb-select-label"
                displayEmpty
                id="ulb-select"
                value=''
                // label="ULB"
                sx={{
                    marginRight:'20px',
                    width:"150px"}}
                //onChange={handleChange}
               
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            
            </Grid>
            <Grid item xs={2}>
            <Typography variant="body2">District:</Typography>
            </Grid>  
            {/* <InputLabel id="ulb-select-label">District</InputLabel> */}
            <Grid item xs={2}>
                
            <Select
                // labelId="ulb-select-label"
                displayEmpty
                id="ulb-select"
                value=''
                // label="ULB"
                sx={{
                    marginRight:'20px',
                    width:"150px"}}
                //onChange={handleChange}
               
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </Grid>
            <Grid item xs={2}>
            <Typography variant="body2">Tehsil:</Typography>
            </Grid>  
            <Grid item xs={2}>
                
                <Select
                    // labelId="ulb-select-label"
                    displayEmpty
                    id="ulb-select"
                    value=''
                    // label="ULB"
                   // label="ULB"
                   sx={{
                    marginRight:'20px',
                    width:"150px"}}
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
       </Box>
       <Box style={{marginTop:"15px"}}>
         <Box display='flex' flexDirection='row'>
        
        <FormControl style={{width:"1300px",marginLeft:"60px"}} fullWidth>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {/* <InputLabel id="district-select-label">District</InputLabel> */}
        <Grid item xs={2}>
            <Typography variant="body2">State:</Typography>
        </Grid>
        <Grid item xs={2}>
           
        <Select
                // labelId="ulb-select-label"
                displayEmpty
                id="ulb-select"
                value=''
                // label="ULB"
                sx={{
                    marginRight:'20px',
                    width:"150px"}}
                //onChange={handleChange}
               
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            
            </Grid>
            <Grid item xs={2}>
            <Typography variant="body2">District:</Typography>
            </Grid>  
            {/* <InputLabel id="ulb-select-label">District</InputLabel> */}
            <Grid item xs={2}>
                
            <Select
                // labelId="ulb-select-label"
                displayEmpty
                id="ulb-select"
                value=''
                // label="ULB"
                sx={{
                    marginRight:'20px',
                    width:"150px"}}
                //onChange={handleChange}
               
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </Grid>
            <Grid item xs={2}>
            <Typography variant="body2">Tehsil:</Typography>
            </Grid>  
            <Grid item xs={2}>
                
                <Select
                    // labelId="ulb-select-label"
                    displayEmpty
                    id="ulb-select"
                    value=''
                    // label="ULB"
                   // label="ULB"
                   sx={{
                    marginRight:'20px',
                    width:"150px"}}
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
        </Box>
        </Card>
        </div>
    )
}

export default RegiPrivateProf;