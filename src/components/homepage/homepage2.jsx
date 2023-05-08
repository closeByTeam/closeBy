import React, { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Slider, Tags, Loader } from '..';
import { Calendar } from '..';
import './homepage.css';

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

const slides = [
  ({ style }) => (
    <animated.div style={{ ...style, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>
        <strong>find an event</strong>
      </h1>
      <Slider />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Calendar />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      <Tags />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{ ...style, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
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
    </animated.div>
  ),
];

const Homepage = () => {

  const handleSubmit = () => {
    setIndex(index + 1);
  };

  const [location, setLocation] = useState('');
  const [index, setIndex] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%, 0, 0)' },
  });


  const nextStep = () => {
    setIndex((index + 1));
  };

  const prevStep = () => {
    setIndex((index - 1 + slides.length));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px' }}>
      {transitions((style, i) => {
        const SlideComponent = slides[i];
        return <animated.div style={{ ...style, position: 'absolute', width: '100%', height: '100%', padding: '20px' }}><SlideComponent style={style} /></animated.div>
      })}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '30px', paddingBottom: '30px' }}>
        <Button disabled={index === 0} variant="contained" onClick={prevStep}>Back</Button>
        <Box sx={{ paddingLeft: '10px', paddingRight: '10px' }} />
        <Button variant="contained" onClick={nextStep}>{index === slides.length - 1 ? 'Submit' : 'Next'}</Button>
      </Box>
    </Box>
  );
};

export default Homepage2;
