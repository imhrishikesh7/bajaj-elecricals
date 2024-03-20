import React from 'react'
import './Hero.css'
import Navbar from '../Navbar/Navbar'

const Hero = () => {
    return (
        <div className='hero'>
            <Navbar />
            <img className='outline-svg' src="./outline-svg.svg" alt="" />
            <p className='outer-p1 inter-medium'><strong>Fostering</strong> a sense of <strong>empowerment </strong>and collective action</p>
            <p className='outer-p2 inter-medium'>Empower Your Health, Empower Your Life</p>
            <img className='polygon-bg' src="./polygon-bg.svg" alt="" />
            <div className='hero-content'>
                <h1 className='inter-medium'>Sustainable <br /> practices empow<span className='span1'>er</span>  <br /> joyful living</h1>
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
            <span className='span3 inter-medium'>Life @ Bajaj</span>
            <div className='life-card flex'>
                <img src="./life-img.svg" alt="" />
                <p className='inter-medium'>
                    Nurturing, <br />
                    Passion <br />
                    Inspiring <br />
                    Trust <br />
                    Creating <br />
                    Delight
                </p>
            </div>
            <p className='outer-p3 inter-medium'>Track, Transform, Thrive</p>
            <p className='outer-p4 inter-medium'> Chart Your Progress, Celebrate Your Success</p>
        </div>
    )
}

export default Hero