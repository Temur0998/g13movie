import React from 'react';
import {Avatar, Card, CardContent, CardMedia, Typography} from "@mui/material";
import Stack from "@mui/material/Stack";
import {CheckCircle} from "@mui/icons-material";
import moment from 'moment'
import {colors} from "../constanst";
import {Link} from "react-router";

function VideoCard({video}) {
    return (
        <Card
            sx={{
                width: {xs: '100%', sm: '280px', md: '300px', lg: '320px'},
                boxShadow: 'none',
                borderRadius: 0,
                marginTop: '15px'
            }}>


            <Link to={`/video/${video.id.videoId}`}>
                <CardMedia
                    image={video?.snippet?.thumbnails?.high?.url}
                    alt={video?.snippet?.title}
                    sx={{width: {xs: '100%', sm: '280px', md: '300px', lg: '320px'}, height: '180px'}}
                />
            </Link>

            <CardContent
                sx={{
                    backgroundColor: colors.fontColor,
                    height: '200px',
                    position: 'relative'
                }}>

                <Typography my={'5px'} sx={{opacity: '.4'}}>
                    {moment(video?.snippet?.publishedAt).fromNow()}
                </Typography>
                <Link to={`/video/${video.id.videoId}`}>
                    <Typography variant='subtitle1' fontWeight={'bold'}>
                        {video?.snippet?.title.slice(0, 50)}
                    </Typography>
                </Link>
                <Typography variant='subtitle2' sx={{opacity: '.6'}}>
                    {video?.snippet?.description.slice(0, 70)}
                </Typography>


                <Stack
                    direction={'row'}
                    position={'absolute'}
                    bottom={'10px'}
                    alignItems={'center'}
                    gap={'5px'}
                >

                    <Link to={`/channel/${video?.snippet.channelId}`} direction={'row'}>
                        <Avatar src={video?.snippet?.thumbnails?.high?.url}/>
                    </Link>
                    <Link to={`/channel/${video?.snippet.channelId}`}>
                        <Typography variant="subtitle2">
                            {video?.snippet?.channelTitle}
                            <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px'}}/>
                        </Typography>
                    </Link>


                </Stack>
            </CardContent>
        </Card>
    );
}

export default VideoCard;