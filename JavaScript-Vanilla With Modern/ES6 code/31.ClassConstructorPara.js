class MyClass {

   constructor(a, b) {
      console.log(a + b);
   }

}
new MyClass(10, 20)



class MyClass2 {

   constructor(a, b) {
      this.firstParam = a;
      this.secondParam = b;
   }

   add() {
      let result = this.firstParam + this.secondParam;
      console.log(result);
   }

   sub() {
      let result = this.firstParam - this.secondParam;
      console.log(result);
   }

   mul() {
      let result = this.firstParam * this.secondParam;
      console.log(result);
   }

   div() {
      let result = this.firstParam / this.secondParam;
      console.log(result);
   }

}
var object = new MyClass2(20, 10);
object.add();
object.sub();
object.mul();
object.div();