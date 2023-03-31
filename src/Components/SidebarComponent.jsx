import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { SidebarData } from "../API/sidebarData";
import "../styles/sidebar.css";
import Footer from "./Footer";

import { useContext } from "react";
import ContextOrigin from "../Context";
const { Context } = ContextOrigin;


export default function SidebarComponent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { session } = useContext(Context);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars" style={{ display: sidebarOpen ? 'none' : 'block' }}>
            <FaIcons.FaBars onClick={toggleSidebar} />
          </Link>
        </div>
        <nav className={sidebarOpen ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars" onClick={toggleSidebar}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData({ session }).map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>

                </li>
              );
            })}            <div className="position-absolute bottom-0 start-0">
              <Footer />
            </div>

          </ul>
        </nav>
        <div className={sidebarOpen ? 'menu-icon' : ''} onClick={toggleSidebar}>
          <AiIcons.AiOutlineClose />
        </div>
      </IconContext.Provider>
    </>
  );
}
