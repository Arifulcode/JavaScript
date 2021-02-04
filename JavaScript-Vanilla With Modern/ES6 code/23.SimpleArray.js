// Array declare 2 types
// 1. simple array 2. Array Constructor


var simpleArray = ["a","b","c","d","e"]; 
var ConstructorArray = new Array("aa", "bb", "cc", "dd", "ee");

console.log(simpleArray);
console.log(simpleArray[3]);
console.log(ConstructorArray);
console.log(ConstructorArray[4]);

for (let item of simpleArray) {
   console.log(simpleArray[0]);
   console.log(simpleArray);
}//how many item execute at a time full/simgle array

for (let item of simpleArray) {
   console.log(item);
}
for (let item of ConstructorArray) {
   console.log(item);
   // console.log(item[2]);// can not work properly show undefined
}