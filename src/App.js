import logo from './logo.png';
import './App.css';
import SosTweets from "./SosTweet";

import React from 'react';

function App() {
    return(
        <div className="App">
            <img src={logo}  alt='アイコン' className='logo-img' />
            <h2>救助要請ツイート一覧</h2>
            <SosTweets/>
        </div>
    );
}

export default App;
