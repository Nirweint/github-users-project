import React, {useEffect} from 'react';
import {Container, Grid} from "@mui/material";
import {Profile} from "../profile/Profile";
import {Repositories} from "../Repositories/Repositories";
import {useDispatch, useSelector} from "react-redux";
import {Loader} from "../../common/components/Loader/Loader";
import {useNavigate, useParams} from 'react-router-dom';
import {setUserTC} from "../../state/reducers/userReducer";
import {selectUserStatus} from "../../state/selectors/user-selectors";
import {StatusType} from "../../state/types";

export const ProfilePage = React.memo(() => {

    const userStatus = useSelector(selectUserStatus)
    const dispatch = useDispatch()
    const params = useParams<'username'>()
    const navigate = useNavigate()
    const userName = params.username

    useEffect(() => {
        if (userName !== undefined) {
            dispatch(setUserTC(userName))
        }
    }, [userName, dispatch])

    if (userStatus === StatusType.failed) {
        navigate('/error')
    }

    if (userStatus === StatusType.loading) {
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