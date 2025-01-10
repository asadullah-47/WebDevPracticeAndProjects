// Write a program that reverses a string entered by the user using a for loop.


let name = prompt("Enter any Name");
let reverseName = "";

for(let i = name.length-1; i >0; i--){
    reverseName +=  name[i];
}
console.log(reverseName);
// let str = "Hello, World!";
// let reversedStr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
// }

// console.log(reversedStr); // Output: "!dlroW ,olleH"
