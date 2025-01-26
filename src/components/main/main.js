import React, {useEffect, useState} from 'react';
import {Box, Container, Stack, Typography} from "@mui/material";
import {colors} from "../constanst";
import Category from "../Category/Category";
import {ApiServise} from "../api.services";
import Videos from "../videos/videos";

const Main = () => {
    const [selectCategory, setSelectCategory] = useState('New');
    const [videos, setVideos] = useState([]);

    const selectedCategory = category => setSelectCategory(category)

    useEffect(() => {
        ApiServise.fetching(`search?part=snippet&q=${selectCategory}`).then(data => setVideos(data.items));
    }, [selectCategory])


    return (
        <Stack>
            <Category selectedCategory={selectedCategory} selectCategory={selectCategory}/>
            <Box p='2' sx={{height: '90vh'}}>
                <Container maxWidth={'90%'}>
                    <Typography variant='h4' style={{fontweight: 'bold', marginTop: '15px'}}>
                        {selectCategory} <span style={{color: colors.bgColor}}>videos</span>
                    </Typography>
                    <Videos videos={videos}/>
                </Container>
            </Box>
        </Stack>
    );
};

export default Main;
