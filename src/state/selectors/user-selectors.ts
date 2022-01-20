import {AppRootStateType} from "../store";

export const selectUserProfileInfo = (state: AppRootStateType) => state.user.userProfile
export const selectUserPublicReposCount = (state: AppRootStateType) => state.user.userProfile.public_repos
export const selectUserStatus = (state: AppRootStateType) => state.user.status

