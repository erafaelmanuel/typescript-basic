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
var GithubService = /** @class */ (function () {
    function GithubService() {
    }
    GithubService.prototype.getUserInfo = function (username) {
        var options = {
            headers: {
                "User-Agent": "request"
            }
        };
        request.get("https://api.github.com/users/" + username, options, function (response, body) {
            console.log(response);
            console.log(body);
        });
    };
    GithubService.prototype.getRepos = function () {
    };
    return GithubService;
}());
exports.GithubService = GithubService;
