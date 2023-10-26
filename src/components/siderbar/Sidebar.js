import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const Sidebar = [
    {
        title: "Home",
        path: "/",
        icons: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Ca sĩ",
        path: "/artist",
        icons: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Albums",
        path: "/albums",
        icons: <AiIcons.AiFillHome />,
        cName: "nav-text"
    }
]