//Global Scope : In the Global scope,the variable can be accessed from any part of the JS code. 
//Local Scope  : In the local scope, the variable can be accessed within a function where it is de-clare.

      //Local Scope:
         function Local() {
            var name='local variable';
            console.log(name);//this variable scope is local
         }
         Local();

      //---------------------------------
         function Local2() {
            var name='local variable';
         
         }
//  console.log(name); // this code can not run because i will try global scope but variable is local
//===================================================================================================


   // Global Scope:
      //process one:
         var name = 'global variable process 01';
         function Global() {
         
            console.log(name);
         }
         Global();
      //----------------------------
      //process two:
         var name = 'global variable process 02';// when this variable was comment out process 01 is print. 
         function Global2() {
            
         }
         console.log(name);
         Global2();

      