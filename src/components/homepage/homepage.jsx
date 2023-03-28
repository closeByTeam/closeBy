/* eslint-disable arrow-body-style */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import { Slider, Tags, Loader } from '..'
import { Calendar } from '..'

import logo from "../../images/white-logo.png";

import "./homepage.css";

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));


const homepage = () => {
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
                <ColorButton variant="Contained" size="large" sx={{backgroundColor: '#7704ba', width: '150px', height:'40px', fontSize: '20px'}}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href='/results';
                      }}
                    >go!</ColorButton>
            </Box>
      </div>
    );

};

export default homepage;