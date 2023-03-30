import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Slider, Tags, Loader } from '..'
import { Calendar } from '..'
import "./homepage.css";

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

  const LocationButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: 'grey',
    '&:hover': {
      backgroundColor: purple[700],
      color: 'white'
    },
  }));  

const Homepage = () => {
    const [location, setLocation] = useState(null);

    const handleLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    return (
        <div className="app">
          <h1><strong>find an event</strong></h1>
            <Slider />
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Calendar />
            </Box>
            <Typography sx={{display: 'flex', justifyContent: 'center', fontFamily: 'ZonaBlack, sans-serif', fontSize: '30px', paddingBottom: '2px', paddingTop: '25px', color: '#c784ee'}} id="Slider2" gutterBottom>
              pick your interests
            </Typography>
            <Tags />
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 4, paddingBottom: 15}}>
                <ColorButton variant="contained" size="large" sx={{backgroundColor: '#7704ba', width: '150px', height:'40px', fontSize: '20px'}}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href=`/results${location ? `?latitude=${location.latitude}&longitude=${location.longitude}` : ''}`;
                      }}
                    >go!</ColorButton>
            </Box>
            <LocationButton sx={{backgroundColor: 'grey', color: 'white', borderColor: 'white'}} variant="outlined" onClick={handleLocation}>
              Get My Location
            </LocationButton>
      </div>
    );
};

export default Homepage;