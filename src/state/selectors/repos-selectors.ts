import {AppRootStateType} from "../store";
import {RepositoryType} from "../reducers/reposReducer";
import {StatusType} from "../types";

export const selectListOfRepositories = (state: AppRootStateType): RepositoryType[] => state.repos.userRepositories
export const selectReposStatus = (state: AppRootStateType): StatusType => state.repos.status