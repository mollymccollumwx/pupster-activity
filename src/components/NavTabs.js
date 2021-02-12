import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="#home" onClick={() => props.handlePageChange("Home")} className={props.currentPage==="Home"? "active nav-link": "nav-link"}>
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#about" onClick={() => props.handlePageChange("About")} className={props.currentPage==="About"? "active nav-link": "nav-link"}>
          About
        </a>
      </li>
      <li className="nav-item">
        <a href="#blog" onClick={() => props.handlePageChange("Blog")} className={props.currentPage==="Blog"? "active nav-link": "nav-link"}>
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a href="#contact" onClick={() => props.handlePageChange("Contact")} className={props.currentPage==="Contact"? "active nav-link": "nav-link"}>
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
