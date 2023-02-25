import { useState } from "react";
import { useDispatch } from "react-redux"

import { login } from "../features/userSlice"

import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../fb";



import "./Login.css"

const Login = () => {
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()

    const Login = (e) => {
        e.preventDefault();

        if (!email || !password) {
            return alert("Please Enter Email and Password")
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                dispatch(login({ /* then sets other imp stuff on redux */
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.photoURL
                }))

                console.log("Profile Created Successfully")
            })

    }

    const Register = (e) => {
        e.preventDefault();

        if (!name) {
            return alert("Please Enter a Full Name");
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                updateProfile(userAuth.user /* gets the use whos logged in */, {
                    displayName: name, /* sets the name and profile pic */
                    photoURL: profilePic
                })
                    .then(() => {
                        dispatch(login({ /* then sets other imp stuff */
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profilePic
                        }))

                        console.log("Profile Created Successfully")
                    })
            })
            .catch((err) => {
                return console.log(err.message);
            })
    }

    return (
        <div className='login'>
            <img src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png" alt="" className='linkedin-logo' />
            <div className="login-form">
                <form action="#" className='link-form'>
                    <input onChange={e => { setName(e.target.value) }} value={name} type="text" name='fullname' placeholder="  Fullname (required if registering)" />
                    <input onChange={e => { setProfilePic(e.target.value) }} value={profilePic} type="text" name="profile-pic-url" placeholder="  Profile Pic (Optional)" />
                    <input onChange={e => { setEmail(e.target.value) }} value={email} type="email" name='email' placeholder="  Email" />
                    <input onChange={e => { setPassword(e.target.value) }} value={password} type="password" name='password' placeholder="  Password" />

                    <button type="submit" onClick={Login}>Sign In</button>
                </form>
            </div>
            <p className='member'>Not a member? <a className='register' onClick={Register}>Register Now</a></p>
        </div>
    )
}

export default Login