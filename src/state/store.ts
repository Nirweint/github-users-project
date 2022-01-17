import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkAction} from "redux-thunk";
import {UserActionsType, userReducer} from "./userReducer";

const rootReducer = combineReducers({
    user: userReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>

export type ThunkType = ThunkAction<void, AppRootStateType, unknown, RootActionsType>

export type RootActionsType = UserActionsType
