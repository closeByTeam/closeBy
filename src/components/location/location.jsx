import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const LocationButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: 'grey',
    '&:hover': {
      backgroundColor: purple[700],
      color: 'white',
    },
  }));


  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`${position.coords}`);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

const location = () => {
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 4, paddingBottom: 15 }}>
        <ColorButton
          variant="contained"
          size="large"
          sx={{ backgroundColor: '#7704ba', width: '150px', height: '40px', fontSize: '20px' }}
          onClick={handleSubmit}
        >
          go!
        </ColorButton>
      </Box>
      <LocationButton sx={{ backgroundColor: 'grey', color: 'white', borderColor: 'white' }} variant="outlined" onClick={handleLocation}>
        Get My Location
      </LocationButton>
    </div>
  )
}

export default location;