import React from 'react'

import { ReactComponent as Logo } from '../../styles/assets/directlyapply-logo.svg'


const Hero = () => (
  <div className="hero">
    <div className="hero-logo">
      <Logo />
    </div>
    <div className="hero-title">
      <p className="title">Sign Up!</p> <br></br>
      <p className="subtitle">To gain access to our job platform and <br></br>thousands of potential employers</p>
    </div>
  </div>
)
export default Hero