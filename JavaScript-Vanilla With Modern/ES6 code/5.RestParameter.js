/*
---> Using rest parameter,a function can be called with any number of argument.
---> Rest parameter is prefix with three(...)
*/

function Calculation(parameters) {

}
Calculation()
// This function carry normal 1 parameter and 1 value  
//============================================


function Calculation2(...parameters) {
   
   let sum = 0;
   // let i = 0;
      for (let i of parameters) {
         sum = sum + i;
      }
   console.log(sum);
}
Calculation2(1, 2, 3, 4, 5, 6, 7, 8, 9)
//when i call the Calculation2 funcion using multiple value
//=================================================================


function Calculation3(a,b,...parameters) {
   
   let sum = 0;
   // let i = 0;
      for (let i of parameters) {
         sum = sum + i;
      }
   console.log(sum);
}
Calculation3(10, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9)
// This function rest parameter use multiple parameter at a time
// and 10 and 20 value hold a and b parameter then next value1-9 hold restparameter
//when use multiple parameter [function Calculation4(...parameters,a,b)] rest parameter use always last otherwise error. 

