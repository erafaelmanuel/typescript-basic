function printAny(str: string|number|boolean) : any {
    console.log(str);
}

function printOptional(optional: string = "default") : any {
    console.log(optional);
}

function greeting(greet: string = "hello world") : string {
    return greet;
}

printAny("hello world");

printAny(5);

printAny(false);

printAny(greeting());

printOptional();

printOptional("other value");