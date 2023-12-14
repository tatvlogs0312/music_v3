import React, { useEffect, useState } from "react";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { Router } from "../../router/Router";
import "./Navbar.css";

function Navbar() {
  
  return (
    <nav className="nav-menu">
      <ul className="nav-menu-items">
        <li className="navbar-toggle">
          <h2>Music</h2>
        </li>
        {Router.map((item, index) => {
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
  );
}

export default Navbar;
