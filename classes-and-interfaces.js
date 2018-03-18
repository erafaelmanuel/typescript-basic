var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.secret = "password123";
    }
    Person.prototype.getSecret = function () {
        return this.secret;
    };
    return Person;
}());
var person = new Person("Romeo", 16);
console.log(person);
