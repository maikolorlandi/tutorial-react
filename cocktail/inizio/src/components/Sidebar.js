import React from "react";
import { LinkComponent, SocialComponent } from "../utils/links";
import { VscArrowSmallLeft } from "react-icons/vsc";
import { useGlobalContext } from "../context";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
    <div className="sidebar-content">
      <header className="nav-header container">
        <div className="nav-brand">
          <h3>Wiki Drink</h3>
        </div>
        <div className="nav-toggler">
          <button className="nav-toggler btn icon-btn" onClick={closeSidebar}>
            <VscArrowSmallLeft className="nav-icon" />
          </button>
        </div>
      </header>
      <div className="container sidebar-links">
        <LinkComponent classLink="sidebar-link" />
        <SocialComponent classSocial="sidebar-social" />
      </div>
    </div>
  </aside>;
};

export default Sidebar;
