import React from 'react';
import {Avatar, Grid, Typography} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';

export const Profile = () => {


    return (
        <div>
            <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg"
                    sx={{height: '250px', width: '250px'}}/>
            <Typography sx={{fontSize: '36px'}}>
                UserName
            </Typography>
            <Typography>
                UserNameLink
            </Typography>
            <Grid container spacing={2}>
                <Grid item>
                    <Grid container direction={'row'} alignItems={'center'} spacing={1}>
                        <Grid item>
                            <PeopleIcon/>
                        </Grid>
                        <Grid item>
                            <Typography>65.5k followers</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction={'row'} alignItems={'center'} spacing={1}>
                        <Grid item>
                            <PersonIcon/>
                        </Grid>
                        <Grid item>
                            <Typography>171 following</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}