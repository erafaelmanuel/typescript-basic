"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var github_service_1 = require("./service/github.service");
var gv = new github_service_1.GithubService();
gv.getUserInfo("erafaelmanuel", function (user) {
    console.log(user);
});
gv.getRepos("erafaelmanuel", function (repos) {
    console.log(repos);
});
