/**
 *  Write a program to check if a person is eligible to vote. The conditions are:
The person's age must be 18 or above.
The person must be a citizen of the country.**/
let age = prompt("Enter your age ");
let country = prompt("Enter You Country");

if(age > 18 && country === "Pakistan" ){
    console.log("Yout are eligible to Vote");
}else{
    console.log("You can not cast Vote")
}