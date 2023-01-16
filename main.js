import {greet,calculate,calculateSwitch} from './utils.js'


//ex_1
const square = (x) => {
    return x**x;
};
console.log(square(2));

//ex_2
const isPositive = (x) => {
    if(x >= 0){
        return true;
    } else{
        return false;
    }
}
console.log(isPositive(-2));

//ex_3
const formatName1 = (fristName, lastName, separator = " ") =>  
fristName + separator + lastName;
console.log (formatName1('niv','ram'));

//ex4
console.log(greet('niv', true));

//ex5
console.log(calculate(5,6,'add'));
console.log(calculateSwitch(3,5,'multiply'));

//ex6 - not good
const bigArray = () =>{
    const team = ["Chennai", "Mumbai", "Bangalore"];
    const captain = ["Dhoni", "Rohit", "Kohli"];

    const array = team.concat(captain);
};
console.log (bigArray());


//ex9
const user = ['John','Doe',32]
const [firstName, lastName, age] = user

console.log(firstName);
console.log(lastName);
console.log(age);

//ex11
const actors = [
    { actorName: "Tom Hanks", birthdate: "July 9, 1956" },
    { actorName: "Meryl Streep", birthdate: "June 22, 1949" },
    { actorName: "Leonardo DiCaprio", birthdate: "November 11, 1974" },
   ];

const [actorName,birthdate] = actors
let firstActor = actors[0];
let thirdActor = actors[2].birthdate;
console.log (firstActor);
console.log(thirdActor);

//ex12 
const sortDescending = (array) => {
	return array.sort((x, y) => x - y);
};

console.log(sortDescending([3, 0, 49, 7, 26]));



//ex13
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
let person =new Person('niv', 27)
console.log(person.sayHello());