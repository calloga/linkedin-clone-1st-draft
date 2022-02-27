import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import logo from "./img/logo.svg";
import avatar from "./img/smoll_image.jpg";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

import "./Header.css";
import HeaderOption from "./HeaderOption";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="" />

        <div className="header__search">
          <SearchIcon />

          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__start__right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption avatar={avatar} title="Me" />
        </div>

        <div className="header__end__right">
          <p>this is my header right</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
