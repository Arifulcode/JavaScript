//"use strict";//when i use strict mode program error name is not define.
MyName();

function MyName() {
   name = 'Ariful Islam';
}
console.log(name); //output is :
console.log(MyName); //output is:[Function: MyName]
console.log(MyName()); //output is :undefined