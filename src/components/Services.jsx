import React, { useState } from "react";
// import "./Services.css"; // Make sure to include your CSS file

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="services" id="services">
      <h2 className="heading">
        My <span>Services</span>
      </h2>
      <div className="services-container">
        <div className="services-box">
          <i className="bx bx-code-alt"></i>
          <h3>Web Development</h3>
          <p>
            As a versatile web developer proficient in HTML, CSS, JavaScript,
            React.js, Python, Flask, and MySQL, I am passionate about crafting
            seamless and engaging digital experiences. With a strong foundation
            in front-end and back-end technologies, I possess the skills to
            bring complex web projects to life.
            <span id="dots1" style={{ display: expandedIndex === 0 ? "none" : "inline" }}>...</span>
            <span id="more1" style={{ display: expandedIndex === 0 ? "inline" : "none" }}>
              My portfolio showcases a wide range of projects, from responsive
              and user-friendly websites built using HTML, CSS, and JavaScript
              to dynamic and interactive web applications powered by React.js.
              Additionally, my expertise in Python and Flask enables me to
              develop robust back-end solutions, integrating with databases like
              MySQL for efficient data management. I am driven by a commitment
              to clean code, scalability, and performance optimization, ensuring
              that every project I undertake delivers exceptional functionality
              and user experiences. With a penchant for problem-solving and a
              passion for staying up-to-date with the latest web development
              trends, I consistently deliver innovative solutions that exceed
              client expectations.
            </span>
          </p>
          <button className="btn" onClick={() => toggleReadMore(0)}>
            {expandedIndex === 0 ? "Read Less" : "Read More"}
          </button>
        </div>

        <div className="services-box">
          <i className="bx bxs-virus-block"></i>
          <h3>Cyber Expert</h3>
          <p>
            As a highly skilled cyber security professional with expertise in
            ethical hacking, I am dedicated to safeguarding digital landscapes
            from potential threats. With an in-depth understanding of security
            vulnerabilities and cutting-edge hacking techniques, I possess the
            ability to identify and rectify potential weaknesses in networks,
            applications, and systems.
            <span id="dots2" style={{ display: expandedIndex === 1 ? "none" : "inline" }}>...</span>
            <span id="more2" style={{ display: expandedIndex === 1 ? "inline" : "none" }}>
              My portfolio demonstrates a track record of successful penetration
              testing and vulnerability assessments, showcasing my proficiency
              in using ethical hacking to assess security postures and provide
              actionable recommendations for improvement. I am adept at
              employing various tools and methodologies to simulate real-world
              cyber attacks, allowing organizations to proactively strengthen
              their defenses against malicious actors. With a commitment to
              staying abreast of the latest industry trends and best practices,
              I offer comprehensive and robust cyber security solutions that
              instill confidence in clients and protect their valuable assets
              from cyber threats.
            </span>
          </p>
          <button className="btn" onClick={() => toggleReadMore(1)}>
            {expandedIndex === 1 ? "Read Less" : "Read More"}
          </button>
        </div>

        <div className="services-box">
          <i className="bx bxs-paint"></i>
          <h3>Graphic Designer</h3>
          <p>
            As a skilled graphic designer proficient in Adobe Illustrator and
            Photoshop, I possess a passion for transforming creative visions
            into captivating visual masterpieces. With a keen eye for detail and
            a deep understanding of design principles, I craft aesthetically
            pleasing and impactful designs that leave a lasting impression on
            audiences.
            <span id="dots3" style={{ display: expandedIndex === 2 ? "none" : "inline" }}>...</span>
            <span id="more3" style={{ display: expandedIndex === 2 ? "inline" : "none" }}>
              My portfolio showcases a diverse range of projects, including logo
              designs, branding materials, marketing collaterals, and digital
              illustrations. Using Adobe Illustrator, I excel in creating vector
              graphics, scalable icons, and dynamic illustrations that ensure
              the highest quality output across various mediums. In Adobe
              Photoshop, I skillfully manipulate and enhance images, achieving
              stunning results through photo editing, compositing, and digital
              painting techniques. With a commitment to innovation and a flair
              for visual storytelling, I consistently deliver compelling and
              original designs that resonate with clients and engage their
              target audiences.
            </span>
          </p>
          <button className="btn" onClick={() => toggleReadMore(2)}>
            {expandedIndex === 2 ? "Read Less" : "Read More"}
          </button>
        </div>

        <div className="services-box">
          <i className="bx bxs-videos"></i>
          <h3>Videographer</h3>
          <p>
            As a dedicated videographer, I am committed to transforming your
            visions into captivating realities. With a passion for storytelling
            and a flair for creativity, I specialize in crafting cinematic
            experiences that leave a lasting impact.
            <span id="dots4" style={{ display: expandedIndex === 3 ? "none" : "inline" }}>...</span>
            <span id="more4" style={{ display: expandedIndex === 3 ? "inline" : "none" }}>
              Our diverse range of services includes event coverage, corporate
              videos, documentaries, promotional content, and more. Each project
              is approached with meticulous attention to detail, ensuring that
              every moment is beautifully captured and artfully presented. Using
              state-of-the-art equipment and cutting-edge techniques, I deliver
              high-quality videos that resonate with your audience and achieve
              your objectives. Whether you're planning a corporate campaign or
              preserving cherished memories, our collaborative approach ensures
              your story takes center stage. Let's collaborate on your next
              project and bring your ideas to life with the power of visual
              storytelling. Together, we'll create an unforgettable journey that
              will leave a lasting impression.
            </span>
          </p>
          <button className="btn" onClick={() => toggleReadMore(3)}>
            {expandedIndex === 3 ? "Read Less" : "Read More"}
          </button>
        </div>

        <div className="services-box">
          <i className="bx bxs-camera"></i>
          <h3>Stock Photographer</h3>
          <p>
            As a passionate stock photographer, I specialize in capturing
            moments that inspire and resonate with diverse audiences. With a
            vast collection of high-quality images, my portfolio covers a wide
            range of subjects, themes, and styles.
            <span id="dots5" style={{ display: expandedIndex === 4 ? "none" : "inline" }}>...</span>
            <span id="more5" style={{ display: expandedIndex === 4 ? "inline" : "none" }}>
              Whether you're looking for captivating landscapes, authentic
              lifestyle shots, or impactful business visuals, I've got you
              covered. My images are carefully curated and licensed for various
              commercial and editorial needs, making them perfect for marketing
              campaigns, websites, publications, and more. Backed by years of
              experience and a keen eye for detail, I deliver exceptional
              photographs that tell compelling stories. With easy licensing
              options and flexible usage rights, finding the perfect image for
              your project has never been easier. Explore the world through my
              lens and discover the power of imagery to elevate your creative
              endeavors. Let's collaborate and bring your projects to life with
              the beauty and authenticity of stock photography.
            </span>
          </p>
          <button className="btn" onClick={() => toggleReadMore(4)}>
            {expandedIndex === 4 ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
