"use strict";
var Programmer = /** @class */ (function () {
    function Programmer() {
    }
    Programmer.prototype.doStuff = function () {
        return "foo";
    };
    Programmer.prototype.break = function () {
        console.log("bar");
    };
    return Programmer;
}());
var eagers = [];
eagers.push(new Programmer());
eagers.push({
    doStuff: function () {
        return "foo";
    },
    break: function () {
        console.log("bar");
    }
});
