import React from "react";
import { Images } from "../../Assets";
import "./Styles/Sidebar.css";

function Sidebar(props) {
  return (
    <div className="sidebar-main">
      {/*  */}

      <button
        className="sidebar-close"
        onClick={() => {
          props.toggleStatus(false);
        }}
      >
        <img src={Images.menuclose} alt="" />
      </button>

      {/*  */}

      <div className="sidebar-items-container">
        <ul className="sidebar-nav-item-list-wrap">
          <li className=" ">
            <label htmlFor="">
              Features <img src={Images.arrowDown} alt="" />
            </label>
            <ul className="sidebar-nav-sub-items">
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

          <li className="sidebar-nav-items">
            <label htmlFor="">
              Company <img src={Images.arrowDown} alt="" />
            </label>
            <ul className="sidebar-nav-sub-items">
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
          <li className="sidebar-nav-items">
            <a href="">Careers</a>
          </li>
          <li className="sidebar-nav-items">
            <a href="">About</a>
          </li>
        </ul>

        {/*  */}

        <span className="sidebar-action-buttons-container">
          <button className="sidebar-login-button">Login</button>
          <button className="sidebar-register-button">Register</button>
        </span>
      </div>

      {/*  */}
    </div>
  );
}

export default Sidebar;
