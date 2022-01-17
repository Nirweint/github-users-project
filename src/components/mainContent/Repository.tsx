import React from 'react';
import {Grid, Link, Typography} from "@mui/material";
import {RepositoryType} from "../../state/userReducer";

export const Repository: React.FC<RepositoryType> = ({html_url,name ,description}) => {

    const hasUrl = html_url !== null ? html_url : undefined

    return (
        <Grid key={hasUrl} item sx={{backgroundColor: "#fff"}} width={"auto"} padding={2} marginTop={2}>
            <Link href={hasUrl} underline="none" target={'_blank'}>
                <Typography fontSize={26}>
                    {name}
                </Typography>
            </Link>
            <Typography>{description}</Typography>
        </Grid>
    );
}