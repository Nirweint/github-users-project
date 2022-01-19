import React, {useEffect} from 'react';
import {Container, Grid} from "@mui/material";
import {Profile} from "../profile/Profile";
import {Repositories} from "../mainContent/Repositories";
import {useDispatch, useSelector} from "react-redux";
import {selectUserIsLoading} from "../../state/selectors";
import {Loader} from "../../common/components/Loader/Loader";
import {useParams} from 'react-router-dom';
import {setUserTC} from "../../state/userReducer";

export const ProfilePage = React.memo(() => {
    console.log("ProfilePage RENDER")
    const dispatch = useDispatch()
    const isLoading = useSelector(selectUserIsLoading)
    const params = useParams<'username'>()

    const userName = params.username
    console.log(userName)

    useEffect(() => {
        if (userName !== undefined) {
            dispatch(setUserTC(userName))
        }
    }, [userName, dispatch])


    if (isLoading) {
        return (
            <Grid
                height={'70vh'}
                container
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Grid item>
                    <Loader/>
                </Grid>
            </Grid>
        )
    }

    return (
        <Container>
            <Grid container spacing={2} columns={16} m={3}>
                <Grid item xs={6}>
                    <Profile/>
                </Grid>
                <Grid item xs={10}>
                    <Repositories/>
                </Grid>
            </Grid>
        </Container>
    );
})