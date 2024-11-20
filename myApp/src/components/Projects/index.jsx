import React from "react";
import "./index.css";
import {motion} from "framer-motion"

const Projects = () => {
  return (
    <div id="projects" className="projects-page">
      <h1 className="heading-style">Projects Page</h1>
      <motion.div className="inline-container" initial = {{opacity: 0}} whileInView={{opacity: 1,transition: {duration: 5}}} viewport={{once: true}}>
        <motion.div whileHover={{scale: 1.1}} className="project-work-container">
          <a href="https://newjobapp.ccbp.tech/" target="__blank">
            <img
              src="https://res.cloudinary.com/dowjvitxs/image/upload/v1731685185/Screenshot_27_qhrlfn.png"
              alt="project-image-one"
              className="work-image"
            />
          </a>
          <p className="user-name-style">Username: <span>rahul</span></p>
          <p className="user-name-style">Password: <span>rahul@2021</span></p>
        </motion.div>
        <motion.div whileHover={{scale: 1.1}} className="project-work-container">
          <a href="https://withnewfeatures.ccbp.tech/" target="__blank">
            <img
              src="https://res.cloudinary.com/dowjvitxs/image/upload/v1731686340/Screenshot_38_griz4w.png"
              alt="project-image-two"
              className="work-image"
            />
          </a>
          <p className="user-name-style">Username: <span>rahul</span></p>
          <p className="user-name-style">Password: <span>rahul@2021</span></p>
        </motion.div>
        <motion.div whileHover={{scale: 1.1}} className="project-work-container">
          <a href="https://frolicking-paprenjak-94cbc1.netlify.app" target="__blank">
            <img
              src="https://res.cloudinary.com/dowjvitxs/image/upload/v1731687084/Screenshot_60_jhon42.png"
              alt="project-image-three"
              className="work-image"
            />
          </a>
        </motion.div>
        <motion.div whileHover={{scale: 1.1}} className="project-work-container">
          <a href="https://weather-application-woad-sigma.vercel.app/" target="__blank">
            <img
              src="https://res.cloudinary.com/dowjvitxs/image/upload/v1731688012/Screenshot_61_blzjtt.png"
              alt="project-image-three"
              className="work-image"
            />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
