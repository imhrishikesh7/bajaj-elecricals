import React from 'react'
import Slider from '../../Components/Slider/Slider'
import Intro from '../../Components/Intro/Intro'
import './Home.css';
import ScrollTriggeredUI from '../../Components/Tiles/ScrollTriggeredUI';
import Cards from '../../Components/Cards/Cards';
import Board from '../../Components/Board/Board';
const Home = () => {
  return (
    <div className='home-container'>
        <Slider/>
        {/* <Slider/> */}
        <Intro/>
        <ScrollTriggeredUI/>
        <Cards/>
        <Board/>
    </div>
  )
}

export default Home