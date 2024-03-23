import React from 'react'
import './Board.css'
import { motion } from 'framer-motion'
const Board = ({ index }) => {
  return (

    <div className='board-container flex' >
      <img className='bajaj-logo-outline-mini' src="./bajaj-logo-outline.svg" alt="" />
      <div className='board-wrapper'>
        <div className='heading-bar-board flex'>
          <div>
            <motion.h2 className='inter-medium board-heading2'
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
              The best of</motion.h2>
            <motion.h1 className='inter-bold board-heading'
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
              Bajaj</motion.h1>
          </div>
        </div>
        <p className='inter-medium bob-text'>Quis potenti egestas curabitur magnis scelerisque tempor semper rhoncus habitasse ultrices a phasellus eget vitae placerat tristique tincidunt ipsum aliquet amet massa cursus est vel eu etiam nascetur imperdiet feugiat integer condimentum porttitor letius augue pellentesque nam vulputate</p>
      </div>
      <motion.img className='best-of-bajaj' src="./best-of-bajaj.svg" alt=""
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          y: index % 2 === 0 ? -40 : 40
      }}
      whileInView={{
          opacity: 1,
          y: 0, // Slide in to its original position
          transition: {
              duration: 0.50, // Animation duration
              delay: 0.20
            }
      }}

       exit={{rotate:0}}
      />
    </div>
  )
}
export default Board;