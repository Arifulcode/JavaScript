/*
!for..in..loop use property and value sequence each other print step by step
*/
var self = {
   fname: 'Ariful',
   mname: 'Islam',
   lname: 'Polash',
   age: 27,
   vill: 'Bishnupur',
   post: 'Bishnupur',
   city: 'Chuadanga',
   division: 'Khulna',
   Country: 'Bangladesh',
}

for (props in self) {
   // console.log(self[props]);//only property value printed. 
   // console.log(props);//only property printed
   console.log(props + " -->" + self[props]);//property and value are printed at a time single line. 
}