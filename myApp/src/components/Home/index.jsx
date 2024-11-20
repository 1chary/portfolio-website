import React from "react";
import "./index.css";

const Home = () => {
  return (
    <div className="home-page-container" id = "home">
      <img
        src="https://res.cloudinary.com/dowjvitxs/image/upload/v1731411566/me_ynjpwq.jpg"
        alt="profile"
        className="profile-photo"
      />
      <h1 className="home-page-content-style">
        <span className="name-style">I'm Abhilash Chary, </span>
        Full Stack developer based in INDIA.
      </h1>
      <div className="button-container">
        <button className="button-style connect">Connect With Me</button>
        <button className="button-style">My Resume</button>
      </div>
    </div>
  );
};

export default Home;
