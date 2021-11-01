import React, { useEffect, useState } from 'react';
import Filter from '../Filter/filter';
import axios from 'axios';
import Profile from '../Profile/Profile';

function Image({search}) {
    const [loading, setLoading] = useState(false);
    const [Images, setImages] = useState([])
    const id = '6YS2Fq0MYbOgnwoN5VE8tsZLIKJ196uxpBPn2ZCEg-Y';
    const [query, setQuery]=useState("man");
   // console.log(query)
   // setQuery(localStorage.getItem('query'))

    useEffect(() => {
      if(search !== "") {
        setQuery(search)
      }
      async function fetchImage() {
            setLoading(true)
            const resProfile = await axios.get(`https://api.unsplash.com/search/users/?page=1&per_page=10&query=${query}&client_id=${id}`).then(
                async (data) => {
                 // console.log(data)
                 let results = data.data.results.slice(0, 8);
  
                  let final = results.map((result) => {
                    let profile = {
                      id: result.id,
                      username: result.username,
                      first_name: result.first_name,
                      last_name: result.last_name,
                      photoLink: result.links.photos + `?client_id=${id}`,
                      total_photos: result.total_photos,
                    };
                      return profile;
                    });
                      return final;
                }
              ).catch(() => false);
              
              let photos = resProfile && resProfile.map((profile) => {
                return axios.get(profile.photoLink).then((data) => {
                  return data.data.map((res) => {
                    return {
                      id: res.id,
                      width: res.width,
                      height: res.height,
                      urls: res.urls,
                      regular_url: res.urls.small,
                      download: res.links.download,
                      categories: res.categories,
                      likes: res.likes,
                      location: res.user.location,
                    };
                  });
                });
              }); 
              photos && Promise.all(photos).then((res) => {
                res.forEach((photo, index) => {
                  photo.length = Math.min(photo.length, 4);
                  resProfile[index].photos = photo;
                }); 
                setImages(resProfile.filter(value => value.photos.length !== 0));
                setLoading(false);
                //console.log(resProfile);
              })
            }
     fetchImage()
    }, [query, search]);

    
    return (
        <div className="images">
          <Filter/>
          <div className="profile">
          {loading && <div></div>}
          {Images && Images.map((img, id) => {
             return (
               <Profile images={img}/>
             )
           })}
          </div>
        </div>
    )
}

export default Image
