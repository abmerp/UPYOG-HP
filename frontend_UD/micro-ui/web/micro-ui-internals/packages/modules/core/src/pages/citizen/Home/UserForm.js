import React from "react";
import { TextField } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel} from '@material-ui/core';
import { Button } from '@material-ui/core';




const useStyles = makeStyles({
    container: {
      color: 'white', 
    },
    checked: {
        color: 'white', 
        borderRadius: '50%'
    },
  });
  
const UserForm = () => {
    const classes = useStyles(); 
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [feedbackChecked, setFeedbackChecked] = React.useState(false);
  const [complaintChecked, setComplaintChecked] = React.useState(false);


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleIsAgreedChange = (event) => {
    setFeedbackChecked(event.target.checked);
    setComplaintChecked(event.target.checked)
  };

  return (
    <div style={{marginLeft: '30px'}}>
    <FormControl component="fieldset" className={classes.container}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
      <FormLabel component="legend" style={{color: 'white', margin: '20px'}}>Choose type:</FormLabel>
      <FormGroup style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
        <FormControlLabel
          control={<Checkbox style={{color: 'white', borderRadius: '50%'}} checked={feedbackChecked} onChange={handleIsAgreedChange} />}
          label="Feedback"
        />
        <FormControlLabel
          control={<Checkbox style={{color: 'white', borderRadius: '50%'}} checked={complaintChecked} onChange={handleEmailChange} />}
          label="Complaint"
        />
      </FormGroup>
      </div>
    </FormControl>
    <div style={{display: 'flex', flexDirection: 'row'}}>
    <TextField
        value={name}
        onChange={handleNameChange}
        margin="normal"
        placeholder="Enter Your Name"
        InputProps={{
            style: {
              color: 'white',
              border: '1px solid white',
              width: '250px',
              height: '40px',
              margin: '10px'
            }
          }}
          InputLabelProps={{
            style: { color: '#fff', padding: '4px 10px', }
          }}
      />
      <TextField
        value={email}
        onChange={handleEmailChange}
        margin="normal"
        placeholder="Enter Your email ID"
        InputProps={{
            style: {
                color: 'white',
                border: '1px solid white',
                width: '250px',
                height: '40px',
                margin: '10px'
              }
          }}
          InputLabelProps={{
            style: { color: 'white' }
          }}
      />
      </div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
      <TextField
        value={phone}
        onChange={handlePhoneChange}
        fullWidth
        margin="normal"
        placeholder="Enter your Mobile No."
        InputProps={{
            style: {
                color: 'white',
                border: '1px solid white',
                width: '250px',
                height: '40px',
                margin: '10px'
              }
          }}
          InputLabelProps={{
            style: { color: 'white' }
          }}
      />
      <TextField
        value={address}
        onChange={handleAddressChange}
        fullWidth
        margin="normal"
        placeholder="Enter Subject"
        InputProps={{
            style: {
                color: 'white',
                border: '1px solid white',
                width: '250px',
                height: '40px',
                marginTop: '10px',
              }
          }}
          InputLabelProps={{
            style: { color: 'white' }
          }}
      />
      </div>
      <TextField
        value={message}
        onChange={handleMessageChange}
        type="text"
        fullWidth
        multiline
        margin="normal"
        placeholder="Enter your Message"
        InputProps={{
            style: {
                color: 'white',
                border: '1px solid white',
                width: '530px',
                height: '80px',
                margin: '10px'
              }
          }}
          InputLabelProps={{
            style: { color: 'white' }
          }}
      />
      <TextField
        value={address}
        onChange={handleAddressChange}
        margin="normal"
        placeholder="Enter Code"
        InputProps={{
            style: {
                color: 'white',
                border: '1px solid white',
                width: '250px',
                height: '40px',
                margin: '10px'
              }
          }}
          InputLabelProps={{
            style: { color: 'white' }
          }} 
      />
      <TextField
        value={address}
        onChange={handleAddressChange}
        margin="normal"
        placeholder="Enter Code"
        InputProps={{
            style: {
                color: 'white',
                border: '1px solid white',
                width: '250px',
                height: '40px',
                margin: '10px'
              }
          }}
          InputLabelProps={{
            style: { color: 'white' }
          }} 
      />
      <Button style={{color: 'white', width: '100px', padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '10px', background: 'linear-gradient(to right, #659EC7, #151B54)' }}>Submit</Button>
    </div>
  );
};

export default UserForm;
