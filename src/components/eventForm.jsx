import React from 'react';

const EventForm = () => {
    return(
        <body>
            <form>
            <label for="eventName">Event name:</label>
            <input type="text" id="eventName" name="eventName" />
            <label for="eventType">Event type:</label>
            <input type="text" id="eventType" name="eventType" />
            <br />
            <label for="eventLocation">Event Location:</label>
            <input type="text" id="eventLocation" name="eventLocation" />
            <label for="eventDate">Event date:</label>
            <input type="date" id="eventDate" name="eventDate" /> 
            <label for="eventTime">Event time:</label>
            <input type="time" id="eventTime" name="eventTime" />
            <br />
            <label for="eventDescription">Event description:</label>
            <textarea rows="5" columns="300" id="eventDescription" name="eventDescription"></textarea>
            <br />
            <button type="submit" value="Submit">Submit</button>
            <button type="button" value="Cancel">Cancel</button>
            </form>
        </body>
    );
};

export default EventForm;