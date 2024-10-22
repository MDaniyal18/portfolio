import React from 'react';
// import Navbar from "./components/Navbar";
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Services from './components/Services';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
