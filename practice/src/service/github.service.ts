import * as request from "request"

export class GithubService {

    public getUserInfo(username: string) {
        var options = {
            headers: {
                "User-Agent": "request"
            }
        }
        request.get("https://api.github.com/users/" + username, options, 
                (response: any, body: any) => {
                    console.log(response)
                    console.log(body)
                })   
    }

    public getRepos() {

    }
}