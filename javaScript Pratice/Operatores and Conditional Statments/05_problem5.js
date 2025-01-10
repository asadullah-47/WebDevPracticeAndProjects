/**
 Write a program that takes a number as input and checks:
If the number is positive, print "The number is positive."
If the number is negative, print "The number is negative."
If the number is zero, print "The number is zero."
**/


let number = prompt("Enter a number");
if(number > 0){
    console.log(number, "is positive")
} else if(number < 0){
    console.log(number, " is Negaive ")
}else{
    console.log(number, " is Zero")
}