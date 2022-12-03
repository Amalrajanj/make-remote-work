import React, { useState } from "react";
import "./Styles/Home.css";
import Navbar from "../Navbar/Navbar";
import { Images } from "../../Assets";
import Sidebar from "../Sidebar/Sidebar";

function Home() {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div className="home-main">
      <Navbar
        toggleStatus={(status) => {
          setMenuToggle(status);
        }}
      />
      <nav></nav>
      <div className="home-container">
        <div className="home-left-container">
          <h1>Make remote work</h1>
          <p>
            Get your team in sync,no matter your location.Streamline
            processes,create team rituals,and watch productivity soar.
          </p>
          <button>Learn more</button>

          <div className="home-left-container-social-media">
            <a href="">
              <img src={Images.clientDatabiz} alt="" />
            </a>
            <a href="">
              <img src={Images.clientAudiophile} alt="" />
            </a>
            <a href="">
              <img src={Images.clientMeet} alt="" />
            </a>
            <a href="">
              <img src={Images.clientMaker} alt="" />
            </a>
          </div>
        </div>

        <div className="home-right-container">
          <img src={Images.heroMobile} alt="" />
          {/* <img src={Images.heroDesktop} alt="" /> */}
        </div>
      </div>
      {menuToggle && (
        <Sidebar
          toggleStatus={(status) => {
            setMenuToggle(status);
          }}
        />
      )}
    </div>
  );
}

export default Home;
