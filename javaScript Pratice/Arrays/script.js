// Arrays:- collection of items with related data
// let marks= [23, 45,34,34,];
// console.log(marks);
// console.log(marks.length);

// // print using for loop
// for(let i = 0; i<marks.length; i++){
// console.log(marks[i]);

// }

// Using for off loop
// let cities = ["Chitral", "Peshwar", "Lahore", "Karach", "Multans"];
// for(let city of cities){
//     console.log(city.toUpperCase());
    
// }

// Arrays Method
// Push():- This method add array data in end of the array 
// e.g---->

let foodItems = ["apple", "Peach", "Tomato", "Stwaberry"];
console.log("Push method");

// Now I want to push the more items in the end like 
foodItems.push("Burger", "Banana");
console.log(foodItems);


// Pop():- delete from end and return


console.log("Pop method");

// Now I want to the more items in the end like 
foodItems.pop();
console.log(foodItems);


// toString():- Convert array to String
console.log("toStrng Method");

console.log(foodItems.toString());

// concatMethod():-Join Multiple array and return result
console.log("Concate Method");

let famCrickter= ["Babar Azam", "Shahid Afride", "Shoaib Akhtar"];
let famFootabler = ["Cristino Rondaldo", "Lionel Messi", "Neymar"]
// Now I want to concate this means add this famous crickter and fomous footballer
let famPlayers = famCrickter.concat(famFootabler);
console.log(famPlayers);
// Unshift():- As like push but this add in the start
famCrickter.unshift("Fakhar Zaman");
console.log("Unshift method");
console.log(famCrickter);


// Shift:- Delete from start and return
console.log("shift method");
famFootabler.shift();
console.log(famFootabler)


// Slice():- return a piece of array and not change original array
console.log("Slice method");
let number= [23,45,23,3,4,5];
console.log(number);
//  it used to copy the array the below is slice method
console.log(number.slice(2,5));


// Splice():- It is changed the original(add, remove and replace)
console.log("Splice method");
// Add element

 number.splice(3, 0, 2); //here after 23 the 2 element are added
console.log(number);

// Remove Element
number.splice(2,1);//here the 23 are remove the index 3
console.log(number);


// Replace element
number.splice(1, 1, 1);//I want to replce the 45 into 1
console.log(number);






