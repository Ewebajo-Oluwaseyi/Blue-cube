import React, { useState, useEffect, useRef } from 'react'

function Profile({images}) {
  //  images.images.map(img => {console.log(img.photo)})
  const[currentPhoto, setCurrentPhoto] = useState(0);
  const[currentProfile, setCurrentProfile] = useState(null);
  //const [active, setActive] = useState(false);
  const profileEl = useRef()

  useEffect(() => {
    if (images.photos[0]) {
      profileEl.current.style.backgroundImage = `url("${images.photos[currentPhoto].regular_url}")` ;
    }
  
  }, [currentPhoto, images.photos]);
  const handleClick = (e) => {
    if (e.target.classList.contains("profilebar")) {
      setCurrentPhoto((currentPhoto + 1) % 4);
      profileEl.current.style.backgroundImage = `url("${images.photos[currentPhoto].regular_url}")` ;
      console.log(currentPhoto);
    } else {
      setCurrentProfile(images.id);
    }
  }

  const handleRemove= () => {
    setCurrentProfile(null)
  }
    return (
        <>
          <div className={`${currentProfile === images.id ? 'active' : ""} profilecard`} onMouseDown={handleClick} onMouseLeave={handleRemove}>
            <div className="profilewrapper" ref={profileEl}>
              <div className="image-control">
               {images.photos.map((img, index) =>  { return index === currentPhoto && <img key={index} src={img.regular_url} alt=""/>})}
              </div>
              <div className="profilecontainer">
                <div className="profilebars">
                  {images.photos.map((img, index) =>  { return <div key={index} className={`${index === currentPhoto ? 'active' : ""} profilebar`}></div>})}
                </div>
                <div className={`${currentProfile === images.id ? 'active' : ""} bottom-row`}>
                  <div>
                    <div>{images.first_name}, {images.total_photos}</div>
                  </div>
                  <div className="location">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{
                      images.photos[0].location
                      ? images.photos[0].location
                      : ""}
                    </span>
                  </div>
                  <div className="social">
                     <button className="heart">
                      <i class="far fa-heart"></i>
                     </button>
                     <button  className="thumbs">
                     <i class="far fa-thumbs-down"></i>
                     </button>   
                  </div>
                </div>
              </div>
            </div>
          </div>   
        </>

    )
}

export default Profile
