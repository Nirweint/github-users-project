import {AppRootStateType} from "./store";

export const selectUserProfileInfo = (state: AppRootStateType) => state.user.userProfile
export const selectUserPublicReposCount = (state: AppRootStateType) => state.user.userProfile.public_repos
export const selectListOfUserRepositories = (state: AppRootStateType) => state.user.userRepositories
export const selectUserIsLoading = (state: AppRootStateType) => state.user.isLoading