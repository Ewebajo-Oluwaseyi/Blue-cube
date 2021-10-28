import React, { useState } from 'react'

function Natification() {
    const [dropdown, setDropdown] = useState(false)

    const changeDropdown = () => {
       setDropdown(!dropdown)
    }

    const notifications = [
        {
            id: 1,
            image:
              "https://images.unsplash.com/photo-1610646402667-79fce5fc1666?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjY3MzZ8MHwxfGFsbHwzfHx8fHx8Mnx8MTYxOTY4MTUzMw&ixlib=rb-1.2.1&q=80&w=400",
            message: "Michael liked you!",
            time: "About 20 minutes ago",
            type: "like",
          },
          {
            id: 2,
            image:
              "https://images.unsplash.com/photo-1614440288714-57c4b5b6700a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjY3MzZ8MHwxfGFsbHwxfHx8fHx8Mnx8MTYxOTY4MTUzMw&ixlib=rb-1.2.1&q=80&w=400",
            message: "Jack liked you!",
            time: "About 40 minutes ago",
            type: "like",
          },
          {
            id: 3,
            image:
              "https://images.unsplash.com/photo-1591157866194-b3b4e279c698?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjY3MzZ8MHwxfGFsbHw0fHx8fHx8Mnx8MTYxOTY4MTUzMw&ixlib=rb-1.2.1&q=80&w=400",
            message: "Michael commented on your photo!",
            time: "About 56 minutes ago",
            type: "comment",
          },
    ];

    return (
        <div className="notification">
           <i class="fas fa-bell" onClick={changeDropdown}></i>
           <div className="noti-no">3</div>
            {dropdown && 
                <div className="notification-group">
                   {notifications.map((e, id) => {
                     return(
                    <div key={id} class="notif">
                        <div className="notiimg">
                           <img src={e.image} alt=""/> 
                        </div>
                        <div class="notification-details">
                            <div class="message">{e.message}</div>
                            <div class="time">{e.time}</div>
                        </div>
                        <div class="notification-icon">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-comment-alt"></i>
                        </div>
                    </div>
                   )})}
                </div>
            }
        </div>
    )
}

export default Natification
