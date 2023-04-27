import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";

import "./results.css";

function Results() {
  const collectionName = "Publisher App/PublisherAccountList/EventListAllPublishers";

  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedEventDateTimeString, setSelectedEventDateTimeString] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const eventsArray = [];
    querySnapshot.forEach((doc) => {
      eventsArray.push({ ...doc.data(), id: doc.id });
    });

    eventsArray.sort((a, b) => {
      const aTime = a.Time ? a.Time.toDate() : null;
      const bTime = b.Time ? b.Time.toDate() : null;
      return aTime - bTime;
    });

    setEvents(eventsArray);
  };

  const handleItemClick = (itemId) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event) => {
        if (event.id === itemId) {
          return { ...event, isExpanded: !event.isExpanded };
        }
        return { ...event, isExpanded: false };
      });
      return updatedEvents;
    });
  
    setSelectedEvent((prevSelectedEvent) => {
      if (prevSelectedEvent === itemId) {
        return null;
      } else {
        return itemId;
      }
    });
  
    const selectedEventObj = events.find((event) => event.id === itemId);
    const time = selectedEventObj.Time ? selectedEventObj.Time.toDate() : null;
    setSelectedEventDateTimeString(time ? `${time.toLocaleDateString()} ${time.toLocaleTimeString()}` : null);
  };
  

  const selectedEventObj = events.find((event) => event.id === selectedEvent);

            return (
              <div className="eventList">
              <div className="item-list">
                {events &&
                  events.map((item) => {
                    const time = item.Time ? item.Time.toDate() : null;
                    const dateTimeString = time ? `${time.toLocaleDateString()} ${time.toLocaleTimeString()}` : null;
            
                    return (
                      <div
                        className={`item-container ${item.isExpanded ? "is-expanded" : ""} ${selectedEvent === item.id ? "is-selected" : ""}`}
                        key={item.id}
                        onClick={() => handleItemClick(item.id)}
                      >
                        <h4>{item.EventName}</h4>
                        {dateTimeString && <p>{dateTimeString}</p>}
                        <p>{item.Location}</p>
                      </div>
                    );
                  })}
              </div>
              {selectedEventObj && (
                <div className="selected-event">
                  <h4>{selectedEventObj.EventName}</h4>
                  <h5>{selectedEventObj.Location}</h5>
                  <h5>{selectedEventDateTimeString}</h5>
                  <p>{selectedEventObj.Description}</p>
                  <h5>Tags:</h5>
                  <div className="tags">
                  <p>{selectedEventObj.Category}</p>
                  </div>
                  <p>{selectedEventObj.Publisher.Account} </p>
                  <div className="link">
                    <p>
                      <a href="" target="_blank">Learn More</a>
                    </p>
                  </div>
                  <div className="rsvp">
                    <a href="" target="_blank">RSVP</a>
                  </div>
                </div>
              )}
            </div>
            
  );
}

export default Results;
