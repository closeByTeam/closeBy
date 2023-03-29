import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";


function results() {
  const collectionName = "Publisher App/PublisherAccountList/EventListAllPublishers";
  const timeVar = "Date+Time";

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
              <p>{item.Description}</p>
              <p>{item.Location}</p>
              {item.Publisher && item.Publisher.Account && (
      <p>{item.Publisher.Account}</p>
    )}
            <ul>
            {item.Category && item.Category.map((category, index) => (
  <p key={index}>{category}</p>
))}
    </ul>
            </div>
          );
        })}
    </div>
  );
}

export default results;
