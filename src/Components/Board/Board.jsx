import React from 'react'
import './Board.css'
const Board = () => {
  return (

    <div className='board-container flex' >
      <div className='board-wrapper'>
        <div className='heading-bar-board flex'>
          <div>
            <h2 className='inter-medium board-heading2'>The best of</h2>
            <h1 className='inter-bold board-heading'>Bajaj</h1>
          </div>
        </div>
        <p className='inter-medium bob-text'>Quis potenti egestas curabitur magnis scelerisque tempor semper rhoncus habitasse ultrices a phasellus eget vitae placerat tristique tincidunt ipsum aliquet amet massa cursus est vel eu etiam nascetur imperdiet feugiat integer condimentum porttitor letius augue pellentesque nam vulputate</p>
      </div>
      <img className='best-of-bajaj' src="./best-of-bajaj.svg" alt="" />
    </div>
  )
}
export default Board;