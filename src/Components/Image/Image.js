import React, { useEffect, useState } from 'react';
import Filter from '../Filter/filter';
import axios from 'axios';
import Profile from '../Profile/Profile';

function Image({search}) {
    const [loading, setLoading] = useState(false);
    const [Images, setImages] = useState([])
    const id = '6YS2Fq0MYbOgnwoN5VE8tsZLIKJ196uxpBPn2ZCEg-Y';
    const [query, setQuery]=useState("a");
   // console.log(query)
   // setQuery(localStorage.getItem('query'))

    useEffect(() => {
      if(search !== "") {
        setQuery(search)
      }
      async function fetchImage() {
            setLoading(true)
            const resProfile = await axios.get(`https://api.unsplash.com/photos?query=${query}&client_id=${id}`, {
              headers:{
                'Accept-Version': 'v1',
              }
              }).then(
                async (data) => {
                 let results = data.data.slice(0, 8);
                 //   console.log(results)
                  let final = results.map((result) => {
                    let profile = {
                      id: result.id,
                      username: result.user.username,
                      first_name: result.user.first_name,
                      last_name: result.user.last_name,
                      photoLink: result.user.links.photos + `?client_id=${id}`,
                      total_photos: result.user.total_photos,
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

                setImages(resProfile);
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
