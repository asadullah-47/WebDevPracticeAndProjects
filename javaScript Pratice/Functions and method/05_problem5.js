// Create a function performOperation that takes two numbers and a callback function.
// The callback function should define what operation (add, subtract, multiply) to perform on the two numbers.
// Call performOperation with different callback functions for addition, subtraction, and multiplication.

// function performOperation(num1, num2){

//     console.log(`Sum :${num1+num2}`);
//     console.log(`Product :${num1*num2}`);
//     console.log(`Deifference :${num1-num2}`);
//     console.log(`Divide :${num1/num2}`);

// }

// function callback(a,b){
//     performOperation(4,5);
// }
// console.log(callback());

// Qusetion

// 1.Given an array of numbers [1, 2, 3, 4, 5], use the map() method to:
// Create a new array where each number is doubled.
// Create another array where each number is squared.

// 2. let number= [1, 2, 3, 4, 5];
// let performOperation = number.map((val)=> {
//     let double = val*2;
//     let square = val*val;
//     console.log(`Double : ${double} and Square : ${square}`);

// });

// 3. Create an array of numbers [10, 23, 45, 67, 80, 91].
// Use the filter() method to create a new array containing only even numbers.
// Use filter() to find numbers greater than 50.

// let number = [10, 23, 45, 67, 80, 91];
// let evenNumber = number.filter((val) => {
//     return (val % 2 === 0);
// });
// let maxNumber = number.filter((val) => {
//     return val >50;
// });

// console.log(`Even Number are: ${evenNumber} and Greater then 50: ${maxNumber}`);

// 4. Given an array [10, 20, 30, 40]:
// Use the reduce() method to calculate the sum of all numbers in the array.
// Use the reduce() method to find the product of all numbers in the array.

// let number = [10, 20, 30, 40];
// let sum = number.reduce((res, cur)=>{
//     return res+cur;
// });
// let product = number.reduce((res, cur)=>{
//     return res*cur;
// });
// console.log(`Sum :${sum} and product : ${product}`);

// 5.Create an array of student scores [45, 78, 62, 89, 55, 37].
// First, use filter() to find all scores greater than or equal to 50 (passing marks).
// Then, use map() to add 5 bonus points to all the passing scores.

// let studentScore = [45, 78, 62, 89, 55, 37];

// let passStudent =studentScore.filter((val)=>{
//     return val >50;
// });
// console.log(`Pass student are: ${passStudent}`);

// let bonusPoint = passStudent.map((val)=>{
//     return val +5;
// });
// console.log(`Bonus point for all pass student:${bonusPoint}`);

// 6. Write a function processArray that takes an array and a callback function.
// The callback function should define how to process each element in the array.
// Use processArray to:
// Add 10 to each number.
// Convert each string to uppercase (if the array contains strings).?

// 7.Write a function totalPrice that takes an array of product prices and uses reduce() to calculate the total cost.
// Pass a custom callback to handle the summation.

// let productPrice = [90,456,234,223,56,76,5];
// let totalPrice = productPrice.reduce((res, cur)=>{
//     return res + cur;
// });
// console.log(totalPrice);

// 8.Create an array of ages [15, 22, 34, 16, 45, 12, 19].
// Use filter() to keep only ages greater than or equal to 18.
// Use map() to convert the remaining ages to strings in the format "Age: X".?
// Use reduce() to count how many ages are left after filtering.?

// let age = [15, 22, 34, 16, 45, 12, 19];
// let adult = age.filter((val) =>{
//     return val >18;
// });
// console.log(`Number of age that 18+: ${adult}`);

// let  notAdult = age.map((age) =>{

// })
// console.log(notAdult);

// Sample Product Data
const products = [
  { id: 1, name: "Laptop", price: 1000, stock: 5 },
  { id: 2, name: "Smartphone", price: 600, stock: 0 },
  { id: 3, name: "Tablet", price: 400, stock: 10 },
  { id: 4, name: "Headphones", price: 100, stock: 2 },
  { id: 5, name: "Keyboard", price: 50, stock: 0 },
];

// Step 1: Filter products in stock
const availableProducts = products.filter((product) => product.stock > 0);

// Step 2: Apply a 10% discount to the price
const discountedProducts = availableProducts.map((product) => ({
  ...product,
  price: product.price * 0.9, // Apply a 10% discount
}));

// Step 3: Calculate the total revenue (if all products are sold)
const totalRevenue = discountedProducts.reduce(
  (total, product) => total + product.price * product.stock,
  0
);

// Log Results
console.log("Available Products:", availableProducts);
console.log("Discounted Products:", discountedProducts);
console.log("Total Revenue (if all sold): $", totalRevenue);
