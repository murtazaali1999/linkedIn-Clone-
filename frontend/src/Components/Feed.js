import React, { useState, useEffect, forwardRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FlipMove from "react-flip-move"
import "./Feed.css"

import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import VideoIcon from "@mui/icons-material/VideoFile";
import CalendarIcon from "@mui/icons-material/CalendarMonth";
import ArticleIcon from "@mui/icons-material/Article";

import InputOptions from "./InputOptions";
import Post from './Post';


import { db, auth, } from "../fb";
import { selectUser } from "../features/userSlice"
import { addDoc, collection, getDocs, } from "firebase/firestore";

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();/* to launch dispatch functions */
    const user = useSelector(selectUser); /* to select user context */


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

        if (auth.currentUser) {

            console.log(user.displayName, user.email, user.photoUrL);

            await addDoc(collection(db, "posts"), {
                name: user.displayName,
                description: user.email,
                message: message,
                photoUrl: user.photoUrL || "",
                timeStamp: Date.now()
            })

            setMessage("");
            setPosts([]); /* for refetching */
        }
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
                <FlipMove>
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
                </FlipMove>
            </div>

        </div>
    )
}

export default Feed
