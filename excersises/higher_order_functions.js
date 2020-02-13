//-=-=-=-=-= Exercise 5.1 - Flattening -=-=-=-=-=//

let arrays = [[1, 2, 3], [4, 5], [6]];
let newArr = arrays.reduce((a,b) => a.concat(b));

//-=-=-=-=-= Test Cases 5.1 - Flattening -=-=-=-=-=//

// console.log(newArr);
// → [1, 2, 3, 4, 5, 6]

//-=-=-=-=-= Exercise 5.2 - Your own loop -=-=-=-=-=//

const loop = (val, func1, func2) => {

};

//-=-=-=-=-= Test Cases 5.2 - Your own loop -=-=-=-=-=//

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1