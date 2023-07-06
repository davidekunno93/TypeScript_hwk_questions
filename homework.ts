// 1. Given the data below, define a type alias for representing users.

type User = {
    name: string,
    age: number,
    company?: string
}[]

let users: User = [  
    {
        name:'Brandt C',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Brendan Carlson',
        age:99
    }
];

// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
type Day = ("Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday")
let today: Day = "Wednesday"

// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
    constructor(
        public firstName:string, 
        public lastName:string) {}
}

const me = new Person('David', 'Ekunno')

const getter = (person: Person):string => {
    const fullName = person.firstName+" "+person.lastName
    return fullName
}

console.log(getter(me))


// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 
class Employee extends Person {
    constructor(
        public firstName: string,
        public lastName:string,
        public salary: number
    ) {
        super(firstName, lastName)
    }
}

// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.

interface Addy {
    street: string,
    city: string,
    zipCode: number
}

interface Emp {
    name: string,
    salary: number,
    address: Addy
}

let employee: Emp = {
    name:'Brandt C',
    salary:10_000_000,
    address:{
        street:'Clutch Ave',
        city:'Seattle',
        zipCode: 98101
    }
};