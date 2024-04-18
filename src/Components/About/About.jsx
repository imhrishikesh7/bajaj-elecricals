import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = ({ index }) => {
    return (
        <div>
            <div className='heading-bar-about flex'>
                <div>
                    <motion.h2 className='inter-medium about-heading2'
                        initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? 20 : -20
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 0.50
                            }
                        }}
                    >
                        About
                    </motion.h2>
                    <motion.h1 className='inter-bold about-heading'
                        initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? 20 : -20
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 0.50,
                                delay: 0.20
                            }
                        }}
                    >
                        Bajaj Electricals
                    </motion.h1>
                </div>
                <motion.p
                    initial={{
                        opacity: 0,
                        y: index % 2 === 0 ? -50 : 50
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.50
                        }
                    }}
                >
                    Globally renowned Bajaj Electricals, part of $100bn <br /> Bajaj Group, excels in consumer appliances and <br />lighting solutions for nearly 85 years.
                </motion.p>
            </div>
            <div className='flex about-poster-container'>
                <motion.div className='about1-wrapper'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5 }
                }}
                >
                    <div className="arrow-container">
                        <img className='cta-arrow' src="./cta-arrow.svg" alt="" />
                        <img className='cta-arrow-hover' src="./about-cta-arrow-blue.svg" alt="" />
                    </div>
                    <img
                        className='about1'
                        src="./about1.svg"
                        alt=""
                        
                    />
                    <p className='about1-text'>
                        We're lighting the way towards <br /> the nation's journey of progress.
                    </p>
                </motion.div>
                <motion.img
                    className='about2'
                    src="./video.png"
                    alt=""
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5 }
                    }}
                />
            </div>
        </div>
    );
};

export default About;
