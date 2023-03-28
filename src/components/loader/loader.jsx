import React from 'react'
import { Waveform } from '@uiball/loaders'

const loader = () => {
  return (
    <Waveform 
        size={40}
        lineWeight={3.5}
        speed={1} 
        color="black" 
    />
  )
}

export default loader