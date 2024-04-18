import React from 'react'
import Hero1 from '../../Components/Hero/Hero1'
import About from '../../Components/About/About'
import Board from '../../Components/Board/Board'
import Business from '../../Components/Businesses/Business'
import Boxes from '../../Components/Boxes/Boxes'
import Footer from '../../Components/Footer/Footer'
import Discover from '../../Components/Discover/Discover'
import Sustainability from '../../Components/Sustainability/Sustainability'

const Home = () => {
  return (
    <div>
      <Hero1/>
      <About/>
      <Business/>
      <Discover/>
      <Sustainability/>
      {/* <Board/> */}
      <Boxes/>
      <Footer/>
      
    </div>
  )
}

export default Home