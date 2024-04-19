import React from 'react';
import WaterWave from 'react-water-wave';
import { motion } from 'framer-motion';
import SusImg from '/sus-img.jpg'; // Correct the import path for the image
import "./Sustainability.css"
const Sustainability = ({ index }) => {
    return (
        <div className='sus-container'>
            <WaterWave
                style={{ width: '100%', height: '80vh', imageRendering: 'pixelated' }} 
                imageUrl={SusImg}
                resolution={512}
            >
                {/* Wrap the content inside a function */}
                {({ drop }) => (
                    <div className='sus-wrapper'>
                        <div className='heading-bar-sus flex'>
                            <div>
                                <motion.h1 className='inter-bold sus-heading'
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
                                    }}>
                                    Sustainability
                                </motion.h1>
                            </div>
                        </div>
                        <p className='inter-medium sus-text'>At Bajaj Electricals, our commitment to mitigating the negative impact on the
                            environment includes eco-conscious efforts leveraged by responsible practices. We
                            remain steadfast in our efforts to save natural resources and create a better and
                            greener future for all. Our Green India and Clean India initiatives testify to our
                            commitment to ensuring environmental sustainability.</p>
                    </div>
                )}
            </WaterWave>
        </div>
    );
};

export default Sustainability;
