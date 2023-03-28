import React from 'react';
import Event from './event';
import { useState } from 'react'
import EventForm from './eventForm';


const PublisherViewEvent = () => {

    //eventArray will be the events in the database that are visible to the publisher
    const eventArray = [<Event />, <Event />, <Event />]
    const [state, setState] = useState('noModifyForm');
    //modify event will bring up the form to add an event only it will be prefilled with the data from the event selected for modification
    //delete event will make the event no longer visible to the publisher
    const listEvents = eventArray.map((events) =>
        <body className='Event'>
            <div>{events}</div>
            <button type='button'>Modify Event</button>
            <button type='button'>Delete Event</button>  
        </body>
    );

    return (
        <body className='publisherViewEvent'>
            {state === 'noModifyForm' && (
            <div>{listEvents}</div>
            )}
            {state === 'modifyFormAvailable' && (
                <EventForm />
            )}
        </body>
      );
}

export default PublisherViewEvent;