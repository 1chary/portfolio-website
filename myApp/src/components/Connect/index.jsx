import React, { useRef, useState } from "react";
import "./index.css";
import { IoIosMailUnread } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import {motion} from "framer-motion"

const Connect = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    emailjs.sendForm ("service_eowtq7h", "template_iv21qre", form.current,"ux_vQDq92KvkqAah1")
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="connect" className="connect-page">
      <h1 className="heading-style">Get in touch</h1>
      <motion.div className="connect-alignment-container" initial = {{opacity: 0}} whileInView={{opacity: 1,transition: {duration: 5}}} viewport={{once: true}}>
        <div className="info-container">
          <h1 className="heading-style">Let's talk</h1>
          <p className="message-para-style">
            I am currently looking for the job, so feel free to send me a
            message about anything that you want me to work on. You can contact
            anytime.
          </p>
          <div className="icon-with-text">
            <IoIosMailUnread className="connect-icon-styling" />
            <p className="message-para-style">abhilashchary04@gmail.com</p>
          </div>
          <div className="icon-with-text">
            <FaPhoneAlt className="connect-icon-styling" />
            <p className="message-para-style">91+7674809872</p>
          </div>
          <div className="icon-with-text">
            <FaLocationDot className="connect-icon-styling" />
            <p className="message-para-style">Telangana,India</p>
          </div>
        </div>
        <form
          ref={form}
          className="user-details-container"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            className="input-box"
            placeholder="Username"
            name="from_name"
          />
          <input
            type="email"
            className="input-box"
            placeholder="email"
            name="from_email"
          />
          <textarea
            className="description-message-box"
            rows="9"
            cols="60"
            placeholder="Enter a message"
            name="message"
          ></textarea>
          <button className="submit-button" type="submit" value="Send">
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Connect;
