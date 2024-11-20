import React from "react";
import "./index.css";
import { motion } from "framer-motion";


const About = () => {
  return (
    <div id="about" className="about-page">
      <h1 className="heading-style">About Me</h1>
      <motion.div className="about-content-container" initial = {{opacity: 0}} whileInView={{opacity: 1,transition: {duration: 5}}} viewport={{once: true}}>
        <img
          src="https://res.cloudinary.com/dowjvitxs/image/upload/v1731756423/get_an_image_for_coding_skills_jlwn1j.jpg"
          alt="my-image"
          className="image-style"
        />
        <div className="content-container">
          <p className="paragraph-styling">
            I am a dedicated and versatile full stack developer with fascination
            for creating efficient and user friendly web applications. I have
            worked with various technologies that
            includes,Html,Css,Python,Js,Sql,Node js,React js.. My journey in web
            development began with deep curiosity for new things. and it has
            evolved into a carrer where i continuosly strive to learn to and
            adapt to new challenges. I thrive in collaborative environments and
            enjoy solving problems and deliver high quality solutions. Outside
            of coding i would love to explore new tech releated stuff
          </p>
          <div className="tech-name-container">
            <h2 className="heading-style">Technologies</h2>
            <div className="tech-stack-container">
              <motion.img src="https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png" alt="html" className="tech-image-style" whileHover={{scale: 1.1}}/>
              <motion.img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png" alt="css" className="tech-image-style" whileHover={{scale: 1.1}}/>
              <motion.img src="https://i.pinimg.com/564x/1d/be/60/1dbe6034fd59661cfd02d5aa8a79823a.jpg" alt="python" className="tech-image-style" whileHover={{scale: 1.1}}/>
              <motion.img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" alt="js" className="tech-image-style" whileHover={{scale: 1.1}}/>
              <motion.img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/sqlite_logo_icon_169724.png" alt="db" className="tech-image-style" whileHover={{scale: 1.1}}/>
              <motion.img src="https://banner2.cleanpng.com/20180821/zwc/39e9b8bbcc5ea47a102ee953d70ff430.webp" alt="node" className="tech-image-style" whileHover={{scale: 1.1}}/>
              <motion.img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbAmafdPNr9fd0KC0Z98WYEC7Wl1wYlPVf-A&s" alt="react" className="tech-image-style" whileHover={{scale: 1.1}}/>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
