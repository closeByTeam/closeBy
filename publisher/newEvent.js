import React, { useState } from "react";

export const Event = ({ eventName, date, time, location, description, category,}) => (
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
            </tbody>
        </table>
    </div>
);