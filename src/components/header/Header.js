import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import './Header.css'

function Header() {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="header">
      <div className="search__bar">
        <input
          className="search__input"
          type="text"
          placeholder="Tìm kiếm bài hát, ca sĩ. . ."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className="button-21">
          <FaIcons.FaSearch />
        </button>
      </div>
      <div className="btn-login">
        <Link to="/login">Đăng nhập</Link>
      </div>
    </div>
  );
}

export default Header;
