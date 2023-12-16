import React from "react";
import { Link } from "react-router-dom";
import './Warnning.css'

function Warnning() {
  return (
    <div className="warnning">
      <div>
        <img
          src={"https://cdn-icons-png.flaticon.com/512/552/552871.png"}
          alt="warnning"
          width={"150px"}
        />
      </div>
      <div className="title">Vui lòng đăng nhập trước khi dùng tính năng</div>
      <div className="link">
        <div className="btn-login">
          <Link to="/login">Đăng nhập</Link>
        </div>
        <div className="btn-login">
          <Link to="/registration">Đăng ký</Link>
        </div>
      </div>
    </div>
  );
}

export default Warnning;
