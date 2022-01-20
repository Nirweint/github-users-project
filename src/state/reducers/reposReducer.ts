import {Dispatch} from "redux";
import {gitHubAPI} from "../../api/api";
import {Nullable} from "../../types/Nullable";
import {StatusType} from "../types";

export const PER_PAGE_COUNT = 5

export enum REPOS_ACTIONS_TYPE {
    SET_LIST_OF_REPOSITORIES = "ReposReducer/SET_LIST_OF_REPOSITORIES",
    SET_STATUS = "ReposReducer/SET_STATUS",
    SET_ERROR = "ReposReducer/SET_ERROR",
}

export type ReposActionsType = SetReposACType | SetReposStatusACType | SetReposErrorACType

export type ReposStateType = {
    userRepositories: RepositoryType[],
    status: StatusType,
    error: Nullable<string>
}

export type RepositoryType = {
    html_url: Nullable<string>
    description: Nullable<string>
    name: Nullable<string>
}

const initialState: ReposStateType = {
    userRepositories: [],
    status: StatusType.idle,
    error: null
}


export const reposReducer = (state = initialState, action: ReposActionsType): ReposStateType => {
    switch (action.type) {
        case REPOS_ACTIONS_TYPE.SET_LIST_OF_REPOSITORIES: {
            return {
                ...state,
                userRepositories: action.payload.map(repo => ({
                    html_url: repo.html_url,
                    description: repo.description,
                    name: repo.name
                }))
            }
        }
        case REPOS_ACTIONS_TYPE.SET_STATUS: {
            return {...state, status: action.status,}
        }

        case REPOS_ACTIONS_TYPE.SET_ERROR: {
            return {...state, error: action.error}
        }

        default: {
            return state;
        }
    }
}


export type SetReposACType = ReturnType<typeof setReposAC>
export const setReposAC = (payload: RepositoryType[]) => {
    return {
        type: REPOS_ACTIONS_TYPE.SET_LIST_OF_REPOSITORIES,
        payload,
    } as const
}

export type SetReposStatusACType = ReturnType<typeof setReposStatusAC>
export const setReposStatusAC = (status: StatusType) => {
    return {
        type: REPOS_ACTIONS_TYPE.SET_STATUS,
        status,
    } as const
}

export type SetReposErrorACType = ReturnType<typeof setReposUserErrorAC>
export const setReposUserErrorAC = (error: string) => {
    return {
        type: REPOS_ACTIONS_TYPE.SET_ERROR,
        error,
    } as const
}

// THUNK
export const setReposTC = (userName: string, page: number) => (dispatch: Dispatch) => {
    dispatch(setReposStatusAC(StatusType.loading))
    gitHubAPI.getListOfUserReposPerPage(userName, PER_PAGE_COUNT, page)
        .then((res) => {
            const userRepositories = res.data
            dispatch(setReposAC(userRepositories))
            dispatch(setReposStatusAC(StatusType.succeeded))
        })
        .catch(e => {
            dispatch(setReposStatusAC(StatusType.failed))
        })
}