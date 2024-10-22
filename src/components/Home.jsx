import React, { useEffect, useState } from "react";
import Typed from "typed.js"; // Ensure you have this import
import mainPic from '../assets/mainpic.png'; // Adjust image path
// import { Link } from "react-scroll"; // Correctly import Link from react-scroll
import Header from './Header'; // Import your Header component

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const options = {
      strings: ['Web Developer', 'Fullstack Developer', 'Software Engineer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(".multiple-text", options);
    
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Header activeSection={activeSection} /> {/* Pass activeSection to Header */}
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hi, I'm</h3>
          <h1>Mohammad Daniyal</h1>
          <h3>
            and I'm a &nbsp;
            <span className="multiple-text"></span>
          </h3>
          <p>
            Welcome to Mohammad Daniyal's Portfolio. Here, I showcase my passion
            for Web Development and everything related to me, capturing moments
            that inspire and create meaningful connections. Join me on this
            creative journey as I share my best works and the stories behind them.
          </p>

          <div className="social-media">
            <a href="https://www.facebook.com/profile.php?id=100005643679050"><i className="bx bxl-facebook"></i></a>
            <a href="https://www.instagram.com/mohammad_daniyal18"><i className="bx bxl-instagram-alt"></i></a>
            <a href="https://www.x.com/m_daniyal011"><i className="bx bxl-twitter"></i></a>
            <a href="https://www.linkedin.com/in/mohammaddaniaylsidiquie"><i className="bx bxl-linkedin"></i></a>
          </div>
          <a href="https://www.github.com/MDaniyal18" className="btn">Visit Github</a>
        </div>

        <div className="home-img">
          <img src={mainPic} alt="Mohammad Daniyal" />
        </div>
      </section>
    </>
  );
};

export default Home;
