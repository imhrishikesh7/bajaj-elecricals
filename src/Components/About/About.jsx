import React from 'react'
import './About.css'
const About = () => {
    return (
        <div>
            <div className='heading-bar-about flex'>
                <div>
                    <h2 className='inter-medium about-heading2'>About</h2>
                    <h1 className='inter-bold about-heading'> Bajaj Electricals</h1>
                </div>
                <p>
                    Globally renowned Bajaj Electricals, part of $100bn <br /> Bajaj Group, excels in consumer appliances and <br />lighting solutions for nearly 85 years.
                </p>
            </div>
            <div className='flex about-poster-container'>
                <div className='about1-wrapper'>
                    <img className='about1' src="./about1.svg" alt="" />
                </div>
                <img className='cta-arrow' src="./cta-arrow.svg" alt="" />
                <p className='about1-text'>
                We're lighting the way towards <br /> the nation's journey of progress.
                </p>
                <img className='about2' src="./lightn.svg" alt="" />
            </div>
        </div>
    )
}

export default About