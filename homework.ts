// 1. Given the data below, define a type alias for representing users.

type Users = {
    name: string,
    age:number,
    company?:string
}

let users = [  
    {
        name:'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Sarah Stodder',
        age:99
    }
];

// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.

type Day = {
    day: "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday"
}

// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
    constructor(
        public firstName:string, 
        public lastName:string) {
            this.firstName = firstName,
            this.lastName = lastName
        }
    
    public get getName(): string {
        return this.firstName + " " + this.lastName
    }
}



// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 
class Employee extends Person{
    constructor(firstName:string, lastName:string,salary:numer){
        super(firstName,lastName)
        this.salary = salary
    }
        
}

// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.

interface Employee {
    name: string,
    salary: number
}

interface Address {
        street: string,
        city: string,
        zipcode:number
    }


    
let employee = {
    name:'Christian Askew',
    salary:1_000_000,
    address:{
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    }
};

