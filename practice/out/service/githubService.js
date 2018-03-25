"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var user_1 = require("../domain/user");
var repo_1 = require("../domain/repo");
var GithubService = /** @class */ (function () {
    function GithubService() {
        this.options = {
            headers: {
                "User-Agent": "request"
            },
            json: true
        };
    }
    GithubService.prototype.getUserInfo = function (username, callback) {
        request.get("https://api.github.com/users/" + username, this.options, function (error, response, body) {
            var login = body.login;
            var name = body.name;
            var repoCount = body.public_repos;
            var followerCount = body.followers;
            var user = new user_1.User(login, name, repoCount, followerCount, []);
            callback(user);
        });
    };
    GithubService.prototype.getRepos = function (username, callback) {
        request.get("https://api.github.com/users/" + username + "/repos", this.options, function (error, response, body) {
            var repos = body.map(function (repo) {
                var name = repo.name;
                var desc = repo.description;
                var url = repo.html_url;
                var size = repo.size;
                var fc = repo.forks_count;
                return new repo_1.Repo(name, desc, url, size, fc);
            });
            callback(repos);
        });
    };
    return GithubService;
}());
exports.GithubService = GithubService;
