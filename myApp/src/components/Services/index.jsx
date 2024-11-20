import React from "react";
import "./index.css";
import {motion} from "framer-motion"

const Services = () => {
  return (
    <div id="services" className="services-page">
      <h1 className="heading-style">My Services</h1>
      <motion.div className="inline-container" initial = {{opacity: 0}} whileInView={{opacity: 1,transition: {duration: 5}}} viewport={{once: true}}>
        <motion.div whileHover={{scale: 1.1}} className="work-container full-stack"></motion.div>
        <motion.div whileHover={{scale: 1.1}}  className="work-container front-end"></motion.div>
        <motion.div whileHover={{scale: 1.1}}  className="work-container back-end"></motion.div>
        <motion.div whileHover={{scale: 1.1}}  className="work-container database"></motion.div>
        <motion.div whileHover={{scale: 1.1}}  className="work-container static"></motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
