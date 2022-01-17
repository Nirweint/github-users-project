import React from 'react';
import {Header} from "./components/header/Header";
import {Container, Grid} from "@mui/material";
import {Profile} from "./components/profile/Profile";
import {MainContent} from "./components/mainContent/MainContent";

export const App = () => {
    return (
        <div style={{height: "100vh"}}>
            <Header/>
            <Container >
                <Grid container spacing={2} columns={16} m={3}>
                    <Grid item xs={6}>
                        <Profile/>
                    </Grid>
                    <Grid item xs={10}>
                        <MainContent/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
