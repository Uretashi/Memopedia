import React from 'react';
import styles from './Main.module.css';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Login from "../Connection/Login/Login";
import CreateAccount from "../Connection/CreateAccount/CreateAccount";
import Memesearch from "../Memesearch/Memesearch";
import PostMeme from "../PostMeme/PostMeme";


const Main = () => (

<main className={`${styles.Main} text-white`}>
    <h1>Hello UwU</h1>
    <BrowserRouter>
        <Routes>
            <Route path="search/:tags" element={ <Memesearch /> } />
            <Route path="postMeme" element={ <PostMeme /> } />
            <Route path="login" element={ <Login /> } />
            <Route path="createAccount" element={ <CreateAccount /> } />
        </Routes>
    </BrowserRouter>
  </main>
);

export default Main;
