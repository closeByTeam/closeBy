import React, { useState, useEffect } from "react";
import "./locationautocomplete.css";
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField, {  } from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'purple',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'purple',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'purple',
    },
    '&:hover fieldset': {
      borderColor: 'purple',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'purple',
    },
  },
});

function locationautocomplete({ onPlaceSelected }) {
  const [autocomplete, setAutocomplete] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${'AIzaSyCMKkAXKvDA-tpx5r1pst94XayySafz5eo'}&libraries=places`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const input = document.getElementById("autocomplete-input");
      const options = {
        types: ["address"],
        componentRestrictions: { country: "us" },
      };
      const autocomplete = new window.google.maps.places.Autocomplete(input, options);
      setAutocomplete(autocomplete);
    };
  }, []);

  useEffect(() => {
    if (autocomplete) {
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        onPlaceSelected(place);
      });
    }
  }, [autocomplete, onPlaceSelected]);

  return (
    <CssTextField id="autocomplete-input" label="enter your location" variant="filled" className="input" />
  );
}

export default locationautocomplete;
