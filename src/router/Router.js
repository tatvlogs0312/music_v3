import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { FaUserLarge } from "react-icons/fa6";

export const Router = [
  {
    title: "Khám phá",
    path: "/",
    icons: <FaIcons.FaDotCircle   />,
    cName: "nav-text",
    isAuthen: false,
  },
  {
    title: "Ca sĩ",
    path: "/artist",
    icons: <FaUserLarge  />,
    cName: "nav-text",
    isAuthen: false,
  },
  {
    title: "Albums",
    path: "/albums",
    icons: <IoIcons.IoIosAlbums />,
    cName: "nav-text",
    isAuthen: false,
  },
  {
    title: "Gần đây",
    path: "/history",
    icons: <FaIcons.FaHistory  />,
    cName: "nav-text",
    isAuthen: true,
  },
];
