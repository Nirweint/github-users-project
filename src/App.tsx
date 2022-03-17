import React from 'react';
import {Header} from "./components/header/Header";
import {Route, Routes} from 'react-router-dom';
import {ProfilePage} from "./pages/ProfilePage";
import {SearchPage} from "./pages/SearchPage";
import {UserNotFound} from "./pages/UserNotFound";

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
