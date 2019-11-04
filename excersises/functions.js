//-=-=-=-=-= Exercise 3.1 - Minimum -=-=-=-=-=//
//replicating the Math.min function

const min = (a, b) => a < b ? a : b;

//-=-=-=-=-= Test Cases 3.1 - Minimum -=-=-=-=-=//

// console.log(min(4,5));
// // → 4
// console.log(min(15,9));
// // → 9
// console.log(min(4002,5002));
// // → 4002
// console.log(min(0, 10));
// // → 0
// console.log(min(0, -10));
// // → -10

//-=-=-=-=-= Exercise 3.2 - Recursion -=-=-=-=-=//

const isEven = (num) => {
    if(num === 1 || num === 0){
        return !num
    }
    if(num < 0){
        num += 2;
        return isEven(num);
    } else {
        num -= 2;
        return isEven(num);
    }
};

//-=-=-=-=-= Test Cases 3.2 - Recursion -=-=-=-=-=//

// console.log(isEven(50));
// // → true
// console.log(isEven(75));
// // → false
// console.log(isEven(-24));
// // → true