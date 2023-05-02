import React, { useState } from "react";
import ReactDOM from "react-dom";
import './login.css';

const Login = ({onSave}) => {

const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);

const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
];

const errors = {
    uname: "invalid username",
    pass: "invalid password"
};



const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
);

const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
        if (userData.password !== pass.value) {
        // Invalid password
         setErrorMessages({ name: "pass", message: errors.pass });
        } else {
        setIsSubmitted(true);
        }
    } else {
     // Username not found
        setErrorMessages({ name: "uname", message: errors.uname });
    }
};

const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="basic-text">Username </label>
          <input className="text-input" type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label className="basic-text">Password </label>
          <input className="text-input" type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input className="button" type="submit" />
        </div>
      </form>
    </div>
);

return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? onSave() : renderForm}
      </div>
    </div>
  );
}

  export default Login;