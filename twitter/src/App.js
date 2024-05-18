import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

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
