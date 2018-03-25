"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(login, name, repoCount, followerCount, repos) {
        this.login = login;
        this.name = name;
        this.repoCount = repoCount;
        this.followerCount = followerCount;
        this.repos = repos;
    }
    return User;
}());
exports.User = User;
