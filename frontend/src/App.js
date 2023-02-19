import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Feed from './Components/Feed';
import Widgets from "./Components/Widgets";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="app_body">
        <SideBar />
        <Feed />
        <Widgets />
      </div>

    </div>
  );
}

export default App;
