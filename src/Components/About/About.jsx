import React from 'react'
import './About.css'
import { motion } from 'framer-motion'
const About = ({ index }) => {
    return (
        <div>
            <div className='heading-bar-about flex'>
                <div>
                    <motion.h2 className='inter-medium about-heading2'
                    initial={{
                        opacity: 0,
                        // if odd index card,slide from right instead of left
                        x: index % 2 === 0 ? 20 : -20
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0, // Slide in to its original position
                        transition: {
                            duration: 0.50 // Animation duration
                        }
                    }}
                    >
                        About</motion.h2>
                    <motion.h1 className='inter-bold about-heading'
                    initial={{
                        opacity: 0,
                        // if odd index card,slide from right instead of left
                        x: index % 2 === 0 ? 20 : -20
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0, // Slide in to its original position
                        transition: {
                            duration: 0.50, // Animation duration
                            delay: 0.20
                        }
                    }}
                    > 
                    Bajaj Electricals</motion.h1>
                </div>
                <motion.p
                initial={{
                    opacity: 0,
                    // if odd index card,slide from right instead of left
                    y: index % 2 === 0 ? -50 : 50
                }}
                whileInView={{
                    opacity: 1,
                    y: 0, // Slide in to its original position
                    transition: {
                        duration: 0.50, // Animation duration
                    }
                }}
                >
                    Globally renowned Bajaj Electricals, part of $100bn <br /> Bajaj Group, excels in consumer appliances and <br />lighting solutions for nearly 85 years.
                </motion.p>
            </div>
            <div className='flex about-poster-container'>
                <div className='about1-wrapper'>
                    <img className='about1' src="./about1.svg" alt="" />
                <img className='cta-arrow' src="./cta-arrow.svg" alt="" />
                <p className='about1-text'>
                We're lighting the way towards <br /> the nation's journey of progress.
                </p>
                </div>
                <img className='about2' src="./lightn.svg" alt="" />
            </div>
        </div>
    )
}

export default About