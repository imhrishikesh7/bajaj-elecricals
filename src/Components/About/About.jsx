import React, { useState } from 'react';
import './About.css';

import { motion } from 'framer-motion';

const About = ({ index }) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    // Random position generator for scattered elements
    const getRandomPosition = () => {
        return `${Math.floor(Math.random() * 0)}%`;
    };

    // Logic for Position aware button start
    const [spanPosition, setSpanPosition] = useState({ top: 0, left: 0 });

    const handleMouseEnter = (e) => {
        const parentOffset = e.currentTarget.getBoundingClientRect();
        const relX = e.clientX - parentOffset.left;
        const relY = e.clientY - parentOffset.top;
        setSpanPosition({ top: relY, left: relX });
    };

    const handleMouseOut = (e) => {
        const parentOffset = e.currentTarget.getBoundingClientRect();
        const relX = e.clientX - parentOffset.left;
        const relY = e.clientY - parentOffset.top;
        setSpanPosition({ top: relY, left: relX });
    };

    const handleAnchorClick = (e) => {
        e.preventDefault();
    };
    // Logic for Position aware button end
    return (
        <div>
            <div className='heading-bar-about'>
                <div className='heading-bar-about-p2'>
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
                    Globally renowned Bajaj Electricals, part of $100bn Bajaj Group, excels in consumer appliances and <br />lighting solutions for nearly 85 years.
                </motion.p>
            </div>
            <a
                className="btn-posnawr"
                href="#"
                onMouseEnter={handleMouseEnter}
                onMouseOut={handleMouseOut}
                onClick={handleAnchorClick}
            >
                Know More About Us
                <span style={{ top: spanPosition.top, left: spanPosition.left }}></span>
            </a>
            <div className='flex about-poster-container'
                onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}
            >

                {/* <motion.div className='about1-wrapper'
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
                </motion.div> */}




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
                <motion.div
                    className="callout top-left-call"
                    animate={{ x: isHovered ? '-120%' : getRandomPosition(), y: isHovered ? '-68%' : getRandomPosition() }}
                    transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                >
                    <h6>₹5,429 Cr</h6>
                    <p>Turnover <br />(FY 22-23)</p>
                </motion.div>
                <motion.div
                    className="callout2 bottom-left-call"
                    animate={{ x: isHovered ? '-120%' : getRandomPosition(), y: isHovered ? '68%' : getRandomPosition() }}
                    transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                >
                    <h6>2,500</h6>
                    <p>Employees</p>
                </motion.div>

                <motion.div
                    className="callout2 top-right-call"
                    animate={{ x: isHovered ? '120%' : getRandomPosition(), y: isHovered ? '-68%' : getRandomPosition() }}
                    transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                >
                    <h6>4K+</h6>
                    <p> Happy <br />Customers</p>
                </motion.div>
                <motion.div
                    className="callout bottom-right-call"
                    animate={{ x: isHovered ? '120%' : getRandomPosition(), y: isHovered ? '68%' : getRandomPosition() }}
                    transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                >
                    <h6>85+</h6>
                    <p>Years of <br />Experience</p>
                </motion.div>
                <motion.div
                className="squared-ab top-left-ab"
                animate={{ x: isHovered ? '190%' : getRandomPosition(), y: isHovered ? '-30%' : getRandomPosition() }}
                transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            ></motion.div>
                <motion.div
                className="squared-ab top-lefta2-ab"
                animate={{ x: isHovered ? '140%' : getRandomPosition(), y: isHovered ? '100%' : getRandomPosition() }}
                transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            ></motion.div>
            <motion.div
                className="squared-ab top-lefta-ab"
                animate={{ x: isHovered ? '90%' : getRandomPosition(), y: isHovered ? '40%' : getRandomPosition() }}
                transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            ></motion.div>
            <motion.div
                className="squared-ab top-right-ab"
                animate={{ x: isHovered ? '-190%' : getRandomPosition(), y: isHovered ? '80%' : getRandomPosition() }}
                transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            ></motion.div>

            <motion.div
                className="squared-ab bottom-left-ab"
                animate={{ x: isHovered ? '300%' : getRandomPosition(), y: isHovered ? '40%' : getRandomPosition() }}
                transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            ></motion.div>
            <motion.img
            src='discover6.svg'
                className="imaged-ab bottom-right-ab"
                animate={{ x: isHovered ? '-130%' : getRandomPosition(), y: isHovered ? '-50%' : getRandomPosition() }}
                transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            ></motion.img>
            <motion.div
                className="squared-ab bottom-righta-ab"
                animate={{ x: isHovered ? '-200%' : getRandomPosition(), y: isHovered ? '-110%' : getRandomPosition() }}
                transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            ></motion.div>

            </div>

        </div>
    );
};

export default About;
