import './App.css'
// import Navbar from './Components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.min.js'; // Import Bootstrap CSS
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Board from './Components/Board/Board';
import Business from './Components/Businesses/Business';
import Boxes from './Components/Boxes/Boxes';
import Footer from './Components/Footer/Footer';
// import Float from './Components/Float/Float';

function App() {

  return (
    <div className='App'>
      <Hero/>
      <About/>
      <Board/>
      <Business/>
      <Boxes/>
      <Footer/>
    </div>
  )
}

export default App
