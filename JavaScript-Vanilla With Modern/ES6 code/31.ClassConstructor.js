
/*
--- constructor is self method/function in class. 
---when a class obj create, constructor method is auto call 
--- constructor method/method is work another or normal---- method/function 
difference normal and constructor method:
--- normal method can return but constructor method can not return. 
--- 1 class create 1 constructor method. 1 class can not create multiple constructor. 
*/ 

class MyClass{

   constructor() {
      console.log('I am from constructor method');
  }


}

new MyClass();//output is same 
var obj = new MyClass;//output is same
var obj = new MyClass();//Output is same
// console.log(obj); //output is : MyClass{}


