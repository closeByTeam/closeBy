import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';

import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import * as React from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Food',
  'Music',
  'Art',
  'Charity',
  'Sports',
];

const theme = createTheme({
  overrides: {
    MuiChip: {
      root: {
        backgroundColor: purple[500],
        color: 'white',
      },
    },
  },
});

export default function Tags() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div>
          <FormControl sx={{ m: 1, width: 400, color: '#6B3FB1', outlineColor: '#6B3FB1', borderColor: '#6B3FB1', }}>
            <InputLabel id="demo-multiple-checkbox-label" sx={{color: '#6B3FB1', borderColor: '#6B3FB1', outlineColor: '#6B3FB1',
                            '&:hover': {color: '#6B3FB1'},
                            '&focused': {color: '#6B3FB1'},
                            '&notchedOutline': {borderColor: '#6B3FB1'}
          }}>Event Types</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput 
                sx={{ color: '#6B3FB1', outlineColor: '#6B3FB1', borderColor: '#6B3FB1',
                '&:hover': {color: '#6B3FB1'},
                '&focused': {color: '#6B3FB1'},
                '&notchedOutline': {borderColor: '#6B3FB1'}
              }}
                label="Event Types" />}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name} sx={{color: '#6B3FB1'}}>
                  <Checkbox sx={{color: '#6B3FB1'}}
                  checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Box>
    </ThemeProvider>
  );
}
