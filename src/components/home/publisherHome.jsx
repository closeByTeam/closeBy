import PublisherViewEvent from './publisherViewEvent';
import { useState } from 'react'
import EventForm from '../eventHandler/eventForm';
import './publisher.css';

const PublisherHome = () => {
  //Idea: read all events into array and put them all into publisherHome component
  //Clicking the Add Event Button should replace the button with a form for creating a new event

  const [state, setState] = useState('noForm');

  const handleModify = () => {
    setState("formAvailable");
    //still need to retrieve data from event in PublisherViewEvent and put it in the EventForm
  }

    return (
      <body>
        {state === 'noForm' && (
          <body>
            <button className="button" type='button' onClick={() => setState("formAvailable")}>Add Event</button> 
            <div className="text">Your Events:</div>
            <PublisherViewEvent handleModify={handleModify}/>
          </body>          
        )}
        {state === 'formAvailable' && (
          <EventForm setState={setState}/>
        )}        
      </body>
      
    );
  };
  
  export default PublisherHome;