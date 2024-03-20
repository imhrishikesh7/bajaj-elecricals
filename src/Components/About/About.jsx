import React from 'react'
import './About.css'
const About = () => {
    return (
        <div>
            <div className='heading-bar flex'>
                <div>
                    <h2 className='inter-medium'>About</h2>
                    <h1 className='inter-bold'> Bajaj Electricals</h1>
                </div>
                <p>
                    Globally renowned Bajaj Electricals, part of $100bn <br /> Bajaj Group, excels in consumer appliances and <br />lighting solutions for nearly 85 years.
                </p>
            </div>
            <div className='flex about-poster-container'>
                <img className='about1' src="./about1.svg" alt="" />
                <img className='cta-arrow' src="./cta-arrow.svg" alt="" />
                <img className='about2' src="./about2.svg" alt="" />
            </div>
        </div>
    )
}

export default About