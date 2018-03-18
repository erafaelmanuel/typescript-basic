interface Eager {

    doStuff(): string;
    break(): void;
}

class Programmer implements Eager {
    doStuff() {
        return "foo"
    }

    break() {
        console.log("bar")
    }
}

var eagers: Eager[] = [];

eagers.push(new Programmer())
eagers.push({
    doStuff() {
        return "foo"
    },
    break() {
        console.log("bar")
    }
})