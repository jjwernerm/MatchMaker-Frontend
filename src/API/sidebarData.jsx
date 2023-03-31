import React from "react";

import { useContext } from "react";
import ContextOrigin from "../Context";
const { Context } = ContextOrigin;


import * as AiIcons from "react-icons/ai";
import * as TbIcons from "react-icons/tb";
import * as VscIcons from "react-icons/vsc";
import  * as GiIcons from "react-icons/gi";

export const SidebarData = ({ session }) => [
  
  {
    title: "Dashboard",
    path: `/user/dashboard/${session.usuario.id}`,
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Profile",
    path: `/user/profile`,
    icon: <VscIcons.VscAccount/>,
    cName: "nav-text"
  },
  {
    title: "Canchas",
    path: "/user/canchas",
    icon: <GiIcons.GiAbstract042 />,
    cName: "nav-text"
  },
  {
    title: "Logout",
    path: "/",
    icon: <TbIcons.TbLogout />,
    cName: "nav-text"
  }
];
