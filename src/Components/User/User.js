import React, { useState } from 'react'
import logo from '../../assests/image/profile.png';

function User() {
  const [dropdown, setDropdown] = useState(false)
  const changeDropdown = () => {
    setDropdown(!dropdown)
 }
    return (
        <div className="user" onClick={changeDropdown}>
          <div className="userlogo">
            <img src={logo} alt=""/>
            <div className="online"></div>
          </div>
          <div class="user-name">Abigail</div>
          <i class="fas fa-caret-down"></i>
          {dropdown &&
            <ul class="dropdown">
              <li><i class="fas fa-user"></i><span>Account</span></li>
              <li><i class="fas fa-sign-out-alt"></i><span>Logout</span></li>
            </ul>
          }
        </div>
    )
}

export default User

