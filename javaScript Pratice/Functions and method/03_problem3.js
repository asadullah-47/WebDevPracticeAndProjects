// Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.



let marks = [91,98,97,100,80, 67];
let toppers = marks.filter((val) =>{
return val > 90;

});
console.log(`Grade A:${toppers}`);


