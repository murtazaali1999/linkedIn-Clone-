import React from 'react'
import OImage from './OImage'
import "./Sidebar.css";

const SideBar = () => {


  const recentItemHashed = (item) => {
    return (
      <div className='flexing'>
        <span >#</span>
        <p className='flexing-item'>{item}</p>
      </div>
    )
  }


  return (
    <div className='sidebar'>
      <div className="sidebar-top">
        <img className='back-img' src="https://www.teahub.io/photos/full/257-2579582_wallpaper-linear-orange-gradient-blue-dark-orange-medium.jpg" alt="not right now" />{/* background image */}
        <OImage uri="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg" />
        <div className="intro">
          <h2 >Murtaza Ali</h2>
          <h6 className='full-gray'>MEVN/MERN DEV / Game Designer</h6>
        </div>
        <hr className='full-gray' />

        <div className="stating">

          <div className='statings'>
            <p className='stat'>Profile Views</p>
            <p className='stat-value'>841</p>
          </div>

          <div className='statings'>
            <p className='stat'>Views of your post</p>
            <p className='stat-value'>441</p>
          </div>

        </div>

      </div>

      <div className="sidebar-bottom">
        <div className='recent'>Recent</div>
        <div className='recent-tags'>
          {recentItemHashed("ReactJS")}
          {recentItemHashed("MongoDb")}
          {recentItemHashed("Vuejs")}
          {recentItemHashed("Express")}
        </div>
      </div>
    </div>
  )
}

export default SideBar
