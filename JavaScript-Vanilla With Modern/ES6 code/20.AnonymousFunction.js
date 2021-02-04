/*
!--: A function without a name
!--: It can be declared dynamically runtime
!--: An anonymous function can be assigned within a variable. 
*/
//simple function:
var MyFun = function () {
   return "hello";

}
console.log(MyFun());

//================================
//parameterized Anonymous function:

var MyFun2 = function (params) {
   return params;

}
console.log(MyFun2("hello2"));
//===============================

var MyFunx = function (x) {
   return x;

}
console.log(MyFunx("hellox"));
//===========================

var MyFunxyz = function (xyz) {
   return xyz;

}
console.log(MyFunxyz("helloxyz"));
//====================================

var MyFunparameterized = function (...xyz) {
   return xyz;

}

console.log(MyFunparameterized(1, 2, 3, "parameterized"));//same to normal function/parameterized fun/anonymous parameterized function

/*
as like as same to variable. 
re-assign variable = re-assign function
when re-assign function first function value can change by secound/doubblicate/re-assign function. 
*/

//re-assign
var pracReAssign = function () {
   return "first_time_assign";
}

var pracReAssign = function () {
   return "Reassign_again";
}
console.log(pracReAssign());
