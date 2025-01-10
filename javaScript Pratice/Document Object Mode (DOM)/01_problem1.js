// Q:-Create a new element. Give it a text "Click me", background color of red and text color of white 
// Insert the button as the first element inside the body tag
// let button = document.createElement("button");
// button.innerText ="Clickme";
// button.style.backgroundColor = "red";
// button.style.color = "white";
// document.querySelector("body").prepend(button);


// //  Create a <p> tag in element in html and give it a class and some styling.
// // Now create  a new class in CSS and try append this clss to the <p> element
// // Did you notice, how you overwrite the class name when you add a new one? 
// // Sove this problem using classList
//  let problem2 = document.querySelector('p');
let body =document.querySelector("body");
let toggleButton =document.querySelector('.toggle');
let =currentMode = "light";

toggleButton.addEventListener("click" , ()=>{
    if(currentMode === "light"){
        currentMode ="dark";
     body.classList.add("dark");
     body.classList.remove("light");
    } else{
        currentMode ="light";
        body.classList.add("light");
        body.classList.remove("dark");
    } 
    console.log(currentMode);
})