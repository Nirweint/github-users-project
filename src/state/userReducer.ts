import {Dispatch} from "redux";
import {gitHubAPI} from "../api/api";
import {Nullable} from "../types/Nullable";
import {ThunkType} from "./store";

export const PER_PAGE_COUNT = 5

export enum USER_ACTIONS_TYPE {
    SET_USER = 'SET_USER',
    SET_LIST_OF_REPOSITORIES = "SET_LIST_OF_REPOSITORIES",
}

export type UserActionsType = SetUserACType | SetUserRepositoriesACType

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
    userRepositories: RepositoryType[]
}

export type RepositoryType = {
    html_url: Nullable<string>
    description: Nullable<string>
    name: Nullable<string>
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
    userRepositories: []
}


export const userReducer = (state = initialState, action: UserActionsType): UserStateType => {
    switch (action.type) {

        case USER_ACTIONS_TYPE.SET_USER: {
            return {...state, userProfile: {...action.payload}}
        }

        case USER_ACTIONS_TYPE.SET_LIST_OF_REPOSITORIES: {
            return {...state, userRepositories: action.payload.map(repo => ({...repo}))}
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

export type SetUserRepositoriesACType = ReturnType<typeof setUserRepositoriesAC>
export const setUserRepositoriesAC = (payload: RepositoryType[]) => {
    return {
        type: USER_ACTIONS_TYPE.SET_LIST_OF_REPOSITORIES,
        payload,
    } as const
}

// THUNK
export const setUserTC = (userName: string): ThunkType => dispatch => {
    gitHubAPI.getUser(userName)
        .then((res) => {
            const {login, avatar_url, name, followers, following, html_url, public_repos} = res.data
            dispatch(setUserAC({login, avatar_url, name, followers, following, html_url, public_repos}))
            dispatch(setUserRepositoriesTC(userName,1))
        })
        .catch(e => {
            console.warn(e)
        })
}

export const setUserRepositoriesTC = (userName: string, page: number) => (dispatch: Dispatch) => {
    gitHubAPI.getListOfUserReposPerPage(userName, PER_PAGE_COUNT, page)
        .then((res) => {
            const userRepositories = res.data
            dispatch(setUserRepositoriesAC(userRepositories))
        })
        .catch(e => {
            console.warn(e)
        })
}