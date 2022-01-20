import React from 'react';
import {Grid, Typography} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export const NoReposPage = () => {
    return (
        <Grid
            container
            alignItems={'center'}
            justifyContent={'center'}
            sx={{height: "30vh"}}
        >
            <Grid container width={'250px'} justifyContent={'center'}>
                <Grid item>
                    <PersonIcon sx={{height: '100px', width: '100px', color: '#8a8a8c'}}/>
                </Grid>
                <Grid item>
                    <Typography fontSize={26} textAlign={'center'} color={'#8a8a8c'}>
                        User doesn't have any public repositories yet
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}