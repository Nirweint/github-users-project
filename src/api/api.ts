import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.github.com/',
})

export const gitHubAPI = {
    getListOfUserReposPerPage(userName: string, perPage: number, page: number) {
        return instance.get(`/users/${userName}/repos?per_page=${perPage}&page=${page}`)
    },
    getUser(userName: string) {
        return instance.get(`/users/${userName}`)
    }
}