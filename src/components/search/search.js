import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {ApiServise} from "../api.services";
import {Box, Container, Typography} from "@mui/material";
import {colors} from "../constanst";
import Videos from "../videos/videos";

function Search() {
    const [videos, setVideos] = useState([])
    const {id} = useParams()

    useEffect(() => {
        ApiServise.fetching(`search?part=snippet&q=${id}`).then(data => setVideos(data.items));
    }, [id])
    return (
        <Box p={2} mt={'50px'} sx={{height: '120vh'}}>
            <Container maxWidth={'90%'}>
                <Typography variant={'h4'} sx={{fontWeight: 'bold', color: '#e27878'}}>
                    Search for results
                    <span
                        style={{color: colors.fontColor}}>{' ' + ' ' + id.slice(0, 1).toUpperCase() + id.slice(1) + ' ' + ' '}
                    </span>
                    videos
                </Typography>
                <Videos videos={videos}/>
            </Container>
        </Box>
    );
}

export default Search;