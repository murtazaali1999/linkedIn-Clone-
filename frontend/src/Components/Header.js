import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../fb";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';

import NavIcons from "./NavIcons";
import OImage from './OImage';
import "./Header.css"


const Header = () => {
  const dispatch = useDispatch();
  var user = useSelector(selectUser);

  const image = useRef("https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg");

  useEffect(() => {
    if (auth.currentUser != null)
      setProfilePic()
  }, [auth.currentUser])

  const logOuting = () => {
    dispatch(logout())/* logsout redux */
    auth.signOut();/* firebase logout */
    image.current = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg";
  }

  const setProfilePic = () => {
    if (auth.currentUser) {
      console.log("Setting Here");
      image.current = user.photoUrL;
    } else {
      image.current = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg";
    }
  }

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

        <div className="nav-icons" >
          <NavIcons title="Home" Icon={HomeIcon} />
          <NavIcons title="Jobs" Icon={WorkIcon} />
          <NavIcons title="My Network" Icon={PeopleAltIcon} />
          <NavIcons title="Messaging" Icon={MessageIcon} />
          <NavIcons title="Notifications" Icon={NotificationsIcon} />
          <div onClick={logOuting}>
            <OImage
              uri={image.current}
              onClick={logOuting}
            />
          </div>
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