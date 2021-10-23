import React from 'react';
import Navbar from './components/navbar.js';
import Header from './components/header.js';
import About from './components/about';
import Skills from './components/skills.js';
import Work from './components/work';
import Contact from './components/contact.js';
import Footer from './components/footer';

function App() {
  return (
  <div>
    <Navbar />
    <Header />
    <About />
    <Skills />
    <Work />
    <Contact />
    <Footer />
  </div>
  );
}

export default App;