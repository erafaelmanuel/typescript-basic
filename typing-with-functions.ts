function printAny(str: string|number|boolean) {
    console.log(str);
}

function printOptional(optional: string = "default") {
    console.log(optional);
}

printAny("hello world");

printAny(5);

printAny(false);

printOptional();

printOptional("other value");