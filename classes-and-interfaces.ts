class Person {
    public name!: string
    public age!: number
    private secret
}

var person = new Person()
person.name = "Romoe"
person.age = 16
console.log(person)
