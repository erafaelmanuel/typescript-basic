import{Person} from "./classes-and-interfaces";

class Programmer extends Person {

    //override
    constructor(name: string, age: number) {
        super(name, age)
    }
    
    public makeStuff() : void {
        var password = super.getSecret()
        console.log("Your password [" + password + "]")
    }
}
var person = new Programmer("Rafael", 21)

person.makeStuff()

console.log(person)