import React from 'react'
import { LocationAutoComplete } from '..'
import './location.css'


const location = () => {

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

  return (
    <div className='container'>
        <div className='inner-container'>
                <button className='button' onClick={handleLocation}>
            <div className='location-button'>
                <svg xmlns="http://www.w3.org/2000/svg" 
                className='pin-icon'
                viewBox="0 0 24 24"><path d="M18,4.48a8.45,8.45,0,0,0-12,12l5.27,5.28a1,1,0,0,0,1.42,0L18,16.43A8.45,8.45,0,0,0,18,4.48ZM16.57,15,12,19.59,7.43,15a6.46,6.46,0,1,1,9.14,0ZM9,7.41a4.32,4.32,0,0,0,0,6.1,4.31,4.31,0,0,0,7.36-3,4.24,4.24,0,0,0-1.26-3.05A4.3,4.3,0,0,0,9,7.41Zm4.69,4.68a2.33,2.33,0,1,1,.67-1.63A2.33,2.33,0,0,1,13.64,12.09Z"/></svg>
                    <h2>use my location</h2>
            </div>
                    </button>
            <h2>or</h2>
            <div className='location-input'>
                <button className='search-button'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.29 21.14" className='search-icon'>
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_1-2" data-name="Layer 1">
                            <path className="cls-1" d="M21,18.64l-5.27-4.88A8.68,8.68,0,1,0,13.5,15.9l5.4,5a1,1,0,0,0,1.33-.05L21,20A1,1,0,0,0,21,18.64ZM8.68,14.36a5.68,5.68,0,1,1,5.68-5.68A5.69,5.69,0,0,1,8.68,14.36Z"/>
                            </g>
                        </g>
                </svg>
                </button>
                <LocationAutoComplete />

            </div>
    </div>
    </div>
  )
}

export default location;