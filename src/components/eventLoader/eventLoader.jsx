import React, {useState, useEffect} from "react";

import firebaseConfig from "../../firebase";

function events(){
const [events, setEvents] = useState([]);
const [loading, setLoading] = useState(false);

const ref = firebaseConfig.firestore().collection("events");

function getEvents() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
            items.push(doc.data());
        });
        setEvents(items);
        setLoading(false);
    });
}

useEffect(() => {
    getEvents();
}, []);

if (loading) {
    return <h1>loading...</h1>;
}

return(
    <div>
        <h1>Events</h1>
        {events.map((event1) => (
            <div key={event1.id}>
                <h2>{event1.title}</h2>
                <p>event1.description</p>
            </div>
        ))}
    </div>
    );
}

export default events;
