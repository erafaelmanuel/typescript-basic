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
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sound = sound;
    }
    Animal.prototype.cry = function () {
        console.log(this.sound);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.call(this, "Bruff!! bruff!!") || this;
    }
    return Dog;
}(Animal));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super.call(this, "Cripp!! cripp!!") || this;
    }
    return Bird;
}(Animal));
function listen(animal) {
    animal.cry();
}
listen(
//This is an anonymous inner class!!
{
    cry: function () {
        console.log("Meow!! meow!!");
    }
});
