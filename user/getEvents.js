import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js'
import {
    getFirestore, collection, getDocs,
    query, where, doc
} from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = config;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//init services
const db = getFirestore();

//collection reference
const colRef = collection(db, 'events')

const events = [];

const querySnapshot = await getDocs(colRef);

querySnapshot.forEach((doc) => {
    events.push(doc);
    let eventList = document.getElementById("eventList");
    events.forEach((item) => {
        var data = doc.data();
        var name = data.name;
        var categories = data.categories;
        var date = data.date
        var location = data.location;
        var time = data.time;
        var description = data.description;

        let nameListItem = document.createElement("li");
        nameListItem.innerText = name;
        nameListItem.classList.add("nme");

        let categoriesListItem = document.createElement("li");
        categoriesListItem.innerText = categories;
        categoriesListItem.classList.add("cte");

        let dateListItem = document.createElement("li");
        dateListItem.innerText = date;
        dateListItem.classList.add("dte");

        let locationListItem = document.createElement("li");
        locationListItem.innerText = location;
        locationListItem.classList.add("lctn");

        let timeListItem = document.createElement("li");
        timeListItem.innerText = time;
        timeListItem.classList.add("tme");

        let descriptionListItem = document.createElement("li");
        descriptionListItem.innerText = description;
        descriptionListItem.classList.add("dsc");

        eventList.append(nameListItem);
        eventList.append(categoriesListItem);
        eventList.append(dateListItem);
        eventList.append(timeListItem);
        eventList.append(locationListItem);
        eventList.append(descriptionListItem);
    })
})

getDocs(colRef)
    .then((snapshot) => {
        let events = []
        snapshot.docs.forEach((doc) => {
            events.push({ ...doc.data(), id: doc.id })
        })
        console.log(events)
    })
    .catch(err => {
        console.log(err.message)
    })