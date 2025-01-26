import React from 'react';
import {Box, CardContent, CardMedia, Typography} from "@mui/material";
import {colors} from "../constanst";
import {CheckCircle} from "@mui/icons-material";
import {Link} from "react-router";

function ChannelCard({video, marginTop}) {
    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: {xs: '350px', md: '320px'},
                height: '400px',
                margin: 'auto',
                marginTop: marginTop,
                backgroundColor: colors.fontColor,
            }}
        >

            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}>

                <Link to={`/channel/${video?.snippet.channelId}`} direction={'row'}>
                    <CardMedia
                        image={video?.snippet?.thumbnails?.high?.url}
                        alt={video?.snippet?.title}
                        sx={{
                            borderRadius: '50%',
                            width: '180px',
                            height: '180px',
                            mb: '2',
                            marginLeft: '20px'
                        }}>

                    </CardMedia>
                </Link>

                <Link to={`/channel/${video?.snippet.channelId}`} direction={'row'}>
                    <Typography variant={'h6'} sx={{marginTop: '5px'}}>
                        {video?.snippet?.title}{' '}
                        <CheckCircle sx={{fontSize: '14px', color: colors.bgColor, ml: '5px'}}/>
                    </Typography>
                </Link>


            </CardContent>

        </Box>
    );
}

export default ChannelCard;