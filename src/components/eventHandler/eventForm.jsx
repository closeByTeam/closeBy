import React from "react";
import "./eventForm.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, doc, updateDoc, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBJPu30vQCvUU1vWsesCAN1KB6FZGd8d50",

  authDomain: "closeby-3949c.firebaseapp.com",

  databaseURL: "https://closeby-3949c-default-rtdb.firebaseio.com",

  projectId: "closeby-3949c",

  storageBucket: "closeby-3949c.appspot.com",

  messagingSenderId: "375301362415",

  appId: "1:375301362415:web:6a01bef5622f157c26011a",

  measurementId: "G-Z01MRTDR70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

// async function addDocToFirestore(name, description, type, location, date, time) {
//   const docRef = await addDoc(collection(db, "Events"),{
//     Name: name,
//     Description: description,
//     Category: type,
//     Location: location,
//     Date: date,
//     Time: time
//   });
//   return(<EventForm/>)
// }
const EventForm = ({ setState }) => {
  
  return (
    <form className="event-form">
      <label for="eventName">Event name:</label>
      <input
        className="input"
        type="text"
        id="eventName"
        name="eventName"
        placeholder={"Event Name Goes Here"}
      />
      <br />
      <br />
      <label for="eventType">Event type:</label>
      <input
        className="input"
        type="text"
        id="eventType"
        name="eventType"
        placeholder="Type of Event (ex.Festival)"
      />
      <br />
      <br />
      <label for="eventLocation">Event Location:</label>
      <input
        className="input"
        type="text"
        id="eventLocation"
        name="eventLocation"
        placeholder="Location of your event"
      />
      <br />
      <br />
      <label for="eventDate">Event date:</label>
      <input className="input" type="date" id="eventDate" name="eventDate" />

      <br />
      <br />
      <label for="eventTime">Event time:</label>
      <input className="input" type="time" id="eventTime" name="eventTime" />
      <br />
      <br />
      <div>
        <label for="eventDescription">Event description:</label>
        <input
          className="input"
          size={60}
          id="eventDescription"
          name="eventDescription"
          placeholder="Describe Your Event Here"
        />
      </div>

      <br />
      <button className="button" type="submit" value="Submit">
        Submit
      </button>
      <button
        className="button"
        type="button"
        value="Cancel"
        onClick={<EventForm></EventForm>}
        //onClick={addDocToFirestore(document.getElementById('eventName'), document.getElementById('eventDescription'), document.getElementById('eventType'), document.getElementById('eventLocation'), document.getElementById('eventDate'), document.getElementById('eventTime'))}
      >
        Cancel
      </button>
    </form>
  );
};
export default EventForm;