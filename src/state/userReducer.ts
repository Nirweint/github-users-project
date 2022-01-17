import {Dispatch} from "redux";
import {githubApi} from "../api/api";

const SET_USER = 'SET_USER'

type UserActionsType = SetUserACType

const initialState = {

}


export const userReducer = (state = initialState, action: UserActionsType) => {
    switch (action.type) {

        default: {
            return state;
        }
    }
}



export type SetUserACType = ReturnType<typeof setUserAC>
export const setUserAC = () => {
    return {
        type: SET_USER
    } as const
}

// THUNK

export const setUserTC = (userName: string) => (dispatch: Dispatch) => {
    githubApi.getUser(userName)
        .then((res) => {
            debugger
        })
}