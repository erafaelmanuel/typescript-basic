"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.secret = "touchmenot";
    }
    Person.prototype.getSecret = function () {
        return this.secret;
    };
    return Person;
}());
exports.Person = Person;
