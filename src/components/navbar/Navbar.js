import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { Sidebar } from "../siderbar/Sidebar";
import "./Navbar.css";

function Navbar() {
  const [siderbar, setSidebar] = useState(false);

  const [keyword, setKeyword] = useState("");

  const showSidebar = () => setSidebar(!siderbar);

  return (
    <div>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="search__bar">
            <input
              className="search__input"
              type="text"
              placeholder="Tìm kiếm bài hát, ca sĩ. . ."
            />
            <button className="button-21">
              <FaIcons.FaSearch/>
            </button>
          </div>
          <div>
            <ul className="navbar-nav flex-row">
              <li className="nav-item me-3 me-lg-3">
                <Link to="/login">Đăng nhập</Link>
              </li>
              <li className="nav-item me-3 me-lg-3">
                <Link to="/registration">Đăng ký</Link>
              </li>
            </ul>
          </div>
        </div>
        <nav className={siderbar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {Sidebar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icons}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
