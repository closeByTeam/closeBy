import React from 'react';
import './eventForm.css';

const EventForm = ({setState}) => {
    
    return(
        <form className="event-form">
        <label for="eventName">Event name:</label>
        <input className="input" type="text" id="eventName" name="eventName" />
        <label for="eventType">Event type:</label>
        <input className="input" type="text" id="eventType" name="eventType" />
        <br />
        <label for="eventLocation">Event Location:</label>
        <input className="input" type="text" id="eventLocation" name="eventLocation" />
        <label for="eventDate">Event date:</label>
        <input className="input" type="date" id="eventDate" name="eventDate" /> 
        <label for="eventTime">Event time:</label>
        <input className="input" type="time" id="eventTime" name="eventTime" />
        <br />
        <label for="eventDescription">Event description:</label>
        <textarea className="input" rows="5" columns="300" id="eventDescription" name="eventDescription"></textarea>
        <br />
        <button className="button" type="submit" value="Submit">Submit</button>
        <button className="button" type="button" value="Cancel" onClick={() => setState("noForm")}>Cancel</button>
        </form>
    );
};

export default EventForm;