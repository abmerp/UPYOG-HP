import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';


const DetailTable1 = () => {
    return(
        <React.Fragment>
            <Typography variant='h6' style={{marginLeft: '500px', marginTop: '20px', fontWeight: 'bold', fontSize: '30px',color: '#00001A'}}>Real Time Application Status</Typography>
            <Box sx={{ width: '90%', maxWidth: 1200, backgroundColor: '#FFF5FF', margin: '15px', marginLeft: '70px'}} >
            <TableContainer>
                <Table>
                <TableHead>
                    <TableRow style={{background: 'linear-gradient(to right, #CCCCFF, #6666FF)', color: 'white'}}>
                    <TableCell >Service(s)</TableCell>
                    {/* <Divider orientation="vertical"  /> */}
                    <TableCell>Time-Limit Prescribed as per PSGA</TableCell>
                    {/* <Divider orientation="vertical" flexItem /> */}
                    <TableCell>Total No. of Application Received</TableCell>
                    <TableCell>Total No. of Application Approved</TableCell>
                    <TableCell>Avg. Time</TableCell>
                    <TableCell>Median Time</TableCell>
                    <TableCell>Minimum</TableCell>
                    <TableCell>Maximum</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody style={{color: '#4D004C', fontWeight: 'bold', background: 'linear-gradient(to right, #F5F5FF, #CCCCFF)'}}>
                <TableRow>
                    <TableCell>Application for Permission of Sub-division/development of Land</TableCell>
                    <TableCell>60</TableCell>
                    <TableCell>61</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell>59 days</TableCell>
                    <TableCell>88 days</TableCell>
                    <TableCell>5 days</TableCell>
                    <TableCell>181 days</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Application for Building Plan Permission</TableCell>
                    <TableCell>60</TableCell>
                    <TableCell>13787</TableCell>
                    <TableCell>9502</TableCell>
                    <TableCell>57 days</TableCell>
                    <TableCell>181 days</TableCell>
                    <TableCell>1 days</TableCell>
                    <TableCell>363 days</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Application for Composition of Offences</TableCell>
                    <TableCell>7 </TableCell>
                    <TableCell>352</TableCell>
                    <TableCell>1548</TableCell>
                    <TableCell>98 days</TableCell>
                    <TableCell>182 days</TableCell>
                    <TableCell>1 day</TableCell>
                    <TableCell>365</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Application for Change of Land Use</TableCell>
                    <TableCell>60</TableCell>
                    <TableCell>61</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell>59 days</TableCell>
                    <TableCell>88 days</TableCell>
                    <TableCell>5 days</TableCell>
                    <TableCell>181 days</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Application for Permission of Mobile Tower</TableCell>
                    <TableCell>60</TableCell>
                    <TableCell>13787</TableCell>
                    <TableCell>9502</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                </TableRow>
                </TableBody>
                </Table>
            </TableContainer>
            </Box>
        </React.Fragment>
    )
}

export default DetailTable1;