// Given an array ['apple', 'banana', 'cherry', 'date'], write down the steps to:
// Access the second and last elements.
// Replace the third element with 'grape'.
// Add a new element 'kiwi' at the end of the array.


let foodItems =  ['apple', 'banana', 'cherry', 'date'];
// a
console.log("Accessed the second anf last elements");

console.log(foodItems[1],foodItems[3]);
// b
console.log("Replaced the third element with grap");

foodItems.splice(2, 1, "grape");
console.log(foodItems);

// c
console.log("Added new element kiwi at the end ");
foodItems.push("Kiwi");
console.log(foodItems);


