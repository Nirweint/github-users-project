import React from 'react';
import {Grid, Pagination, Stack, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {
    selectListOfUserRepositories,
    selectUserProfileInfo,
    selectUserPublicReposCount
} from "../../state/selectors";
import {Repository} from "./Repository";
import {PER_PAGE_COUNT, setUserRepositoriesTC} from "../../state/userReducer";

export const MainContent = () => {
    const dispatch = useDispatch()
    const repositoryList = useSelector(selectListOfUserRepositories)
    const userPublicReposCount = useSelector(selectUserPublicReposCount)
    const {login} = useSelector(selectUserProfileInfo)

    const handlePageClick = (event: React.ChangeEvent<unknown>, page: number) => {
        if (login) {
            dispatch(setUserRepositoriesTC(login, page))
        }
    }

    const ALL_PAGES_COUNT = userPublicReposCount / PER_PAGE_COUNT

    return (
        <Grid container spacing={1} sx={{height: "70vh"}}>
            <Grid item>
                <Typography fontSize={42}
                            fontWeight={700}>Repositories({userPublicReposCount})</Typography>
            </Grid>
            <Grid
                container
                direction="column"
                alignItems="stretch"
            >
                {repositoryList.map(({html_url, name, description}) => {
                    return (<Repository
                        key={html_url}
                        name={name}
                        description={description}
                        html_url={html_url}
                    />)
                })}
            </Grid>
            <Grid container width={'100%'} marginTop={2} justifyContent={'flex-end'}>
                <Grid item>
                    <Stack spacing={2}>
                        <Pagination
                            count={ALL_PAGES_COUNT}
                            shape="rounded"
                            onChange={handlePageClick}
                        />
                    </Stack>
                </Grid>
            </Grid>
        </Grid>
    );
}