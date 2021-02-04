let poorCountry = ['Bangladesh','Nepal','Brazil','Uganda'];
let richCountry = ['America','Russia','Italy'];
let addArray = ['one', 'two', 'three'];
richCountry.push(poorCountry);
// poorCountry.push(richCountry);
addArray.push(richCountry);
console.log(poorCountry);
console.log(richCountry);//array not spread problem is looping array show output
console.log(addArray);//is the same problem multiple  looping  array show
