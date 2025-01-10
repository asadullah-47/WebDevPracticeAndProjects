/*Qs2. Write a code which can give grades to students according to their scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/


let score = prompt("Enter You Marks")
let grades;
if(score > 80 && score <= 100){
grades = "A";
}else if(score >= 70 && score < 80){
    grades = "B";

}else if(score >= 60 && score <70){
    grades = "C";
}else if(score > 50 && score < 60){
    grades = "D";
}else if(score >0 && score < 50){
    grades ="F"
}else{
    console.log("Invalid Marks")
}
console.log(grades);