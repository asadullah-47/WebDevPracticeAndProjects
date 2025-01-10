// Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate product of all numbers in the array.
// Use the reduce method to calculate sum of all numbers in the array.

let number = prompt("Eneter a number");
let arr=[];
for(let i =1; i<=number; i++)
{
arr[i-1] = i;

}
console.log(arr);

let sum = arr.reduce((res, cur) => {
    return res+cur;
});
console.log("Sum:",sum);
let factorial = arr.reduce((res, cur) => {
    return res*cur;
});
console.log( "Factorial :"+ factorial);
