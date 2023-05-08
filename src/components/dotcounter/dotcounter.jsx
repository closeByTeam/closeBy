import React, { useState } from 'react';
import './dotcounter.css';

function dotcounter({ numSteps, currentStep }) {
  const [dots, setDots] = useState([]);

  // create an array of SVG elements for the dots
  const createDots = () => {
    const dotsArray = [];
    for (let i = 1; i <= numSteps; i++) {
      const color = i === currentStep ? '#7704ba' : '#C784EE'; // change color based on current step
      dotsArray.push(
        <svg key={i} height="10" width="10" style={{ margin: '0 10px' }}>
          <circle cx="5" cy="5" r="5" fill={color} />
        </svg>
      );
    }
    setDots(dotsArray);
  };
  

  // call createDots function when component mounts or currentStep changes
  React.useEffect(() => {
    createDots();
  }, [currentStep]);

  return <div className='dot-container'>{dots}</div>;
}

export default dotcounter;