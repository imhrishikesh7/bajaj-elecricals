import React from 'react'
import './Business.css'
import { motion } from 'framer-motion'
const Business = ({ index }) => {
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
                        Our</motion.h2>
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
                    Businesses</motion.h1>
                </div>
                <motion.p
                className='inter-medium'
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
                    Bajaj Electricals excels in consumer appliances and lighting <br />solutions. Their business portfolio includes a wide range of <br />innovative products loved by consumers across India.</motion.p>
            </div>
            <div className='flex business-row'>
                <div className='overlay-container'>
                    <img className='business-img' src="./business1.jpg" alt="" />
                    <motion.img className='consumer-icon' src="./consumer-blue.svg" alt="" 
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
                    />
                    <motion.h3 className='consumer-tag inter-bold'
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
                            delay: 0.10
                        }
                    }}
                    >
                        Consumer Products</motion.h3>

                    <div class="overlay">
                    <div class="overlay-text">
                            <img className='icon-mono' src="./appliances-mono.svg" alt="" />
                            <h4 className='inter-bold'>Consumer Products</h4>
                            <p className='inter-light'>Nirlep Appliances Private Limited introduced Non-Stick technology to India. Over 50 years, it has become the leading brand in Non-Stick cookware, known for quality and customer satisfaction.</p>
                            <button className='flex ' >Learn more <img className='arrow-right' src="./arrow-right.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
                <div className='overlay-container'>
                    <img className='business-img' src="./business2.jpg" alt="" />
                    <motion.img className='consumer-icon' src="./nirlep-blue.svg" alt="" 
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
                    />
                    <motion.h3 className='consumer-tag inter-bold' 
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
                            delay: 0.10
                        }
                    }}
                    >
                        Nirlep</motion.h3>

                    <div class="overlay">
                    <div class="overlay-text">
                            <img className='icon-mono' src="./nirlep-mono.svg" alt="" />
                            <h4 className='inter-bold'>Nirlep</h4>
                            <p className='inter-light'>Nirlep Appliances Private Limited introduced Non-Stick technology to India. Over 50 years, it has become the leading brand in Non-Stick cookware, known for quality and customer satisfaction.</p>
                            <button className='flex ' >Learn more <img className='arrow-right' src="./arrow-right.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex business-row'>
                <div className='overlay-container'>
                    <img className='business-img' src="./business3.jpg" alt="" />
                    <motion.img className='consumer-icon' src="./fan-blue.svg" alt="" 
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
                    />
                    <motion.h3 className='consumer-tag inter-bold'
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
                            delay: 0.10
                        }
                    }}
                    >
                        Nex</motion.h3>
                    
                    <div class="overlay">
                    <div class="overlay-text">
                            <img className='icon-mono' src="./fan-mono.svg" alt="" />
                            <h4 className='inter-bold'>Nex</h4>
                            <p className='inter-light'>Nirlep Appliances Private Limited introduced Non-Stick technology to India. Over 50 years, it has become the leading brand in Non-Stick cookware, known for quality and customer satisfaction.</p>
                            <button className='flex ' >Learn more <img className='arrow-right' src="./arrow-right.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
                <div className='overlay-container'>
                    <img className='business-img' src="./business4.jpg" alt="" />
                    <motion.img className='consumer-icon' src="./morphy-blue.svg" alt="" 
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
                    />
                    <motion.h3 className='consumer-tag inter-bold'
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
                            delay: 0.10
                        }
                    }}
                    >
                        MorphyRichards</motion.h3>
                   
                    <div class="overlay">
                        <div class="overlay-text">
                            <img className='icon-mono' src="./morphy-mono.svg" alt="" />
                            <h4 className='inter-bold'>MorphyRichards</h4>
                            <p className='inter-light'>Nirlep Appliances Private Limited introduced Non-Stick technology to India. Over 50 years, it has become the leading brand in Non-Stick cookware, known for quality and customer satisfaction.</p>
                            <button className='flex ' >Learn more <img className='arrow-right' src="./arrow-right.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex business-row'>
                <div className='overlay-container5'>
                    <img className='business-img' src="./business5.jpg" alt="" />
                    <motion.img className='consumer-icon' src="./lamp-blue.svg" alt=""
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
                    />
                    <motion.h3 className='consumer-tag inter-bold'
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
                            delay: 0.10
                        }
                    }}
                    >
                        Lightning Solutions</motion.h3>
                    
                    <div class="overlay5">
                    <div class="overlay-text">
                            <img className='icon-mono' src="./lamp-mono.svg" alt="" />
                            <h4 className='inter-bold'>Lightning Solutions</h4>
                            <p className='inter-light'></p>
                            <p className='inter-light '>Nirlep Appliances Private Limited introduced Non-Stick technology to India. Over 50 years, it has become the leading brand in Non-Stick cookware, known for quality and customer satisfaction. it has become the leading brand in Non-Stick cookware, known for quality and customer satisfaction.</p>
                            <button className='flex ' >Learn more <img className='arrow-right' src="./arrow-right.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Business