import * as request from "request"
import { User } from "../domain/user";
import { Repo } from "../domain/repo";

export class GithubService {

    private readonly options = {
        headers: {
            "User-Agent": "request"
        } ,
        json: true
    }

    public getUserInfo(username: string, callback: (user: User) => void): void {
        
        request.get("https://api.github.com/users/" + username, this.options, 
                    (error: any, response: any, body: any) => {
                    
                        var login = body.login as string
                        var name = body.name as string
                        var repoCount = body.public_repos as number
                        var followerCount = body.followers as number

                        var user = new User(login, name, repoCount, followerCount, [])
                        callback(user)
                    })  
    }

    public getRepos(username: string, callback: (repos: Repo[]) => void): void {
        request.get("https://api.github.com/users/" + username + "/repos", this.options, 
                    (error: any, response: any, body: any) => {
                        var repos = body.map((repo: any) => {
                            var name = repo.name as string
                            var desc = repo.description as string
                            var url = repo.html_url as string
                            var size = repo.size as number
                            var fc = repo.forks_count as number

                            return new Repo(name, desc, url, size, fc)
                        })
                        callback(repos)
                    })
    }
}