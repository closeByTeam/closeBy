import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState } from "react";
function eventList() {
  const collectionName =
    "Publisher App/PublisherAccountList/EventListAllPublishers";

  const events = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const response = db.collection(collectionName);
    const data = await response.get();
    data.docs.forEach((item) => {
      setEvent([...events, item.data()]);
    });
  };

  return (
    <div className="eventList">
      {events &&
        events.map((item) => {
          return (
            <div className="item-container">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p>{item.Date + Time}</p>
              <p>{item.Location}</p>
              <p>{item.Publisher}</p>
            </div>
          );
        })}
    </div>
  );
}

export default eventList;
