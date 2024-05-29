import React from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import NavBar from "./components/NavBar";
import TrendBar from "./components/TrendBar";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import TweetDetail from "./routes/TweetDetail";

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    color: #e7e9ea;

    font-weight: 400;
`;

const ColumnLine = styled.div`
    border-left: 1px solid #252525;
`;

function App() {
    useEffect(() => {
        async function makeAccount() {
            const BASE_URL = process.env.REACT_APP_API_URL;

            try {
                const response = await axios.get(`${BASE_URL}accounts/1`);
                if (response.status === 404) {
                    const info = {
                        email: "abc123@gmail.com",
                        password: "abc123!",
                        nickname: "알",
                        bio: "새는 알에서 나오기 위해 투쟁한다. 알은 새의 세계이다. 누구든지 태어나려고 하는 자는 하나의 세계를 파괴하여야 한다.",
                    };
                    axios.post(`${BASE_URL}accounts`, info).then(console.log);
                }
            } catch (error) {
                console.error(error);
            }
        }
        makeAccount();
    }, []);

    return (
        <AppContainer>
            <NavBar />
            <ColumnLine />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/detail" element={<TweetDetail />} />
            </Routes>
            <ColumnLine />
            <TrendBar />
        </AppContainer>
    );
}

export default App;
