function printAny(str) {
    console.log(str);
}
function printOptional(optional) {
    if (optional === void 0) { optional = "default"; }
    console.log(optional);
}
printAny("hello world");
printAny(5);
printAny(false);
printOptional();
printOptional("other value");
