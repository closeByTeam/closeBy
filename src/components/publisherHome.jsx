import React from 'react';
import PublisherViewEvent from './publisherViewEvent';
import { useState } from 'react'
import EventForm from './eventForm';

const PublisherHome = () => {
  //Idea: read all events into array and put them all into publisherHome component
  //Clicking the Add Event Button should replace the button with a form for creating a new event

  const [state, setState] = useState('noAddForm');
    return (
      

      <body>
        {state === 'noAddForm' && (
        <button type='button'>Add Event</button> 
        )}
        {state === 'addFormAvailable' && (
        <EventForm /> 
        )}
        <div>Your Events:</div>
        <PublisherViewEvent />
      </body>
      
    );
  };
  
  export default PublisherHome;