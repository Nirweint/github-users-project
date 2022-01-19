import React from 'react';
import {Avatar, Grid, Link, Typography} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import {useSelector} from "react-redux";
import {selectUserProfileInfo} from "../../state/selectors";

export const Profile = React.memo( () => {
    const {
        followers,
        following,
        avatar_url,
        login,
        name,
        html_url
    } = useSelector(selectUserProfileInfo)

    const hasAvatarUrl = avatar_url !== null ? avatar_url : undefined
    const hasUrl = html_url !== null ? html_url : undefined

    return (
        <div>
            <Avatar alt="User Avatar" src={hasAvatarUrl}
                    sx={{height: '250px', width: '250px'}}/>
            <Typography sx={{fontSize: '36px'}}>
                {name}
            </Typography>
            <Typography>
                <Link href={hasUrl} underline="none" target={'_blank'}>
                    {login}
                </Link>
            </Typography>
            <Grid container spacing={2} paddingTop={1}>
                <Grid item>
                    <Grid container direction={'row'} alignItems={'center'} spacing={1}>
                        <Grid item>
                            <PeopleIcon sx={{color: '#8a8a8c'}}/>
                        </Grid>
                        <Grid item>
                            <Typography>{followers} followers</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction={'row'} alignItems={'center'} spacing={1}>
                        <Grid item>
                            <PersonIcon sx={{color: '#8a8a8c'}}/>
                        </Grid>
                        <Grid item>
                            <Typography>{following} following</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
})