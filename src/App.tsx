import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import Main from "./components/Main/Main";
import Memesearch from "./components/Memesearch/Memesearch";
import PostMeme from "./components/PostMeme/PostMeme";
import Login from "./components/Connection/Login/Login";
import CreateAccount from "./components/Connection/CreateAccount/CreateAccount";
import Meme from "./components/Meme/Meme";

import UserContext from "./context/UserContext";
import UserInterface, { User } from "./interfaces/UserInterface";


export default class App extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            setUser: (user: User) => (this.setState({...this.state, user: user}))
        };
    }

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'))
        this.setState({...this.state, user: user ? user : {}})
    }

    render() {
        return (
            <div>
                <div className="App">
                    <UserContext.Provider value={this.state as UserInterface}>
                        <BrowserRouter>
                            <Header />
                            <main className="main">
                                <Routes>
                                    <Route path="" element={<Main />} />
                                    <Route path="search/:tags" element={<Memesearch />} />
                                    <Route path="postMeme" element={<PostMeme />} />
                                    <Route path="login" element={<Login />} />
                                    <Route path="createAccount" element={<CreateAccount />} />
                                    <Route path="meme" element={<Meme/>} />
                                </Routes>
                            </main>
                            <Footer />
                        </BrowserRouter>
                    </UserContext.Provider>
                </div>
            </div>
        );
    }
}
