import { db } from "../../firebase";
import { getDocs, collection, where, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import Tags from "../tags/tags";

import "./results.css";

function Results() {
  const collectionName = "/Events";

  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedEventDateTimeString, setSelectedEventDateTimeString] = useState(null);
  
  console.log(Tags.selectedCategories);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    
    const querySnapshot = await getDocs(collection(db, collectionName)); //where("Buy and Sell", "in", "Categories")); //this is how you seperate by categories
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
                        <h4>{item.Name}</h4>
                        {dateTimeString && <p>{dateTimeString}</p>}
                        <p className="location">{item.Location}</p>
                      </div>
                    );
                  })}
              </div>
              {selectedEventObj && (
                <div className="selected-event">
                  <h4>{selectedEventObj.Name}</h4>
                  <h5>{selectedEventObj.Location}</h5>
                  <h5>{selectedEventDateTimeString}</h5>
                  <p>{selectedEventObj.Description}</p>
                  <h6>Tags:</h6>
                  <div className="tags">
                  <p>{selectedEventObj.Category}</p>
                  </div>
                  <div className="published-by">
                  <p>Published by: {selectedEventObj.Publisher} </p>
                  </div>
                  <div className="link">
                    <p>
                      <a href="" target="_blank">Learn More</a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="link-icom"><path d="M18,10.82a1,1,0,0,0-1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8A1,1,0,0,1,5,7h7.18a1,1,0,0,0,0-2H5A3,3,0,0,0,2,8V19a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V11.82A1,1,0,0,0,18,10.82Zm3.92-8.2a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H15a1,1,0,0,0,0,2h3.59L8.29,14.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V9a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z"/></svg>
                    </p>
                  </div>
                </div>
              )}
            </div>
            
  );
}

export default Results;
