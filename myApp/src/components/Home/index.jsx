import React from "react";
import "./index.css";
import {motion} from "framer-motion"

const Home = () => {
  return (
    <div className="home-page-container" id="home">
      <motion.div className="alignment-container" initial = {{opacity: 0}} whileInView={{opacity: 1,transition: {duration: 5}}} viewport={{once: true}}>
        <img
          src="https://t3.ftcdn.net/jpg/05/69/40/92/360_F_569409270_0gaUgTmRarjnsPFTSnUG6ZqHAzRFPTag.jpg"
          alt="profile"
          className="profile-photo"
        />
        <motion.h1 className="home-page-content-style" initial = {{opacity: 0}} animate = {{opacity: 1}}transition={{delay: 1}}>Abhilash Chary</motion.h1>
        <p className="description-about-me">
          I am a full stack developer with a knack for creating robust and
          scaleable applications. My goal is to create innovative solutions that
          drive business growth and deliver expection user experience.
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
