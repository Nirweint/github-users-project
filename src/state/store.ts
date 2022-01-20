import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkAction} from "redux-thunk";
import {UserActionsType, userReducer} from "./reducers/userReducer";
import {reposReducer} from "./reducers/reposReducer";

const rootReducer = combineReducers({
    user: userReducer,
    repos: reposReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>

export type ThunkType = ThunkAction<void, AppRootStateType, unknown, RootActionsType>

export type RootActionsType = UserActionsType