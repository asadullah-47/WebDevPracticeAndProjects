/*  Operator in Js */
// Arithematic Operator

// let a = 12;
// let b = 34;
// let sum = a+b;
// console.log(sum);
// let difference = a-b; // difference
// let product = a * b; // product 
// let remainder =  a % b; // remainder
// let power = a ** b; // power
// console.log(difference);
// console.log(product);
// console.log(remainder);
// console.log(power);


// Assignment Operators
// let x = 10;
// x += 5; // equivalent to x = x + 5; x is now 15


//  Comparison Operators
// 5 == '5'; // true
// 5 === '5'; // false
// 5 != '5'; // false

//  Logical Operators
// true && false; // false
// true || false; // true
// true || false; // true
// !true; // false

//  Conditional (Ternary) Operator
// let result = condition ? expressionIfTrue : expressionIfFalse;
// let age = 18;
// let canVote = (age >= 18) ? 'Yes' : 'No'; //canVote is 'Yes'

/* Conditional Statements in JavaScript  */

// If Statments
// let score = 86;
// if(score =>90 ){
//     console.log("Excellent")
// }

// If else 
// let age = 19;

// if(age > 18 ){
//         console.log("You can Vote")
//     }else {
//        console.log("You can not vote")
//     }


// if...else if...else Statement
// let score = 75;
// if (score >= 80) {
//   console.log('Excellent!');
// } else if (score >= 70) {
//   console.log('Good job!');
// } else {
//   console.log('Keep trying!');
// }

// switch Statement
let day = 3;
let dayName;
switch(day){
case 1:
    dayName = "Monday";
    console.log(dayName);
    break;
case 2:
    dayName = "Tuesday";
 
    break;
case 3:
    dayName = "Wedneday"
     break;
     default:
        console.log(" Invalid Name")
     
}
console.log(dayName);

