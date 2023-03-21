import { CenterFocusStrong, CenterFocusWeakTwoTone } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 5;

export default function Slider2() {

  const [value1, setValue1] = React.useState([0, 15]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };


  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 0, paddingBottom:0, marginTop: -5}}>
      <div>
        <Typography sx={{display: 'flex', justifyContent: 'center', fontFamily: 'Helvetica, sans-serif', fontSize: '50px', paddingBottom: '10px', color: '#c784ee'}} id="Slider2" gutterBottom>
          distance in miles
        </Typography>
      <Box sx={{ width: 400, padddingTop: 0}}>
        <Slider sx={{color: '#7704ba'}}className="distance-slider" 
          getAriaLabel={() => 'minimum distance'}
          value={value1}
          onChange={handleChange1}
          getAriaValueText={valuetext}
          valueLabelDisplay="on"
          disableSwap
          step={5}
          marks
          min={0}
          max={100}
        />
      </Box>
      </div>
    </Box>
  );
}