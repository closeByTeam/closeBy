import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";

import "./results.css";

function results() {
  const collectionName = "Publisher App/PublisherAccountList/EventListAllPublishers";

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const eventsArray = [];
    querySnapshot.forEach((doc) => {
      eventsArray.push(doc.data());
    });
  
    eventsArray.sort((a, b) => {
      const aTime = a.Time ? a.Time.toDate() : null;
      const bTime = b.Time ? b.Time.toDate() : null;
      return aTime - bTime;
    });
  
    setEvents(eventsArray);
  };

  return (
    <div className="eventList">
      {events &&
        events.map((item) => {
          const time = item.Time ? item.Time.toDate() : null;
          const dateTimeString = time ? `${time.toLocaleDateString()} ${time.toLocaleTimeString()}` : null;
          console.log(item);
          return (
            <div className="item-container" key={item.id}>
              <h4>{item.EventName}</h4>
              {dateTimeString && <p>{dateTimeString}</p>}
              <p>{item.Location}</p>
            </div>
          );
        })}
    </div>
  );
}

export default results;
