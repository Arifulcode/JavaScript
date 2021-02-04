//OOP main base is class. without class can't make application/Software.example:as like as class is Bazar Bag.
/*
--- Before ES6 , It was hard to create a class in javascript
--- but in es6, we can create the class by using the class keyword. [class keyword is es6 features]
--- 

*/ 

class MyClass{

   MyFun() {
      console.log('I am form MyClass and MyFun');
   }

   MyFun1(name) {
      console.log(name);
   }

   MyFun2() {
      console.log('I am form MyClass and MyFun2');
   }

   MyFun3() {
      console.log('I am form MyClass and MyFun3');
   }

   MyFun4() {
      console.log('I am form MyClass and MyFun4');
   }


}

var obj = new MyClass;
obj.MyFun();
obj.MyFun1('This function is carry with parameter');
obj.MyFun2();
obj.MyFun3();
obj.MyFun4();