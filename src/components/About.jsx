import React, { useState } from 'react';
import aboutImage from '../assets/fullstack.png'; // Update this path as necessary

const About = () => {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={aboutImage} alt="Full Stack Developer" />
      </div>

      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Full-Stack Developer!</h3>
        <p>
          Welcome to my multifaceted world of technology and creativity! I am a passionate and skilled full-stack web developer, proficient in a diverse range of technologies. With expertise in HTML, CSS, JavaScript, React, Python, Flask, and adept at managing MySQL and SQLite 3 databases, I have mastered the art of crafting seamless and dynamic web experiences. 
          <span id="dots">{readMore ? '' : '...'}</span>
          <span id="more" style={{ display: readMore ? 'inline' : 'none' }}>
            My programming prowess extends beyond web development. As a C language developer, I possess a deep understanding of Data Structures and Algorithms (DSA), allowing me to create efficient and optimized solutions for complex problems. But my skills don't stop there! I am also a graphic designer, weaving visual magic with every stroke of my digital brush. From designing stunning logos and eye-catching graphics to crafting visually appealing user interfaces, I ensure that aesthetics and functionality blend harmoniously in every project.
            <br /><br />
            Beyond the digital realm, I am a storyteller at heart. As a videographer, I bring moments to life through the lens, capturing emotions and weaving narratives that resonate with audiences. My creativity and technical expertise merge to create cinematic masterpieces that leave a lasting impression.
            <br /><br />
            Photography is another passion that drives me. As a stock photographer, I have built a diverse collection of high-quality images, spanning various themes and genres. These images are licensed and ready to empower businesses, websites, and publications with authentic and captivating visuals. My journey as a tech enthusiast and creative soul began with an insatiable curiosity, and it continues to evolve with each new project.
            <br /><br />
            Whether you are a startup, an established business, or an individual seeking to leave a digital footprint, I am ready to embark on this transformative journey with you. Let's bring your ideas to life, whether it's building innovative web solutions, designing captivating graphics, or creating visual masterpieces through photography and videography. 
            <br /><br />
            Join me on this creative odyssey, where technology and imagination merge, and let's craft extraordinary experiences together. Together, we will forge a path that stands out in the digital landscape and leaves a mark that lasts a lifetime.
          </span>
        </p>

        <button className="btn" onClick={toggleReadMore}>
          {readMore ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </section>
  );
};

export default About;
