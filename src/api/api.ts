import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.github.com/',
})

export const githubApi = {
    getListOfUserRepos(userName: string) {
        return instance.get(`/users/${userName}/repos`)
    },
    getUser(userName: string) {
        return instance.get(`/users/${userName}`)
    }
}