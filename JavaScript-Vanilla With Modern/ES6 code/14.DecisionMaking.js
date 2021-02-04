//Decision making [if..else / switch] case useable. Software huge uses if..else 

var self = { fname: 'Ariful', mname: 'Islam', lname: 'Polash', age: 27, vill: 'Bishnupur', post: 'Bishnupur', city: 'Chuadanga', division: 'Khulna', Country: 'Bangladesh', }
if (self['fname'] == 'ariful') {
   console.log('First name is Ariful');
} else if (self['lname'] == 'polash') {
   console.log('Last name is Polash');
}else if (self['mname'] == 'islam') {
   console.log('Middle name is Islam');
} else {
   console.log('Name not Found');
}