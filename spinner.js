import React, { Component } from 'react'
import Loading from './Loading.gif'
import './spinner.css'
const Spinner =()=> {
  
    return (
      <div className='text-center'>
        <img src={Loading} alt="Loading" />
      </div>
    )
  }
export default Spinner
