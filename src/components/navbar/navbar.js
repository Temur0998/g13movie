import React from 'react';
import {Box, Stack} from "@mui/material";
import SearchBar from "../search-bar/search-bar";
import {colors, logo} from "../constanst";
import {Link} from "react-router";


const Navbar = () => {
    return (
        <Stack
            direction={"row"}
            justifyContent={'space-between'}
            alignItems={'center'}
            p={2}
            sx={{position: "sticky", top: 0, zIndex: 999, backgroundColor: colors.bgColor, color: 'white', p: 1,}}>

            <Link to={'/'}>
                <img style={{borderRadius: '50%', objectFit: 'cover', backgroundColor: 'white',}}
                     src={logo} alt="logo" width={45} height={45}/>
            </Link>

            <SearchBar/>
            <Box/>

        </Stack>

    );
}

export default Navbar;