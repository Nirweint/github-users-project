import React from 'react';
import {Header} from "./components/header/Header";
import {Route, Routes} from 'react-router-dom';
import {ProfilePage} from "./components/pages/ProfilePage";
import {SearchPage} from "./components/pages/SearchPage";
import {UserNotFound} from "./components/pages/UserNotFound";

export const App = () => {

    return (
        <div style={{height: "100vh"}}>
            <Header/>
            <Routes>
                <Route path={'/'} element={<SearchPage/>}/>
                <Route path={'/profile/:username'} element={<ProfilePage/>}/>
                <Route path={'/error'} element={<UserNotFound/>}/>
            </Routes>
        </div>
    );
}
