import React from 'react';
import Event from './event';
import PublisherViewEvent from './publisherViewEvent';

const PublisherHome = () => {

  //Idea: read all events into array and put them all into publisherHome component
  //Clicking the Add Event Button should replace the button with a form for creating a new event
    return (
      <body>
        <button type='button'>Add Event</button>
        <div>Your Events:</div>
        <PublisherViewEvent />
      </body>
      
    );
  };
  
  export default PublisherHome;