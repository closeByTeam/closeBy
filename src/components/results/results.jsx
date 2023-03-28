import React from 'react'
import eventList from './eventList'
import './results.css'

const results = () => {
   
  return (
    <div class='results-content' id='firebaseGet'>
      
      <ul class='eventList' id='eventList'>
        <eventList />
      </ul>

    </div>
  )
}

export default results;