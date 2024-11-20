import React, { useState } from "react";
import "./index.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdHome } from "react-icons/io";
import { FaInfo } from "react-icons/fa6";
import {
  MdOutlineMiscellaneousServices,
  MdOutlineConnectWithoutContact,
} from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import Popup from "reactjs-popup";

const Header = () => {
  const [activeTab, changeActiveTab] = useState("home");

  return (
    <div className="header-container">
      <h1 className="my-name">Portfolio</h1>
      <div className="options-container-for-large-devices">
        <AnchorLink className="elements-style" href="#home">
          <h3 className="options-style" onClick={() => changeActiveTab("home")}>
            Home
          </h3>
        </AnchorLink>

        <AnchorLink className="elements-style" href="#about">
          <h3
            className="options-style"
            onClick={() => changeActiveTab("about")}
          >
            About
          </h3>
        </AnchorLink>

        <AnchorLink className="elements-style" href="#services">
          <h3
            className="options-style"
            onClick={() => changeActiveTab("services")}
          >
            Services
          </h3>
        </AnchorLink>

        <AnchorLink className="elements-style" href="#projects">
          <h3
            className="options-style"
            onClick={() => changeActiveTab("projects")}
          >
            Projects
          </h3>
        </AnchorLink>

        <AnchorLink className="elements-style" href="#connect">
          <h3
            className="options-style"
            onClick={() => changeActiveTab("connect")}
          >
            Connect
          </h3>
        </AnchorLink>
      </div>
      <div className="for-small-devices">
        <Popup
          trigger={
            <button className="trigger-button">
              {" "}
              <GiHamburgerMenu />{" "}
            </button>
          }
        >
          <div className="example">
            <div className="route-card">
              <IoMdHome className="icon-style" />
              <AnchorLink className="elements-style" href="#home">
                <h3
                  className="options-style"
                  onClick={() => changeActiveTab("home")}
                >
                  Home
                </h3>
              </AnchorLink>
            </div>

            <div className="route-card">
              <FaInfo className="icon-style" />
              <AnchorLink className="elements-style" href="#about">
                <h3
                  className="options-style"
                  onClick={() => changeActiveTab("about")}
                >
                  About
                </h3>
              </AnchorLink>
            </div>

            <div className="route-card">
              <MdOutlineMiscellaneousServices className="icon-style" />
              <AnchorLink className="elements-style" href="#services">
                <h3
                  className="options-style"
                  onClick={() => changeActiveTab("services")}
                >
                  Services
                </h3>
              </AnchorLink>
            </div>

            <div className="route-card">
              <GoProjectSymlink className="icon-style" />
              <AnchorLink className="elements-style" href="#projects">
                <h3
                  className="options-style"
                  onClick={() => changeActiveTab("projects")}
                >
                  Projects
                </h3>
              </AnchorLink>
            </div>

            <div className="route-card">
              <MdOutlineConnectWithoutContact className="icon-style" />
              <AnchorLink className="elements-style" href="#connect">
                <h3
                  className="options-style"
                  onClick={() => changeActiveTab("connect")}
                >
                  Connect
                </h3>
              </AnchorLink>
            </div>
          </div>
        </Popup>
      </div>
    </div>
  );
};

export default Header;
