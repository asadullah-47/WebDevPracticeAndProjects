// Functions in Js:- Block of code that perfom a specific task, can be invoked or called whenever needed
// function myFunction() {// Without parameter
//     console.log("Hello InnoTechCaves");
//     console.log("This is function");
// }
// myFunction();//Function invoked or called
// function myFunction(msg) {// With parameter --> input
//     console.log(msg);
// }
// myFunction("I love Js");//Arguments

// //Function---> calculate 2 number
// function addition(a, b){
//     // a and b are local variable -> scope
//   sum = a+b;
//   return sum;

// }
// let val = addition(3,5);
// console.log(val);

// Arrows Functions:- Compact way writing functions
// Sum functions
// function sum(a, b) {
//   return a + b;
// }
// let arrowSum = (a, b) => {
//   console.log(a + b);
// };
// arrowSum(3, 4);

// Multiplication function
// function mul(a ,b){
//     return a*b;
// }
// let arrowMul = (a, b) =>{
//     console.log(a*b);

// }
// arrowMul(5, 7)

// function greet(name){
//     return `Hello! ${name}`;
// }
// console.log( greet("Asad"));

// const person = {
//     name: "Asad",
//     greet: function() {
//         return "Hello, " + this.name; // 'this' refers to 'person'
//     }
// };
// console.log(person.greet()); // Output: Hello, Asad

// function showThis() {
//     console.log(this);
// }
// showThis(); // Output: Window (in browser)
// function double(num) {
//     return num * 2;
// }
// console.log(double(4)); // Output: 8

// Question:1Create a function called printSquare that takes a number and prints its square (e.g., 5 → 25).
// function printSquare(num){

//    return(num*num);

// }
// // let square = prompt("Enter the number");
//   console.log( printSquare(num=prompt("Enter any number")));

// Write a function greet that prints "Good morning!" five times when called.
// function greet(){
//     for(let i =0; i<5;i++){
//         console.log("Good Morning")
//     }
// }
// greet();

// Write a function called calculateCircleArea that calculates the area of a circle given its radius. Call the function twice with different radii.
// function calculateCirceArea(num) {
//   const pi = 3.14;
//   let area = pi*num*num;
//   return area;
// }
// // calculateCirceArea(5);
// console.log(calculateCirceArea(32));
// console.log(calculateCirceArea(2));

// Write a function called repeatMessage that takes a message and a number, and prints the message that many times.
// function repeatMessage(message, number){
//     for(let i =0; i<number; i++){
//         console.log(message);
//     }
// }
// console.log(repeatMessage("Hello My Name is ASad", 5));

// Write a function using function declaration to multiply two numbers and return the result.

// function multiplication(a, b){
//     return a*b;
// }
// console.log(multiplication(2, 4));

// Create a function using function expression to divide two numbers and return the result.
// const division = function(a, b){
//     return a/b;
// }
// console.log(division(30,10));

// Write an arrow function that calculates the cube of a number.
// const cube= (a) => {
//       return a*a*a;
// }
// console.log(cube(8));

// Write a function introduce that takes a name and age as parameters and prints:
// "Hi, my name is [name] and I am [age] years old."

// function randomData(name, age){
//   return `Hi, My Name is ${name} and I am ${age} years old`;
// }

// console.log(randomData("Asad ullah", 19));
// console.log(randomData("Naveed Khan", 19));

// Write a function isEven that takes a number as a parameter and returns true if the number is even, otherwise false.
// let isEven = (num) => {
//   if(num % 2 ===0 ){
//     return true;
//   }else{
//     return false;
//   }
// }

// console.log(isEven(7));


// Write a function add that takes two numbers as parameters and returns their sum. Test the function by calling it with different arguments.

// function add(a ,b){
//   return a+b;
// }
// console.log(add(12,34));
// console.log(add(2,34));



// Write a pure function called double that takes a number and returns twice its value. Test it with different inputs.
// function double(a){
//   return a*2;
// }
// console.log(double(3));
// console.log(double(21));
// console.log(double(10));

// Write an impure function called incrementCounter that modifies a global variable counter by adding 1 to it.
// let count = 0;
// function incrementCounter(){
//   count++;
// }
// incrementCounter();
// console.log(count);

// Write a function localScopeExample that declares a variable inside it and tries to access that variable outside the function. What happens? Why?
// function localScope(){
//   let name = "Assd";
//   console.log(name);
  
// }
// console.log(name);// In this case my code are run propely and I think that is wrong because the varible are declared inside the function. I not understand this


// Write two functions:
// One that declares a local variable inside it.
// Another that accesses a global variable.
// function localName(){
//   let name = "Asad";
//   console.log(name);
  
// }

// let gName = "Assad ullah";
// function globalName(){
// return gName;
  
// }
// console.log(localName());
// console.log(globalName());


// Write a function calculateTax that takes two parameters: amount and taxRate. Assign a default value of 10% to taxRate if no value is passed. Return the total tax.
// function calculateTax(amount){
//   let taxRate = 0.10;
//   let calculateTax = amount*taxRate;
//   return calculateTax;
// }
// console.log(calculateTax(500));


// Create a function welcomeMessage that takes two parameters: name and message. Assign a default value "Welcome to JavaScript!" to message. Call the function with and without the message parameter.
// function wellCome(name ="Asad" ,message ="Welcome to Javascript!"){

// return message;
// }
// console.log(wellCome());

// For each loop
// let array= [1,2,4,5,"Asad"];
// array.forEach((val) => {
// console.log(val);
// });



// Some More Array Methods
// Map:- Creates a new array with the results of some operation. The value its callback returns are used to form new array
// let number = [1,5,7,4];
// let nNumber=number.map((val) => {
// return val**2;

// });
// console.log(nNumber)


// Filter:- Creates a new array of elements that give true for a condition/filter.
// let find even number using filter method
// let number = [1, 54, 6,5 ,30, 3,39,34,32,];
// console.log("Even Numbr ");

// let evenNumber = number.filter((val) =>{
//   return val % 2 ===0;
// });
// console.log(evenNumber);
// console.log("odd Numbr ");
// let oddNumber = number.filter((val) =>{
//   return val % 2 !==0;
// });
// console.log(oddNumber);

// Reduce:-Performs some operations & reduces the array to a single value. It returns that single value.
let number = [1, 54, 6,5 ,30, 3,39,34,32,];
let maxNum =number.reduce((pre ,cur) => {
  return pre > cur ? pre : cur;
});
console.log(maxNum);
