export class Person {

    private name: string
    private age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    public getName(): string {
        return this.name
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setAge(age: number): void {
        this.age = age;
    }
    
    public getAge(): number {
        return this.age
    }
}