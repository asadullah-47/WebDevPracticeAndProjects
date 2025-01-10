// Create a paragraph with some initial text on the page.
// Write a JavaScript function to change the text content when the user clicks a button.
// Also, update the background color of the paragraph when the text is changed.
// const initialPara = document.getElementById("initialPara");
// const changebgBtn = document.getElementById("changebg");


// function changebackground(){
//     initialPara.innerText =" The text has been change";
//     initialPara.style.backgroundColor = "red";

// }

// changebgBtn.addEventListener("click",changebackground);
// Accessing the paragraph and the button elements by their ID
// const myParagraph = document.getElementById("myParagraph");
// const changeTextBtn = document.getElementById("changeTextBtn");

// // Function to change the text content and background color
// function changeTextAndBackground() {
//   // Changing the text content of the paragraph
//   myParagraph.innerText = "The text has been changed!";
  
//   // Changing the background color of the paragraph
//   myParagraph.style.backgroundColor = "lightgreen";
// }

// // Adding an event listener to the button
// changeTextBtn.addEventListener("click", changeTextAndBackground);


const counterButton =document.querySelector(".counter-button");
const counterIncrease = document.querySelector(".counterIncrease")

let counterValue = 0;
counterButton.addEventListener("click", ()=>{
    counterValue++;
    counterIncrease.textContent=counterValue;
console.log(counterValue);

});

    

