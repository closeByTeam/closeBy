/* eslint-disable arrow-body-style */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { useState , useCallback, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublisherHome from './components/home/publisherHome';
import Login from './components/login/Login';
import Loader from './components/loader/loader.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Support from './components/support/support.jsx';
import About from './components/about/about.jsx';


function App () {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const transitionToPublisherHome = useCallback(
    () => window.location.pathname = '/PublisherHome',
    []
  );

  let component 
  switch (window.location.pathname) {
    case "/":
      component = <PublisherHome/>
      //component = <Login onSave={transitionToPublisherHome}/> 
      break 
    case "/about":
      component = <About />
      break
    case "/support":
      component = <Support />
      break
    case "/results":
      component = <Results />
      break
    case "/PublisherHome":
      component = <PublisherHome />
      break
  }

  return (
    <>
    {
      loading ? (
        <>
        <Loader />
        </>
      ) : (
      <>
      <Navbar />
      {component}
    </>
  )}
  </>
  );
}

export default App;