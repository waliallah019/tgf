import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Donate from './pages/Donate';
import AboutUs from './pages/AboutUs';
import Contact from './pages/ContactUs'; // Import Contact page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} /> {/* Add Contact route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
