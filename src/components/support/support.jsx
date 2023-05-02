import React from 'react';
import './support.css';

const support = () => {
  return (
    <div className='support-content'>
      <h2>
        fill out this form, and we'll get <br></br>back to you asap.
      </h2>
      <form action="">
        <label htmlFor="fName">first name: </label>
        <input type="text" id='fName' name='fName'/>
        <label htmlFor="lName">last name: </label>
        <input type="text" id='lName' name='lName'/>
        <label htmlFor="issue">how can we help you: </label>
        <input type="text" id='input' name='input'/>
      </form>
    </div>
  )
}

export default support;
