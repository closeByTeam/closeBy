import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Navbar, Homepage, Support, Results, Loader } from './components';


function App () {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  let component 
  switch (window.location.pathname) {
    case "/":
      component = <Homepage /> 
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