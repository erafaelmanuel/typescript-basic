"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var githubService_1 = require("./service/githubService");
(function init() {
    if (process.argv.length < 3) {
        console.log("Please pass the username as an argument");
    }
    else {
        var username = process.argv[2];
        var gv = new githubService_1.GithubService();
        gv.getUserInfo(username, function (user) {
            gv.getRepos(username, function (repos) {
                var sorted = _.sortBy(repos, function (repo) { return repo.forkCount * -1; });
                var filtered = _.take(sorted, 6);
                user.repos = filtered;
                console.log(user);
            });
        });
    }
})();
