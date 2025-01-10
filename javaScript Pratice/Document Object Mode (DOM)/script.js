// // Accessing Element


// // // get element by its ID.
// //  let buttn=  document.getElementById('button');
// // console.log(buttn);
// // // Finds an element by its ID.
// //  let heading=  document.getElementsByClassName('heading');
// // console.log(heading);

// // // get element by tag name
// // let p = document.getElementsByTagName('p');
// // console.log(p);
// // Accessing element by Using Query selector
// // let heading = document.querySelectorAll('.heading');
// // console.log(heading);
// // let para = document.querySelectorAll('p');


// // Updating element
// // let uheading = document.querySelector('.heading');
// // uheading.innerHTML = "My Name is Asad ullah I learning Js";

// // Get Attributes value
// // let div = document.querySelector("#box");
// // console.log(div.getAttribute("id"));

// // Set Attributes Value
// // let heading1 = document.querySelector('.h1');
// // console.log(heading1.setAttribute("class", "he1"));


// // node.style
// let box= document.querySelector('#box');
// let heading1 = document.querySelector('h1');
// heading1.style.color = "red";
// heading1.style.fontWeight ="900";
// heading1.innerText ="This heading is written by Js";
// box.style.backgroundColor = "pink";


// // Insert Elements:-Adding New elements
// let button =document.createElement("button");
// button.innerText ="Click Me!";
// // node.append(el):-Add the end of the node 
// box.append(button);//here add button at the end of box
// let note = document.createElement("p");
// note.innerText ="Prepend  ";
// // node.prepend:-Add at start of node 
// box.prepend(note);// here note are added start of box 

// // node.before( el ) //adds before the node (outside)
// let start = document.createElement('h1');
// start.innerText ="This is node.before ";
// box.before(start)//in this is case the element are added just before the box

// // node.after( el ) //adds after the node (outside)
// let after = document.createElement('h4');
// after.innerText = "This is node.after";
// box.after(after);


// Delete element
// after.remove();//This method remove the elements 

// // appendChild
//  let node = document.querySelector("li");
//  let para= document.querySelector("#paraa");
//  node.appendChild(paraa);//here the paragraph are append inside the list 

// // RemoveChild
// node.removeChild(node.lastChild);




// Events in javascript
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     btn1.style.backgroundColor = "pink";
//     btn1.innerText ="Submitted";


// }
// let box = document.querySelector("#box");
// box.onmouseover = () =>{
//     box.style.backgroundColor = "pink";
//     box.innerText ="This is onmouseover Event";
// }

// Event Objects:- It has special object that has details about the event

let button2 = document.querySelector('.button2');
// button2.onclick = (ev) =>{
//    console.log(ev);
//    console.log(ev.type);
//    console.log(EventTarget.target);
// }

// Event Listeners
 button2.addEventListener("click", (ev) =>{
    console.log("The button was clicked");
    button2.style.backgroundColor =" red";
       console.log(ev.type);
       console.log(EventTarget.target);



 });