class Animal {

    private sound: string

    constructor(sound: string) {
        this.sound = sound
    }

    cry() : void {
        console.log(this.sound)
    }
}

class Dog extends Animal {

    constructor() {
        super("Bruff!! bruff!!")
    }
}

class Bird extends Animal {

    constructor() {
        super("Cripp!! cripp!!")
    }
}

function listen<T extends Animal>(animal: T): void {
    animal.cry()
}

listen(
    //This is an anonymous inner class!!
    { 
        cry() : void {
            console.log("Meow!! meow!!")
        }
    } as Animal)