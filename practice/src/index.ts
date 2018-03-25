import * as _ from "lodash"
import {GithubService} from "./service/githubService"
import { User } from "./domain/user";
import { Repo } from "./domain/repo";

(function init() {
    if (process.argv.length < 3) {
        console.log("Please pass the username as an argument")
    } else {
        var username = process.argv[2]
        var gv = new GithubService()
        gv.getUserInfo(username, (user: User) => {
            gv.getRepos(username, (repos: Repo[]) => {
                var sorted = _.sortBy(repos, (repo: Repo) => repo.forkCount * -1)
                var filtered = _.take(sorted, 6)
                user.repos = filtered
                console.log(user)
            })
        })
    }
})()


