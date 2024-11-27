import React from "react";
import "./index.css";
import {motion} from "framer-motion"

const Home = () => {
  return (
    <div className="home-page-container" id="home">
      <motion.div className="alignment-container" initial = {{opacity: 0}} whileInView={{opacity: 1,transition: {duration: 5}}} viewport={{once: true}}>
        <img
          src="https://res.cloudinary.com/dowjvitxs/image/upload/v1732723350/me_with_coat_lkjtvx.jpg"
          alt="profile"
          className="profile-photo"
        />
        <motion.h1 className="home-page-content-style" initial = {{opacity: 0}} animate = {{opacity: 1}}transition={{delay: 1}}>Abhilash Chary</motion.h1>
        <p className="description-about-me">
          I am a full stack developer with a knack for creating robust and
          scaleable applications. My goal is to create innovative solutions that
          drive business growth and deliver user friendly applications.
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
