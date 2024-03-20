import React from 'react'
import './Hero.css'
import Navbar from '../Navbar/Navbar'

const Hero = () => {
    return (
        <div className='hero'>
            <Navbar />
            <img className='outline-svg' src="./outline-svg.svg" alt="" />
            <img className='polygon-bg' src="./polygon-bg.svg" alt="" />
            <div className='hero-content'>
                <h1 className='inter-medium'>Sustainable <br /> practices empower <br /> joyful living</h1>
                <p>Leading with innovative products, sustainable practices, and impactful CSR initiatives, fostering happiness.</p>
                <div className='hero-strip flex'>
                    <button className='inter-bold'>Know More</button>
                    <img src="./users.svg" alt="" />
                    <p><span>1M+</span> Happy Customers</p>
                </div>
            </div>
                <img className='appliances-img' src="./appliances.svg" alt="" />
                <img className='green-square' src="./green-square.svg" alt="" />
                <img className='appliances2' src="./appliances2.svg" alt="" />
                <div className='life-card flex'>
                    <img src="./life-img.svg" alt="" />
                    <p>
                        Nurturing, <br />
                        Passion <br />
                        Inspiring <br />
                        Trust <br />
                        Creating <br />
                        Delight
                    </p>
                </div>
        </div>
    )
}

export default Hero