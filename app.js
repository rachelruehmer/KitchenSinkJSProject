var myName = 'Rachel';
// My name as a value.

const states = 50; 
// The 50 states.

var number = 5 + 4;
// Adding together.

function sayHello(greeting) {
  alert (greeting);
}
sayHello ("Hello world!");

function firstCheckAge(name, age){
    if (age < 21) {
        console.log("Sorry, " + name + ", you aren't old enough to view this page!")
    } else {
        console.log("You may enter, " + name)
    }
    
}
firstCheckAge("Charles", 21)
firstCheckAge("Abby", 27)
firstCheckAge("James", 18)
firstCheckAge("John", 17)


let vegetables = [
    {veggie: "asparagus"},
    {veggie: "brussel sprouts"},
    {veggie: "broccoli"},
    {veggie: "peppers"},

];

for (let i=0; i <vegetables.length; i++)
    console.log(vegetables[i].veggie);
 
let array = [
    {name: "Anna", Age: 20},
    {name: "Kim", Age: 53},
    {name: "Kenna", Age: 5},
    {name: "Jeff", Age: 52},
    {name: "Kenzie", Age: 4},
];

function checkAge(name, age) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].Age < 21) {
                console.log("Sorry," + array[i].name + " ,you aren't old enough to view this page!")
            } else {
                console.log("You may enter, " + array[i].name)
            } 
        }
}

checkAge(array)
let test= 'Hello World'

function getlength(str) {
    if (str. length % 2 == 0) {
        console.log('the world is nice and even')
    }
    else if (str.length % 2 !=0) {
        console.log('The world is and odd place!')
    }
    }


getlength('Hello World')
getlength('Goodbye World')

console.log(myName)
console.log(states)
console.log(number)