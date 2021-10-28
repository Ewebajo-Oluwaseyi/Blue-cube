import React, {useState, useEffect} from 'react';
import "./assests/scss/app.scss";
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Image from './Components/Image/Image';

function App() {
  const [mobileView, setMobileView] = useState(false)
  const [view, setView] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (window.innerWidth <= 700) {
      setView(true);
      setMobileView(true);
    } else {
      setView(false);
      setMobileView(false);
    } 
    
    function handleResize() {
      if (window.innerWidth <= 700) {
        setView(true);
        setMobileView(true);
      } else {
        setView(false);
        setMobileView(false);
      } 
    }
    window.addEventListener('resize', handleResize)
  }, []);


  return (
    <div id="App">
      {!mobileView && <Navbar/>}
      <div className="Container">
        <Header mobileView={view} setSearch={setSearch}/>
        <Image search={search}/>
      </div>
    </div>
  );
}

export default App;
