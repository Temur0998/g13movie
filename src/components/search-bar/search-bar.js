import React, {useState} from 'react';
import {useNavigate} from "react-router";
import {IconButton, Paper} from "@mui/material";
import {colors} from "../constanst";
import {Search} from "@mui/icons-material";


function SearchBar() {
    const [value, setValue] = useState('')
    const navigate = useNavigate()

    const searchHandler = e => {
        e.preventDefault();
        if (value) {
            navigate(`/search/${value}`)
            setValue('')
        }
    }


    return (
        <Paper
            component={'form'}
            onSubmit={searchHandler}
            sx={{
                border: `1px solid ${colors.fontColor}`,
                pl: 2,
                boxShadow: 'none',
                mr: 5
            }}>

            <input type="text"
                   placeholder='Search...'
                   className='search-bar'
                   onChange={e => setValue(e.target.value)}
                   value={value}/>


            <IconButton type='button' sx={{p: '10px', color: colors.bgColor}}>
                <Search/>
            </IconButton>
        </Paper>
    );
}

export default SearchBar;