/*
!--> Set is a collection of data. 
!--> Set is almost array. 
!--> But it does not contains any duplicates. 
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
console.log(MySet);

//duplicate value run and test:
var MySet1 = new Set();
MySet1.add("Bangladesh");
MySet1.add('Bangladesh1');
MySet1.add('Bangladesh1');
MySet1.add('Bangladesh2');
MySet1.add('Bangladesh3'); 
MySet1.add("Bangladesh");
MySet1.add('Bangladesh4');
MySet1.add('Bangladesh5');
MySet1.add('Bangladesh6');
MySet1.add('Bangladesh4');
MySet1.add("Bangladesh");
console.log(MySet1);

//Array push with Constructor
var MySet2 = new Set(['a', 'b','c','d','e',]);
console.log(MySet2);