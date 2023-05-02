import React from 'react';
import EventForm from '../eventHandler/eventForm';


const PublisherViewEvent = ({handleModify}) => {

    //eventArray will be the events in the database that are visible to the publisher
    const eventArray = [<EventForm />, <EventForm />, <EventForm />] //instead of eventForm use the prexisting event mockup
    //modify event will bring up the form to add an event only it will be prefilled with the data from the event selected for modification
    //modify event will pass the data to the form in publisher home and set the state to display the form
    const listEvents = eventArray.map((events) =>
        <div>
            <div>{events}</div>
            <button type='button' onClick = {() => handleModify()}>Modify Event</button>
            <button type='button' onClick = {() => handleDelete()}>Delete Event</button>  
        </div>
    );

    const handleDelete = () => {
        //make the event no longer visible to the publisher
    }

    return (
        <body>
            <div>{listEvents}</div>
        </body>
      );
}

export default PublisherViewEvent;