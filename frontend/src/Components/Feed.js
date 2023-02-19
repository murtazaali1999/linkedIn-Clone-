import React, { useState, useEffect } from 'react'
import "./Feed.css"

import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import VideoIcon from "@mui/icons-material/VideoFile";
import CalendarIcon from "@mui/icons-material/CalendarMonth";
import ArticleIcon from "@mui/icons-material/Article";

import InputOptions from "./InputOptions";
import Post from './Post';

import { db, auth, } from "../fb";

import { getDoc, doc, addDoc, collection, setDoc, getDocs } from "firebase/firestore";

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        //gets all the posts
        getFeed();
    }, [posts])

    const getFeed = async () => {
        const snap = await getDocs(collection(db, "posts"));

        setPosts(
            snap.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
    }

    const sendPost = async (e) => {
        e.preventDefault();

        await addDoc(collection(db, "posts"), {
            name: "Murtaza Ali",
            description: "Test Description",
            message: message,
            photoUrl: " ",
            timeStamp: Date.now()
        })

        setMessage("");
        setPosts([]); /* for refetching */
    }

    return (
        <div className='feed'>
            <div className='feed-input-container'>

                <div className="feed-input">
                    <CreateIcon className='gray' />
                    <form action="#" onSubmit={sendPost}>
                        <input type="text" value={message} onChange={e => setMessage(e.target.value)} name="post" id="post" />
                    </form>
                </div>

                <div className="input-options">
                    <InputOptions Icon={ImageIcon} title="Photo" color="blue" />
                    <InputOptions Icon={VideoIcon} title="Video" color="orange" />
                    <InputOptions Icon={CalendarIcon} title="Event" color="purple" />
                    <InputOptions Icon={ArticleIcon} title="Write Article" color="green" />
                </div>

            </div>

            <div className="posts">
                {
                    posts?.map(({ id, data: { name, description, message, photoUrl } }) => (
                        <Post
                            key={id}
                            name={name}
                            description={description}
                            message={message}
                            photoUrl={photoUrl}
                        />
                    )
                    )
                }
            </div>

        </div>
    )
}

export default Feed
