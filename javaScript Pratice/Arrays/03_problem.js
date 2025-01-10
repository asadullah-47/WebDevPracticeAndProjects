// Qs. Create an array to store companies -> “Bloomberg”,“Microsoft”,“Uber”,“Google”,“IBM”,“Netflix”
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end



let companies = ["Bloomberg", "MiscroSoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);

// a
console.log("Remove first company:");

companies.shift();
console.log(companies);
// b
console.log("Removed Ober and add Ola");

companies.splice(1,1, "Ola");
console.log(companies);
// c
console.log("Added Amazon at the end");

companies.push("Amazon");
console.log(companies);


