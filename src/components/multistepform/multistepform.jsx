import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Distance, Calendar, Tags, Location } from '..';

import NextIcon from '../../images/icons/circle-arrow-right.svg';
import PrevIcon from '../../images/icons/circle-arrow-left.svg';

import './multistepform.css';

const motionVariants = {
  enter: {
    x: '100%',
    opacity: 0
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: {
    zIndex: 0,
    x: '-100%',
    opacity: 0
  }
};

const multistepform = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step => step + 1);
  };

  const prevStep = () => {
    setStep(step => step - 1);
  };

  return (
    <div className="multi-step-form">
      <motion.div
        className="step-container"
        key={step}
        initial="enter"
        animate="center"
        exit="exit"
        variants={motionVariants}
      >
    {step === 1 && (
        <div className='container3'>
             <Distance nextStep={nextStep} />
        </div>
    )}
      {step === 2 && (
        <div className='bcontainer'>
          <button className="back-button" onClick={prevStep}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.29,11.29a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42-1.42L11.41,13H15a1,1,0,0,0,0-2H11.41l1.3-1.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.42,0ZM2,12A10,10,0,1,0,12,2,10,10,0,0,0,2,12Zm18,0a8,8,0,1,1-8-8A8,8,0,0,1,20,12Z"/></svg>
          </button>
          <div className='container2'>
          <Calendar nextStep={nextStep} prevStep={prevStep} />
          </div>
        </div>
      )}
      {step === 3 && (
        <div className='bcontainer'>
          <button className="back-button" onClick={prevStep}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.29,11.29a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42-1.42L11.41,13H15a1,1,0,0,0,0-2H11.41l1.3-1.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.42,0ZM2,12A10,10,0,1,0,12,2,10,10,0,0,0,2,12Zm18,0a8,8,0,1,1-8-8A8,8,0,0,1,20,12Z"/></svg>
          </button>
          <div className='container2'>
          <Tags nextStep={nextStep} prevStep={prevStep} />
          </div>
        </div>
      )}
      {step === 4 && (
        <div className='bcontainer'>
          <button className="back-button" onClick={prevStep}>
          <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className='back-button'
          ><path d="M8.29,11.29a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42-1.42L11.41,13H15a1,1,0,0,0,0-2H11.41l1.3-1.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.42,0ZM2,12A10,10,0,1,0,12,2,10,10,0,0,0,2,12Zm18,0a8,8,0,1,1-8-8A8,8,0,0,1,20,12Z"/></svg>
          </button>
          <div className='container2'>
          <Location prevStep={prevStep} />
          </div>
        </div>
      )}
      {step !== 4 && (
        <div>
        <button className="next-button" onClick={nextStep}>
            <svg xmlns="http://www.w3.org/2000/svg"
            className="next-button"
            viewBox="0 0 24 24"
            >
             <path d="M15.71,12.71a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-3-3a1,1,0,0,0-1.42,1.42L12.59,11H9a1,1,0,0,0,0,2h3.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0ZM22,12A10,10,0,1,0,12,22,10,10,0,0,0,22,12ZM4,12a8,8,0,1,1,8,8A8,8,0,0,1,4,12Z"/>
             </svg>
        </button>
        </div>
      )}
      </motion.div>
    </div>
  );
};

export default multistepform;
