"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repo = /** @class */ (function () {
    function Repo(name, description, url, size, forkCount) {
        this.name = name;
        this.description = description;
        this.url = url;
        this.size = size;
        this.forkCount = forkCount;
    }
    return Repo;
}());
exports.Repo = Repo;
