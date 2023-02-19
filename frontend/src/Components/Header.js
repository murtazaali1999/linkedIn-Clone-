import React from 'react'
import "./Header.css"

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';

import NavIcons from "./NavIcons";
import OImage from './OImage';


const Header = () => {
  return (
    <div className='header'>

      <div className="left-header">

        <img className='logo' src="https://www.freepnglogos.com/uploads/linkedin-in-logo-png-1.png" alt="" />

        <div className="header-search">
          <SearchIcon />
          <input type="text" />
        </div>

      </div>

      <div className="right-header">

        <div className="nav-icons">
          <NavIcons title="Home" Icon={HomeIcon} />
          <NavIcons title="Jobs" Icon={WorkIcon} />
          <NavIcons title="My Network" Icon={PeopleAltIcon} />
          <NavIcons title="Messaging" Icon={MessageIcon} />
          <NavIcons title="Notifications" Icon={NotificationsIcon} />
          <OImage uri="https://easydrawingguides.com/wp-content/uploads/2019/07/how-to-draw-darth-maul-from-star-wars-featured-image-1200.png" />

        </div>

        <div className="buttons-premium">
          <AppsIcon className="blackish" />
          <a href="">Retry Premium Free</a>
        </div>

      </div>

    </div>
  )
}


export default Header;