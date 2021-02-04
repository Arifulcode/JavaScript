/*

*using let:
   let keyword is assigned by block scope. 
   let can not be re-declared. 
   can be re assign value. 

*using const:
   it can not be re-assign a value. 
   it is block scoped. 
   A constant can not be re-declared. 

*using var:
   let can be re-declared. 
   can be re-assign a value. 

 */
// Re-assign:
      //using var:
      var name = 'Ariful';
      name = 'Arifulreassign'// This value is re-assign value log print re-assign value. 
         //(this process is called re - assign ).mane new value added. 
      console.log(name);
      //------------------------------------------------------------------------------

      //using let:
      let name2 = 'Ariful';
      name2 = 'Arifulreassign' 

      console.log(name2);
      // var and let is same process. 
      //----------------------------------------------------------------------------------

      //using const:
      const name3 = 'Ariful';//can not re-assign value. 
      console.log(name3);

      //!N.B: let and var keyword is re-assign. const keyword using can not re-assign value .
//re-declare: 
      // using var:    
      var rname = 'Ariful';
      var rname = 'redeclare'// This process is called re-declared.var keyword re-declared.  
         
      console.log(rname);
      //-------------------------------------------------------------------------------------

      // using let :
      let rname2 = 'Ariful';// let can not use re-declared.
      console.log(rname2);
      //---------------------------------------------------------------------------------------

      // using const:
      const rname3 = 'Arifulconst';// const can not use re-declared.
      console.log(rname3);
      
      //!N.B:  var keyword is re-declared. let and const keyword can not  re-declared value .

      /*
      
                     [var]  [let]   [const]
      re-declared-----1-------0-------0----
      re-assigned-----1-------1-------0----
      
      */