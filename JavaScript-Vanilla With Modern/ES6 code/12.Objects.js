var House = {
   Room: true,
   Yeard: true,
   kitchen: true,
   Toilet: true,
   HouseColor: 'green',
   Price: '500USD',


}
console.log(House['HouseColor']); // single property  output in console log 

var HousePro = {
   Room: {
      Quality: 'good',
      Area: '100sqf',
      Color: 'white',
      chair: true,
      Table: true,

      Bed: {
         B_state: 'wood',
         mat: {
            price: '10USD',
            color: 'red',
            quality: 'bad',
            spin: 'not cotton',
            size: '28sqf',
         },
         pillow: true,
         weight: '80kg',
         wide: '4.5 inch',
         length: '6.5 inch'
      }
   },
   Yeard: {
      state: 'soil',
      area: '700sqf',
   },
   Kitchen: {
      quality: 'not bad',
      area: '50sqf',
   },
   Toilet: {
      area: '25sqf',
      quality: 'good',
      state: 'tiles'
   }

}
console.log(HousePro['Room']['Bed']['mat']['spin']); //nested objects show print sequence