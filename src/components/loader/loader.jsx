import React from 'react'
import { LeapFrog } from '@uiball/loaders'
import './loader.css'

const loader = () => {
  return (
    <div className="loader-container">
      <LeapFrog 
      size={80}
      speed={2.5} 
      color="#c784ee" 
      />
    </div>
  )
}

export default loader;