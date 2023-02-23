import React, { useState } from "react";

export const Event = ({ eventName, date, time, location, description, category, creator, contact}) => (
    <div id="eventView">
        <h3>Event:{" "} {eventName}</h3>
        <table>
            <tbody>
                <tr>
                    <td>Date: </td>
                    <td>{date}</td>
                </tr>
                <tr>
                    <td>Time: </td>
                    <td>{time}</td>
                </tr>
                <tr>
                    <td>Location: </td>
                    <td>{location}</td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td>{description}</td>
                </tr>
                <tr>
                    <td>Event Type: </td>
                    <td>{category}</td>
                </tr>
                <tr>
                    <td>Created By: </td>
                    <td>{creator}</td>
                </tr>
                <tr>
                    <td>Contact Information: </td>
                    <td>{contact}</td>
                </tr>
            </tbody>
        </table>
        <button type="button" id="modifyEvent">Modify Event</button>
        <button type="button" id="deleteEvent">Delete Event</button>
    </div>
);

export const CreateEvent = ({}) => (
    <div id="createEvent">
        <button type="button" id="createEvent">Create New Event</button>
    </div>
);