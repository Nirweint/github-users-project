import {gitHubAPI} from "../../api/api";
import {Nullable} from "../../types/Nullable";
import {ThunkType} from "../store";
import {StatusType} from "../types";
import {setReposTC} from "./reposReducer";

export enum USER_ACTIONS_TYPE {
    SET_USER = 'UserReducer/SET_USER',
    SET_STATUS = "UserReducer/SET_STATUS",
    SET_ERROR = "UserReducer/SET_ERROR",
}

export type UserActionsType = SetUserACType | SetUserStatusACType | SetUserErrorACType

type UserProfileType = {
    login: Nullable<string>
    avatar_url: Nullable<string>
    name: Nullable<string>
    followers: Nullable<number>
    following: Nullable<number>
    html_url: Nullable<string>
    public_repos: number
}

export type UserStateType = {
    userProfile: UserProfileType
    status: StatusType
    error: Nullable<string>
}

const initialState: UserStateType = {
    userProfile: {
        login: null,
        avatar_url: null,
        name: null,
        followers: null,
        following: null,
        html_url: null,
        public_repos: 0,
    },
    status: StatusType.idle,
    error: null,
}


export const userReducer = (state = initialState, action: UserActionsType): UserStateType => {
    switch (action.type) {
        case USER_ACTIONS_TYPE.SET_USER: {
            return {...state, userProfile: {...action.payload}}
        }
        case USER_ACTIONS_TYPE.SET_STATUS: {
            return {...state, status: action.status,}
        }
        case USER_ACTIONS_TYPE.SET_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}


export type SetUserACType = ReturnType<typeof setUserAC>
export const setUserAC = (payload: UserProfileType) => {
    return {
        type: USER_ACTIONS_TYPE.SET_USER,
        payload,
    } as const
}

export type SetUserStatusACType = ReturnType<typeof setUserStatusAC>
export const setUserStatusAC = (status: StatusType) => {
    return {
        type: USER_ACTIONS_TYPE.SET_STATUS,
        status,
    } as const
}

export type SetUserErrorACType = ReturnType<typeof setUserErrorAC>
export const setUserErrorAC = (error: string) => {
    return {
        type: USER_ACTIONS_TYPE.SET_ERROR,
        error,
    } as const
}

// THUNK
export const setUserTC = (userName: string): ThunkType => dispatch => {
    dispatch(setUserStatusAC(StatusType.loading))
    gitHubAPI.getUser(userName)
        .then((res) => {
            const {
                login,
                avatar_url,
                name,
                followers,
                following,
                html_url,
                public_repos
            } = res.data
            dispatch(setUserAC({
                login,
                avatar_url,
                name,
                followers,
                following,
                html_url,
                public_repos
            }))
            if (public_repos !== 0) {
                dispatch(setReposTC(userName, 1))
            }
            dispatch(setUserStatusAC(StatusType.succeeded))
        })
        .catch(e => {
            dispatch(setUserStatusAC(StatusType.failed))
        })
}