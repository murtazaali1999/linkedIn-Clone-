import React from 'react'
import "./NavIcons.css";

const NavIcons = ({ title, Icon }) => {
    return (
        <div className="nav-icon">
            {Icon && <Icon />}
            <h6 align="center">{title}</h6>
        </div>

    )
}

export default NavIcons
