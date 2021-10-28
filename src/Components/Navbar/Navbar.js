import React from 'react';
import logo from "../../assests/image/bluecube_logo.png";

function Navbar() {
    return (
        <div className="sidebar">
          <div className="sidebarheader">
            <div className="sidebarlogo">
              <div className="logo"><img src={logo} alt=""/></div>
              <div className="text">Bluecube</div>
            </div>
          </div>
          <ul>
            <li>
              <i class="fas fa-home"></i>
              <span>Home</span>
            </li>
            <li>
              <i class="fas fa-envelope"></i>
              <span>Message</span>
            </li>
          </ul>
         <p>SHARE</p>
          <ul>
            <li>
              <i class="fas fa-envelope"></i>
              <span>Banking</span>
            </li>
            <li>
              <i class="fas fa-envelope"></i>
              <span>Challenge</span>
            </li>
            <li>
              <i class="fas fa-envelope"></i>
              <span>Party</span>
            </li>
            <li>
              <i class="fas fa-envelope"></i>
              <span>Connect</span>
            </li>
          </ul>
        </div>
    )
}

export default Navbar
