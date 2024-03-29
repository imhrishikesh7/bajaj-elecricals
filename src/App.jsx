import './App.css'
// import Navbar from './Components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.min.js'; // Import Bootstrap CSS
// import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Board from './Components/Board/Board';
import Business from './Components/Businesses/Business';
import Boxes from './Components/Boxes/Boxes';
import Footer from './Components/Footer/Footer';
// import Hero from './Components/Hero/Hero';
import Hero1 from './Components/Hero/Hero1';
// import DynamicElements from './Components/Dynamic elements/DynamicElements';
// import Expand from './Components/Expand/Expand';
// import Float from './Components/Float/Float';

function App() {

  return (
    <div className='App'>
      {/* <Hero/> */}
      <Hero1/>
      <About/>
      <Board/>
      {/* <DynamicElements/> */}
      <Business/>
      <Boxes/>
      {/* <Expand/> */}
      <Footer/>
    </div>
  )
}

export default App
