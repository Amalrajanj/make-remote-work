import React from "react";
import "./Styles/Navbar.css";
import { Images } from "../../Assets";

function Navbar(props) {
  return (
    <div className="navbar">
      <span className="items-container">
        <a href="" className="logo">
          <img src={Images.logo} alt="" />
        </a>
        <ul className="nav-item-list-wrap">
          <li className="nav-items">
            <label htmlFor="">
              Features <img src={Images.arrowDown} alt="" />
            </label>
            <ul className="nav-sub-items">
              <li>
                <a href="">
                  <img src={Images.todo} alt="" />
                  Todo List
                </a>
              </li>
              <li>
                <a href="">
                  <img src={Images.calender} alt="" />
                  Calendar
                </a>
              </li>
              <li>
                <a href="">
                  <img src={Images.reminder} alt="" />
                  Reminders
                </a>
              </li>
              <li>
                <a href="">
                  <img src={Images.planning} alt="" />
                  Planning
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-items">
            <label htmlFor="">
              Company <img src={Images.arrowDown} alt="" />
            </label>
            <ul className="nav-sub-items">
              <li>
                <a href="">History</a>
              </li>
              <li>
                <a href="">Our Team</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </li>
          <li className="nav-items">
            <a href="">Careers</a>
          </li>
          <li className="nav-items">
            <a href="">About</a>
          </li>
        </ul>
      </span>

      <span className="action-buttons-container">
        <button className="login-button">Login</button>
        <button className="register-button">Register</button>
        <button
          className="menu-button"
          onClick={() => {
            props.toggleStatus(true);
          }}
        >
          <img src={Images.menu} alt="" />
        </button>
      </span>
    </div>
  );
}

export default Navbar;
