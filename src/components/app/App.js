import React from "react";
import './app.css';
import {Routes, Route} from "react-router-dom";
import Main from "../main/main";
import Channel from "../channel/channel";
import Box from "@mui/material/Box";
import Navbar from "../navbar/navbar";
import VideoDetail from "../video-detail/videodetail";
import Search from "../search/search";

const App = () => {
    return (
        <Box>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/channel/:id'} element={<Channel/>}/>
                <Route path={'/video/:id'} element={<VideoDetail/>}/>
                <Route path={'/search/:id'} element={<Search/>}/>
            </Routes>
        </Box>
    );
}

export default App;
