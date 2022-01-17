import React from 'react';
import {Header} from "./components/header/Header";
import {Grid} from "@mui/material";
import {Profile} from "./components/profile/Profile";
import {MainContent} from "./components/MainContent/MainContent";

export const App = () => {
    return (
        <div>
            <Header/>
            <Grid container spacing={2} columns={16} m={3}>
                <Grid item xs={6}>
                    <Profile/>
                </Grid>
                <Grid item xs={10}>
                    <MainContent/>
                </Grid>
            </Grid>
        </div>
    );
}
