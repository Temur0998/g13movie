import React, {useEffect, useState} from 'react';
import {Box, Container} from "@mui/material";
import {useParams} from "react-router";
import {ApiServise} from "../api.services";
import ChannelCard from "../channel-card/channel-card";
import Videos from "../videos/videos";


const Channel = () => {
    const [channelDetail, setChannelDetail] = useState()
    const [videos, setVideos] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const getData = async () => {
            try {
                const dataChannelDetail = await ApiServise.fetching(`channels?.part=snippet&id=${id}`)
                setChannelDetail(dataChannelDetail.items[0])

                const dataVideo = await ApiServise.fetching(
                    `search?.channelId=${id}&part=snippet%2Cid&order=date`
                )
                setVideos(dataVideo?.items)
            } catch (error) {
                console.log(error)
            }
        }

        getData()
    }, [id])

    return (
        <Box minHeight={'95vh'} mt={'-150px'}>
            <Box>
                <Box
                    width={'100%'}
                    height={'350px'}
                    marginTop={'95px'}
                    zIndex={10}
                    sx={{
                        backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        objectFit: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                />

                <ChannelCard video={channelDetail} marginTop={'-50px'}/>
            </Box>
            <Container maxWidth={'90%'} marginTop={'50px'}>
                <Videos videos={videos}/>
            </Container>
        </Box>
    );
}

export default Channel;