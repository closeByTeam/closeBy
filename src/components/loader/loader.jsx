import React from 'react'
import { Waveform } from '@uiball/loaders'

import './loader.css'

const loader = () => {
  return (
    <div className="loader-container">
    <Waveform 
        size={40}
        lineWeight={3.5}
        speed={1} 
        color="grey" 
    />
    </div>
  )
}

export default loader;