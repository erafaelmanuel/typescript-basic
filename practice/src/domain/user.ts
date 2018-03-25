import { Repo } from "./repo";

export class User {
    login: string
    name: string
    repoCount: number
    followerCount: number
    repos: Repo[]

    constructor(login: string, name: string, repoCount: number, followerCount: number, repos: Repo[]) {
        this.login = login
        this.name = name
        this.repoCount = repoCount
        this.followerCount = followerCount
        this.repos = repos
    }
}