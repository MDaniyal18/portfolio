import React from "react";
// import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
// import { BsFillArrowUpCircleFill } from "react-icons/bs";
import newsAppImg from '../assets/news.png'; // Example image import
import datetimeImg from '../assets/datetime.png';
import triviaImg from '../assets/trivia.png';
import personalImg from '../assets/personal.png';
import financeImg from '../assets/finance.png';
import birthdayImg from '../assets/birthday.png';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">Latest <span>Projects</span></h2>
      <div className="portfolio-container">
        {[
          { img: newsAppImg, title: 'News App', desc: 'A web based news app skillfully made using HTML, CSS, Bootstrap, JavaScript and React JS.', link: 'https://github.com/MDaniyal18/newsapp/tree/8edaa4ac4a06229bd31ac88c0298c8825bb427dd' },
          { img: datetimeImg, title: 'Date and Time App', desc: 'A custom-made web application, combining HTML, CSS, and JavaScript to display the current time and date.', link: '#' },
          { img: triviaImg, title: 'Trivia App', desc: 'A trivia app, skillfully crafted using HTML, CSS, and JavaScript.', link: 'https://github.com/code50/109278549/tree/8df42a8a2d6ad30f5e947183ada2fbc21792c378/lab8/trivia' },
          { img: financeImg, title: 'Stock Rates Counter', desc: 'Track stocks effortlessly with my finance app: HTML, CSS, Bootstrap, Python, SQLite.', link: 'https://github.com/code50/109278549/tree/8df42a8a2d6ad30f5e947183ada2fbc21792c378/finance' },
          { img: personalImg, title: 'Personal Profile', desc: 'A handcrafted homepage, meticulously designed using HTML, CSS, and JavaScript.', link: 'https://github.com/code50/109278549/tree/8df42a8a2d6ad30f5e947183ada2fbc21792c378/homepage' },
          { img: birthdayImg, title: 'Birthday Calculator', desc: 'A web based App made using HTML, Python and SQLite 3 used to calculate birthdays.', link: 'https://github.com/code50/109278549/tree/8df42a8a2d6ad30f5e947183ada2fbc21792c378/birthdays' }
        ].map(({ img, title, desc, link }, index) => (
          <div className="portfolio-box" key={index}>
            <img src={img} alt={title} />
            <div className="portfolio-layer">
              <h4>{title}</h4>
              <p>{desc}</p>
              <a href={link}><i className="bx bx-link-external"></i></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
