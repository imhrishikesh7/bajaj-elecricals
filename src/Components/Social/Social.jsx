import React from 'react'
import './Social.css'
const Social = () => {
  return (
    <div className='social-container flex'>
        <div className='inner-social'>
        <img className='social-icons' src="/instagram.svg" alt="" />        
        <img className='social-icons' src="/facebook.svg" alt="" />        
        <img className='social-icons' src="/twitter.svg" alt="" />        
        <img className='social-icons' src="/linkedin.svg" alt="" />        
        </div>
        <h6 className='poppins-medium'>+01 777-222-3434</h6>
    </div>
  )
}

export default Social