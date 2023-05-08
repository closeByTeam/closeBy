import React from 'react';
import './support.css';

const support = () => {
  return (
    <div className='support-content'>
      <h2>
        fill out this form, and we'll resolve <br></br>your issue as soon as possible!
      </h2>
      <form className="support-form" action="">
        <label htmlFor="fName">first name: </label>
        <input type="text" id='fName' name='fName'/>
        <label htmlFor="lName">last name: </label>
        <input type="text" id='lName' name='lName'/>
        <label htmlFor="org">organization: </label>
        <input type="text" id='org' name='org'/>
        <label htmlFor="email">email: </label>
        <input type="text" id='email' name='email'/>
        <label htmlFor="issue">how can we help you: </label>
        <input type="text" id='input' name='input'/>
        <br />
        <input type="submit" value="Submit" className='submit'></input>
      </form>
    </div>
  )
}

export default support;
