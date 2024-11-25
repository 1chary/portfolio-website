import React, { useRef, useState } from "react";
import "./index.css";
import { IoIosMailUnread } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Connect = () => {
  const form = useRef();
  const [success, displaySuccessMessage] = useState(false);
  const [failure, displayFailureMessage] = useState(false);
  const [username, changeUsername] = useState("");
  const [mail, changeEmail] = useState("");
  const [para, changePara] = useState("");
  const [fillAllFieldsMessage,changeAllFieldsMessage] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault();
    if (username !== "" && mail !== "" && para !== "") {
      emailjs
        .sendForm("service_frp51tx", "template_iv21qre", form.current, {
          publicKey: "ux_vQDq92KvkqAah1",
        })
        .then(
          () => {
            displaySuccessMessage(true);
            changeAllFieldsMessage(false)
            changeUsername("");
            changeEmail("");
            changePara("");
          },
          (error) => {
            displayFailureMessage(true);
            changeUsername("");
            changeEmail("");
            changePara("");
          }
        );
    }
    else {
      changeAllFieldsMessage(true)
      displaySuccessMessage(false)
    }
  };

  return (
    <div id="connect" className="connect-page">
      <h1 className="heading-style">Get in touch</h1>
      <motion.div
        className="connect-alignment-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 5 } }}
        viewport={{ once: true }}
      >
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
            value={username}
            onChange={(e) => changeUsername(e.target.value)}
          />
          <input
            type="email"
            className="input-box"
            placeholder="email"
            name="from_email"
            value={mail}
            onChange={(e) => changeEmail(e.target.value)}
          />
          <textarea
            className="description-message-box"
            rows="9"
            cols="60"
            placeholder="Enter a message"
            value={para}
            onChange={(e) => changePara(e.target.value)}
            name="message"
          ></textarea>
          <button className="submit-button" type="submit" value="Send">
            Submit
          </button>
          {success && (
              <h1 className="success-message">Message Sent Successfully</h1>
          )}
          {failure && (
              <h1 className="error-message">*Message Did Not Send*</h1>
          )}
          {fillAllFieldsMessage && <h2 className="error-message">*  Fill All The Fields *</h2>}
        </form>
      </motion.div>
    </div>
  );
};

export default Connect;
