let array: Array<String> = ['one', 'two'];

interface SquareConfig {
    color?: string,
    width?: number
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    const square = {color: 'white', area: 10};

    if (config.color) {
        square.color = config.color;
    }
    if (config.width) {
        square.area = config.width * config.width;
    }
    return square;
}

let mySquare = createSquare({color: 'red', width: 100});


interface Dog {
    name: String,
    age: number,
    breed: String,
    owned: boolean
}

interface Person {
    name: String,
    age: number,
    favBand: String,
    havePets: boolean,
    status: boolean,
}

const person1: Person = {
    name: 'Nick',
    age: 26,
    favBand: 'Paramore',
    havePets: true,
    status: true
}

const dog1: Dog = {
    name: 'Roco',
    age: 0.9,
    breed: 'Caniche',
    owned: true
}

function OwnedDogs(dog: Dog) {
    if (dog.owned) {
        return `The dog ${dog.name} is already owned by a good family.
            vThe dog information is: Name is ${dog.name}, Age is ${dog.age}, Breed is ${dog.breed}, Owned status is ${dog.owned}`
    }
    return `The dog ${dog.name} is without a family.
        The dog information is: Name is ${dog.name}, Age is ${dog.age}, Breed is ${dog.breed}, Owned status is ${dog.owned}`
}

function OwnProcess(dog: Dog, person: Person) {
    if (!dog.owned && person.status) {
        OwnedDogs(dog);
        return `We found a match and the person ${person.name} can own this beautiful dog named ${dog.name}`
    }
    OwnedDogs(dog);
    return `The dog have already a family. We have others beautiful dogs to be adopted. ${person.name}, you are welcome to keep looking for your life partner.`
}

const ownedProcessOne = OwnProcess(dog1, person1);

console.log(ownedProcessOne);

