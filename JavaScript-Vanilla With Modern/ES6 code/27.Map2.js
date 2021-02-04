//
/*
delete (key)
get(key)
clear()
has(value)
*/


var MakeMap = new Map();

MakeMap.set("ban", "Bangladesh");
MakeMap.set("ind", "India");
MakeMap.set("nep", "Nepal");
MakeMap.set("pak", "Pakistan");
MakeMap.set("bhu", "Bhutan");

console.log(MakeMap.get("ind"));
MakeMap.delete("ban");
// MakeMap.clear();

// console.log(MakeMap.values());
// console.log(MakeMap.keys());
if (MakeMap.has("paki")) {
   console.log("Yes");
} else {
   console.log("NO");
}