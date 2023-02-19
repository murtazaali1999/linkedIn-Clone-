import React from 'react'
import "./Post.css"

import OImage from "./OImage";
import InputOptions from "./InputOptions";

import Like from "@mui/icons-material/ThumbUp";
import Comment from "@mui/icons-material/Comment";
import Share from "@mui/icons-material/Share";
import Send from "@mui/icons-material/Send";


const Post = ({ name, description, message, photoUrl }) => {

    const inputOptions = (Icon, title, color) =>
    (
        <div className='temp-input-options'>
            <Icon style={{ color: color }} />
            <h4>{title}</h4>
        </div >
    )/* Custom Input Options */

    return (
        <div className='post'>
            <div className="post-header">

                <OImage uri="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg" />

                <div className="post-info">
                    <h4>{name}</h4>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post-body">
                <p>{message}</p>
                {/* image here */}
                {/*<img src="" alt="no image yet" /> */}
            </div>

            <div className="post-buttons">
                {inputOptions(Like, "Like", "gray")}
                {inputOptions(Comment, "Comment", "gray")}
                {inputOptions(Share, "Share", "gray")}
                {inputOptions(Send, "Send", "gray")}
            </div>

        </div>
    )
}

export default Post