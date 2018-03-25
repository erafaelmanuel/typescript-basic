"use strict";
function printAny(str) {
    console.log(str);
}
function printOptional(optional) {
    if (optional === void 0) { optional = "default"; }
    console.log(optional);
}
function greeting(greet) {
    if (greet === void 0) { greet = "hello world"; }
    return greet;
}
printAny("hello world");
printAny(5);
printAny(false);
printAny(greeting());
printOptional();
printOptional("other value");
