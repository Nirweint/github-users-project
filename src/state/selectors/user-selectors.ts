import {AppRootStateType} from "../store";
import {UserProfileType} from "../reducers/userReducer";
import {StatusType} from "../types";

export const selectUserProfileInfo = (state: AppRootStateType): UserProfileType => state.user.userProfile
export const selectUserPublicReposCount = (state: AppRootStateType): number => state.user.userProfile.public_repos
export const selectUserStatus = (state: AppRootStateType): StatusType => state.user.status

