import React from 'react';
import PublisherViewEvent from './publisherViewEvent';
import { useState } from 'react'
import EventForm from './eventForm';

const PublisherHome = () => {
  //Idea: read all events into array and put them all into publisherHome component
  //Clicking the Add Event Button should replace the button with a form for creating a new event

  const [state, setState] = useState('noForm');
  //const [state, setState] = useState('formAvailable'); //Delete after, only for testing
    return (
      <body>
        {state === 'noForm' && (
          <body>
            <button type='button' onClick={() => setState("formAvailable")}>Add Event</button> 
            <div>Your Events:</div>
            <PublisherViewEvent />
          </body>          
        )}
        {state === 'formAvailable' && (
          <EventForm /> 
        )}        
      </body>
      
    );
  };
  
  export default PublisherHome;