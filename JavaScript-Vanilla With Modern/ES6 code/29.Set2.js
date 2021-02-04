/*
!--> Set is a collection of data. 
!--> Set is almost array. 
!--> But it does not contains any duplicates. 

.clear()
.delete(value)
.has(value)
.values()
Set.size();
*/
// map duplicate value is accept. but set can not compromise duplicate value

var MySet = new Set();
MySet.add("Bangladesh");
MySet.add('Bangladesh1');
MySet.add('Bangladesh2');
MySet.add('Bangladesh3'); 
MySet.add('Bangladesh4');
MySet.add('Bangladesh5');
MySet.add('Bangladesh6');

console.log(MySet);//show simple array{.....}in terminal
console.log(MySet.values());//array show but [Set Iterator]{.....} show terminal with array
if (MySet.has('bangladesh')) {
   console.log('Bangladesh is stay MySet array');
} else {
   console.log('Not Found');
}

//.clear function
var MySet1 = new Set();
MySet1.add("Bangladesh");
MySet1.add('Bangladesh1');
MySet1.add('Bangladesh2');
MySet1.add('Bangladesh3'); 
MySet1.add('Bangladesh4');
MySet1.add('Bangladesh5');
MySet1.add('Bangladesh6');
MySet1.clear();
console.log(MySet1);

//.delete(value) using
var MySet2 = new Set();
MySet2.add("Bangladesh");
MySet2.add('Bangladesh1');
MySet2.add('Bangladesh2');
MySet2.add('Bangladesh3'); 
MySet2.add('Bangladesh4');
MySet2.add('Bangladesh5');
MySet2.add('Bangladesh6');

MySet2.delete('Bangladesh3');
// MySet2.has();
console.log(MySet2.size);

//



