import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const Router = [
  {
    title: "Khám phá",
    path: "/",
    icons: <AiIcons.AiFillHome />,
    cName: "nav-text",
    isAuthen: false,
  },
  {
    title: "Music Chart",
    path: "/",
    icons: <AiIcons.AiFillHome />,
    cName: "nav-text",
    isAuthen: false,
  },
  {
    title: "Ca sĩ",
    path: "/artist",
    icons: <AiIcons.AiFillHome />,
    cName: "nav-text",
    isAuthen: false,
  },
  {
    title: "Albums",
    path: "/albums",
    icons: <AiIcons.AiFillHome />,
    cName: "nav-text",
    isAuthen: false,
  },
];
