import React from 'react';
import {Grid, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {Loader} from "../../common/components/Loader/Loader";

export const SearchPage = () => {
    return (
        <Grid
            container
            alignItems={'center'}
            justifyContent={'center'}
            sx={{height: "90vh"}}
        >
            <Grid container width={'250px'} justifyContent={'center'}>
                <Grid item>
                    <SearchIcon sx={{height: '100px', width: '100px', color: '#8a8a8c'}}/>
                </Grid>
               <Grid item>
                   <Typography fontSize={26} textAlign={'center'} color={'#8a8a8c'}>
                       Start with searching a GitHub user
                   </Typography>
               </Grid>
            </Grid>
        </Grid>
    );
}