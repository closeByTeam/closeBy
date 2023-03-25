import React from 'react';

const Event = () => {
    //actual data should be retrieved from database
    return (
        <body className='Event'>
            <div id="name">name</div>
            <div id="location">location</div>
            <div id="date">date</div>
            <div id="time">time</div>
            <div id="type">type</div>
            <div id="description">description</div>
            <div id="created_by">created_by</div>
            <div id="contact">contact</div>
            <div></div>
        </body>
      );
}

export default Event;