/* eslint-disable arrow-body-style */
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import { Slider, Tags,} from '..'

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
            <Tags />
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 3}}>
                <ColorButton variant="Contained" size="large" sx={{
                    width: 110,
                    }}
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