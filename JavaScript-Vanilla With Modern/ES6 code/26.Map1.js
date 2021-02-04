// Map is a collection / Group of data.
// when i keep map in data store is key value pair

var MakeMap = new Map();

MakeMap.set("ban", "Bangladesh");
MakeMap.set("ind", "India");
MakeMap.set("nep", "Nepal");
MakeMap.set("pak", "Pakistan");
MakeMap.set("bhu", "Bhutan");

console.log(MakeMap.values());
console.log(MakeMap.keys());

// return value in loop 
for (let MyValue of MakeMap.values()) {
   console.log(MyValue);
}
// return key in loop
for (let MyKeys of MakeMap.keys()) {
   console.log(MyKeys);
}


