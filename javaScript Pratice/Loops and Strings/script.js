/**
 Loops in JavaScript:- Loop are fundmentals construct that are allow to to execute a block of code multiple time 
//1. For Loop
// for (initialization; condition; increment) {
//     // Code to execute
//   }
  console.log("Print Number Using for Loop from 1 to 10")
for(let i = 0; i < 10; i++){
    console.log(i);
}

//2. While Loop
// while (condition) {
//     // Code to execute
//   }
console.log("Print Number Using while Loop from 1 to 10");
let i=0;

  while(i<10){
    console.log(i);
    i++;
  }
  //3. do while loop:- Execute an once either the condition true or false
//   do {
//     // Code to execute
//   } while (condition);
console.log("Print Number Using do while Loop from 1 to 10");
let j=0;
do {
  console.log(j);
  j++;
} while (j < 10);

// 4.for...in Loop
// for (let key in object) {
//     // Code to execute
//   }
  
let person = {
name: "Asad",
age:22,
occuption: "Student",
};
for(let key in person){
    console.log(key + ":"+ person[key]);
}
//  Control Statements in Loops
// 1. Break Statment:- Terminates loop Entirely
console.log("Break Statment")
for (let i = 0; i < 10; i++) {
    if (i === 7) break;
    console.log(i);
  }
  
//   2. Continue Statments:- Skip the current iteration and processed to next one
console.log("Continue Statment")
for (let i = 0; i < 5; i++) {
    if (i === 3 ) continue;
    console.log(i);
  }
    **/



//   Strings in JavaScript:- String are sequence of character used to represent text.
// --> String are immutable
// -->means one created the content are not changed

// Using Single or Double Quotes:
let name = "Asad ullah";
let age = 'Twenty';
// Using Templates literal

let greeting = `Hello, ${name}!`;
console.log(greeting);


// Common String Methods
console.log(name.length);


// toUpperCase()
let name1=name.toUpperCase();
console.log(name1);
// toLowerCase()
let name2=name.toLowerCase();
console.log(name2);
  

  
