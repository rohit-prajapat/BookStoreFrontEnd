import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header'
import Contact from './components/Contact'
import Courses from './components/Courses';
import Home from './components/Home';
import AboutUs from './components/AboutUs';

function App() {
  

  return (
    <>
       
       <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
   
    </>
  )

    
}

export default App
