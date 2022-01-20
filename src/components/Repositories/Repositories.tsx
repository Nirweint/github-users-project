import React from 'react';
import {Grid, Pagination, Stack, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {
    selectUserProfileInfo,
    selectUserPublicReposCount
} from "../../state/selectors/user-selectors";
import {Repository} from "./Repository";
import {Loader} from "../../common/components/Loader/Loader";
import {
    selectListOfRepositories,
    selectReposStatus
} from "../../state/selectors/repos-selectors";
import {StatusType} from "../../state/types";
import {PER_PAGE_COUNT, setReposTC} from "../../state/reducers/reposReducer";
import {NoReposPage} from "../pages/NoReposPage";

export const Repositories = React.memo(() => {
    const dispatch = useDispatch()
    const repositoryList = useSelector(selectListOfRepositories)
    const userPublicReposCount = useSelector(selectUserPublicReposCount)
    const {login} = useSelector(selectUserProfileInfo)
    const reposStatus = useSelector(selectReposStatus)

    const handlePageClick = (event: React.ChangeEvent<unknown>, page: number) => {
        if (login) {
            dispatch(setReposTC(login, page))
        }
    }

    const ALL_PAGES_COUNT = Math.ceil(userPublicReposCount / PER_PAGE_COUNT)

    if (userPublicReposCount === 0) {
        return <><NoReposPage/></>
    }

    return (
        <Grid container spacing={1} sx={{height: "70vh"}}>
            <Grid item>
                <Typography fontSize={42}
                            fontWeight={700}>Repositories({userPublicReposCount})</Typography>
            </Grid>
            <Grid
                container
                direction="column"
            >
                {reposStatus === StatusType.loading && (<><Loader/></>)}
                {reposStatus === StatusType.succeeded && <>
                    {repositoryList.map(({html_url, name, description}) => {
                        return (<Repository
                            key={html_url}
                            name={name}
                            description={description}
                            html_url={html_url}
                        />)
                    })}
				</>}
                <Grid container width={'100%'} marginTop={2}
                      justifyContent={'flex-end'}>
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

        </Grid>
    );
})