import React, { useState, useEffect, useRef } from 'react';
import Notification from '../Notification/Natification';
import User from '../User/User'
import Navbar from '../Navbar/Navbar';
function Header({mobileView, setSearch}) {
  const[menuActive, setMenuActive] = useState(false);
  const [, setClickOutside] = useState(false);
  const myRef = useRef();
  

  function handleClickOutside(e) {
    if (window.innerWidth <= 700) {
      if(!myRef.current.contains(e.target)) {
        setMenuActive(false)
      }
    }
  };

  function handleClickInside() {
    setClickOutside(false)
  };

  useEffect(() => {
    if (window.innerWidth <= 700) {
      document.addEventListener('mousedown', handleClickOutside);
      return() => document.removeEventListener('mousedown', handleClickOutside);
    }
    function handleResize() {
      if (window.innerWidth <= 700 ) {
        document.addEventListener('mousedown', handleClickOutside);
        return() => document.removeEventListener('mousedown', handleClickOutside);
      }
    }
    window.addEventListener('resize', handleResize)
  }, []);

  const handleClick = () => {
    setMenuActive(true)
  };

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
   // if (search !== "") {
   //   localStorage.setItem('query', search.toLowerCase());
   // }
  }

    return (
        <div className="header">
          {mobileView && <div className={`${menuActive ? 'active' : "inactive"}  mobile`}>
            <div className="hamburger" onClick={handleClick}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div ref={myRef} onClick={handleClickInside}>
              <Navbar/>
            </div>
          </div>}
          <div className="search">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search..." onKeyUp={onChangeSearch}/>
            <div class="search-btn">Search</div>
          </div>
          <Notification/>
          <User/>
        </div>
    )
}

export default Header;
