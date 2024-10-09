import logo from './logo.svg';
import './App.css';
import Home from './Pages/LandingPage/Home.jsx';
import About from './Pages/About/About.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact/Contact.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
