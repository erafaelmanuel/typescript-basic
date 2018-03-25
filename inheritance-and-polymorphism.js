"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var classes_and_interfaces_1 = require("./classes-and-interfaces");
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    //override
    function Programmer(name, age) {
        return _super.call(this, name, age) || this;
    }
    Programmer.prototype.makeStuff = function () {
        var password = _super.prototype.getSecret.call(this);
        console.log("Your password [" + password + "]");
    };
    return Programmer;
}(classes_and_interfaces_1.Person));
var person = new Programmer("Rafael", 21);
person.makeStuff();
console.log(person);
