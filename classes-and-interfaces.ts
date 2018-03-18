export class Person {
    public name: string
    public age: number
    private secret;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.secret = "touchmenot";
    }

    public getSecret() : string {
        return this.secret;
    }
}
