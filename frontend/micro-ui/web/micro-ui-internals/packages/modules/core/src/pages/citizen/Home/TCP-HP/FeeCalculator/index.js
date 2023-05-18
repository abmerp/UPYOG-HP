import React, { useState } from 'react';
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Typography,
} from '@mui/material';
import Form11 from './Form11';
import Form12 from './Form12';
import Form26 from './Form26';


const FormType = () => {
  const [selectedOption, setSelectedOption] = useState('first');

  const getComponentToRender = () => {
    switch (selectedOption) {
      case 'first':
        return <Form11 />;
      case 'second':
        return <Form12 />;
      case 'third':
        return <Form26 />;
      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      <FormControl component="fieldset">
        <Typography variant="h6" gutterBottom>
          Choose an option:
        </Typography>
        <RadioGroup
          aria-label="option"
          name="option"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <FormControlLabel
            value="first"
            control={<Radio />}
            label="First option"
          />
          <FormControlLabel
            value="second"
            control={<Radio />}
            label="Second option"
          />
          <FormControlLabel
            value="third"
            control={<Radio />}
            label="Third option"
          />
        </RadioGroup>
      </FormControl>
      {getComponentToRender()}
    </React.Fragment>
  );
};

export default FormType;
