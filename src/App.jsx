/* eslint-disable arrow-body-style */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { useState , useCallback} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublisherHome from './components/publisherHome';
import Login from './components/Login';



export const App = () => {
  const [view, setView] = useState("Login");
  
  const transitionToLogin = useCallback(
    () => setView("Login"),
    []
  );

  const transitionToPublisherHome = useCallback(
    () => setView("PublisherHome"),
    []
  );

  switch (view) {
    case "Login":
      return (
        <Login onSave={transitionToPublisherHome}/>
      );
    case "PublisherHome":
      return (
        <PublisherHome />
      );
    default:
      return (
        <Login />
      );
  }
};

export default App;
