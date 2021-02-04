let firstarray = ['one', 'two', 'three', 'four'];
let secoundarray = ['five', 'six', 'seven', 'eight'];
let thirdarray = [...firstarray, ...secoundarray, 'nine', 'ten', secoundarray];
/*when is use thirdarray spread operator using three(...) program is run fine
but not use properly spread operator can not spread array. problem is thirdarray is 
output looping array print with bracket. so it is not spread operator properly.

but when secound array use first array without comma problem is unexpected string
use with comma and proper spread three(...) problem is reference error:Cannot access 'secoundarray' before initialization.

finally, spread operator use array index and spread array [really awesome spread operator]
*/


console.log(firstarray);
console.log(secoundarray);
console.log(thirdarray);