import React from 'react';
import {Stack, Box} from "@mui/material";
import VideoCard from "../video-card/video-card";
import ChannelCard from "../channel-card/channel-card";

function Videos({videos}) {
    return (
        <Stack
            width={'100%'}
            direction={'row'}
            flexWrap={'wrap'}
            justifyContent={'start'}
            alignItems={'center'}
            gap={2}
        >
            {videos.map((itm) => (
                <Box key={itm.id.videoId}>
                    {itm.id.videoId && <VideoCard video={itm}/>}
                    {itm.id.channelId && <ChannelCard video={itm}/>}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos;