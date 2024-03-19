import React from 'react'
import { motion } from 'framer-motion'

const Heading = ({ index, heading }) => {
    return (

        <motion.h1
        className='poppins-bold'
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
            {heading}
        </motion.h1>

    )
}

export default Heading