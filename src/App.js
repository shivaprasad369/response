
import './App.css';
import End from './components/End';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Poster from './components/Poster';
import Services from './components/Services';
import Works from './components/Works';

// import logo from './components/home.jpg'
function App() {
  return (
    <div>
    <div className={`bg-gray-500 h-full w-[100%]`}>
      <Navbar/>
      <Home/>
      </div>
      <Services/>
      <Poster/>
      <Works/>
      <End/>
    </div>
  );
}

export default App;
