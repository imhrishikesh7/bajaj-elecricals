import './App.css'
import Navbar from './Components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.min.js'; // Import Bootstrap CSS
import Home from './Pages/Home/Home';
import Social from './Components/Social/Social';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Social/>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
