// Create a game where you start with any random game number. Ask the user to keep
// guessing the game number until the user enters correct value.
let gameNumber =7;
let userNumber = prompt("Guess the correct Number");
while(userNumber != gameNumber){
userNumber= prompt("Please try again and guess correct");
}
console.log("O Wow you Gues correct Number");


