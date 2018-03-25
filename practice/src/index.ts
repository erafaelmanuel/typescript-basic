import {GithubService} from "./service/github.service"
import { User } from "./domain/user";
import { Repo } from "./domain/repo";

var gv = new GithubService()

gv.getUserInfo("erafaelmanuel", (user: User) => {
    console.log(user)
})

gv.getRepos("erafaelmanuel", (repos: Repo[]) => {
    console.log(repos)
})