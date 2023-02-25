/* import { User } from './features/User';*/
import { useDispatch, useSelector } from "react-redux"
import { login, selectUser } from './features/userSlice'

import { auth } from "./fb"

import { useEffect } from "react"
import './App.css';

import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Feed from './Components/Feed';
import Login from "./Components/Login";
import Widgets from "./Components/Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        /* on login */
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrL: userAuth.photoURL,
        }))

      } else {
        /* on logout */
      }
    })

  }, [])

  return (
    <div className="App">
      <Header />

      {!user ? (<Login />) : (
        <div className="app_body">
          <SideBar />
          <Feed />
          <Widgets />
        </div>)
      }


    </div>
  );
}

export default App;
