
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js'
import {
    getFirestore, collection, getDocs,
    addDoc, deleteDoc, doc
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

//get collection data
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

//adding documents
const addEventForm = document.querySelector('.addEvent');
addEventForm.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc(colRef, {
        name: addEventForm.name.value,
        date: addEventForm.date.value,
        time: addEventForm.time.value,
        location: addEventForm.location.value,
        description: addEventForm.description.value,
        categories: addEventForm.categories.value
    })
        .then(() => {
            addEventForm.reset()
        })
})

        ////deleting documents... uncomment if you ever need a 'delete event' type of addition to this
        // const deleteEventForm = document.querySelector('.delete')
        // deleteEventForm.addEventListener('submit', (e) => {
        //     e.preventDefault()

        //     const docRef = doc(db, 'events', deleteEventForm.id.value)
        //     deleteDoc(docRef)
        //         .then(() =>{
        //             deleteEventForm.reset();
        //         })
        // })