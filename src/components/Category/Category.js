import React from 'react';
import {Stack} from "@mui/material";
import {categories, colors} from "../constanst";

const Category = ({selectedCategory, selectCategory}) => {


    return (
        <Stack direction={'row'} style={{overflowX: 'scroll', padding: '5px',}} maxWidth={'100%'}>
            {categories.map(itm =>
                <button type='button' className='category-btn' key={itm.name}
                        style={{
                            backgroundColor: selectCategory === itm.name ? colors.bgColor : 'white',
                            color: selectCategory === itm.name ? 'white' : colors.bgColor
                        }}

                        onClick={() => {
                            selectedCategory(itm.name);
                        }}
                >
                    <span>{itm.icon}</span>
                    <span style={{marginLeft: '10px'}}>{itm.name}</span>
                </button>
            )}
        </Stack>
    );
};

export default Category;
