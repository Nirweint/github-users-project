import {AppRootStateType} from "../store";

export const selectListOfRepositories = (state: AppRootStateType) => state.repos.userRepositories
export const selectReposStatus = (state: AppRootStateType) => state.repos.status