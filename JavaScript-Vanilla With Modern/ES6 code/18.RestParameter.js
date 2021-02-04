//Rest Function
"use strict";
function RestFunction(...params) {
   console.log(params);
   console.log(params[5]);
}
RestFunction(1, 2,1.5,88.5, "rest", "function");// everything is possible int/double/float/string whatever. 