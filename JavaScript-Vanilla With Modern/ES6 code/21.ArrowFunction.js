// Arrow Function:
/*
!--> To write smaller function syntax. 
!--> Arrow function make your code more readable and structured. 
!--> Arrow function are anonymous function.
!--> can declared without the function keyword. 
''''''''''''''''''''''''''''''''''''''''''''''''''
!--> Arrow function can not be used as the constructors.  


*/
//normal arrow function
var NormalArrow = () => {
   console.log("Normal Arrow function Run");
}
NormalArrow();


// with parameter pass run arrow function
var MyArrowFun = (x) => {
   console.log(x);
}
MyArrowFun("this is arrow function");

//with rest parameter
var MyArrowFunRest = (...x) => {
   console.log(x);
}
MyArrowFunRest(1, 2, 3, 4, 5, 6, 7, 8, 9);
//with return function
var ArrowReturnFunction = () => {
   return "Arrow Function Return output";
}
console.log(ArrowReturnFunction());
