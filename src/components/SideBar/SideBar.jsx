import React from "react";
import "./SideBar.css"; // Caminho correto

function SideBar() {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#profile">Profile</a></li>
        <li><a href="#settings">Settings</a></li>
        <li><a href="#logout">Logout</a></li>
      </ul>
    </div>
  );
}

export default SideBar;
