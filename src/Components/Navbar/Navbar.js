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
            <span className="iconify" data-icon="ant-design:home-filled" data-inline="false" style={{marginRight: '1rem'}}></span>
              Home
            </li>
            <li>
              <span className="iconify inline mr-2" data-icon="bx:bxs-message-alt" data-inline="false" style={{marginRight: '1rem'}}></span>
              Message
            </li>
          </ul>
         <p>SHARE</p>
          <ul>
            <li>
              <span className="iconify inline mr-2" data-icon="ic:sharp-grade" data-inline="false" style={{marginRight: '1rem'}}></span>
              Ranking
            </li>
            <li>
              <span className="iconify inline mr-2" data-icon="ic:baseline-task" data-inline="false" style={{marginRight: '1rem'}}></span>
              Challenge
            </li>
            <li>
              <span className="iconify inline mr-2" data-icon="emojione-monotone:party-popper" data-inline="false" style={{marginRight: '1rem'}}></span>
              Party
            </li>
            <li>
              <span className="iconify inline mr-2" data-icon="entypo:link" data-inline="false" style={{marginRight: '1rem'}}></span>
              Connect
            </li>
          </ul>
        </div>
    )
}

export default Navbar
