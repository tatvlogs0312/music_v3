import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./Header.css";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";

const baseURL = "http://localhost:8080";

function Header() {
  const [keyword, setKeyword] = useState("");
  const [disabled, setDisable] = useState(false);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("me") !== null);

  const navigate = useNavigate();

  useEffect(() => {
    if (typeof keyword === "string" && keyword.trim().length !== 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [keyword]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("me");
    setIsAuth(false);
    navigate("/");
  };

  const getAvatar = () => {
    const me = JSON.parse(localStorage.getItem("me"));
    return me.avatar;
  };

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
        <Link to={`/search?keyword=${keyword}`} state={{ keyword: keyword }}>
          <button className="button-21" disabled={disabled}>
            <FaIcons.FaSearch />
          </button>
        </Link>
      </div>
      <div>
        {!isAuth ? (
          <div className="btn-login">
            <Link to="/login">Đăng nhập</Link>
          </div>
        ) : (
          <div
            style={{
              marginRight: "10px",
              cursor: "pointer",
              backgroundColor: "white",
              borderRadius: 50,
            }}
          >
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <div variant="contained" {...bindTrigger(popupState)}>
                    <Avatar src={`${baseURL}/file/avatar/${getAvatar}`} />
                  </div>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem>
                      <Link to={"/changepassword"}>Đổi mật khẩu</Link>
                    </MenuItem>
                    <MenuItem onClick={logout}>Đăng xuất</MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
