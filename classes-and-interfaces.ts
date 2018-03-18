class Person {
    public name: string
    public age: number
    private secret;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.secret = "password123";
    }

    public getSecret() : string {
        return this.secret;
    }
}

var person = new Person("Romeo", 16)
console.log(person)
