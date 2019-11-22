//-=-=-=-=-= Exercise 4.1 - The sum of a range -=-=-=-=-=//

const range = (start, end) => {
    let numberRange = [start];
    while(start !== end){
        start > end ? start-- : start++;
        numberRange.push(start);
    }
        return numberRange
};

const sum = (arr, start = 0) => {
    arr.forEach(num => start+= num);
    return start
};

//-=-=-=-=-= Test Cases 4.1 The sum of a range -=-=-=-=-=//

// console.log(range(1, 10));
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// // → 55

//-=-=-=-=-= Exercise 4.2 - Reversing an Array -=-=-=-=-=//

const reverseArray = arr => {
    let newArr = [];
    arr.forEach(num =>  newArr.unshift(num))
    return newArr;
};

const reverseArrayInPlace = arr => {
    arr.forEach((item, idx) => {
        arr.splice(idx,1);
        arr.unshift(item);
    })
};

//-=-=-=-=-= Test Cases 4.1 Reversing an Array -=-=-=-=-=//

// console.log(reverseArray(["A", "B", "C"]));
// // → ["C", "B", "A"];
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
// // → [5, 4, 3, 2, 1]

//-=-=-=-=-= Exercise 4.3 - A list -=-=-=-=-=//

const arrayToList = arr => {
    let list = null;
    for(let i = arr.length-1; i >= 0; i--){
        list = {value: arr[i], rest: list}
    }
    return list;
};

const listToArray = list => {
    let arr = [];
    let currentLayer = list;
    while(currentLayer){
        arr.push(currentLayer.value);
        currentLayer = currentLayer.rest;
    }
    return arr;
};

const prepend = (value, rest) => ({value, rest});

const nth = (list, num) => {
    //B
    if(num === 0) return list.value;
    if(!list.rest) return undefined;
    //R
    return nth(list.rest, num-=1)
};

//-=-=-=-=-= Test Cases 4.3 - A list -=-=-=-=-=//

//stringifying this because the console on my webstorm ide is simplifying any object greater than 3 nodes deep to [object]
// console.log(JSON.stringify(arrayToList([10, 20, 11, 11, 10])));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(listToArray({"value":10,"rest":{"value":20,"rest":{"value":11,"rest":{"value":11,"rest":{"value":10,"rest":null}}}}}));
// // → [10, 20, 11, 11, 10]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

//-=-=-=-=-= Exercise 4.4 - Deep comparison -=-=-=-=-=//

const deepEqual = (obj1, obj2) => {
    for(let key of Object.keys(obj1)){
        if(obj1[key] === obj2[key] || (typeof obj1[key] === 'object' && typeof obj2[key] === 'object')){
            if(typeof obj1[key] === 'object'){
                return deepEqual(obj1[key], obj2[key])
            }
        } else {
            return false;
        }
    }
    return true
};

//-=-=-=-=-= Test Cases 4.4 -  Deep comparison -=-=-=-=-=//

let obj = {here: {is: "an"}, object: 2};
let otherObj = {
    id: 101,
    email: 'jack@dev.com',
    personalInfo: {
        name: 'Jack',
        address: {
            line1: 'westwish st',
            line2: 'washmasher',
            city: 'wallas',
            state: 'WX'
        }
    }
};
let otherOtherObj = {
    id: 101,
    email: 'jack@dev.com',
    personalInfo: {
        name: 'Jack',
        address: {
            line1: 'westwish st',
            line2: 'washmasher',
            city: 'dallas',
            state: 'WX'
        }
    }
};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true
// console.log(deepEqual(otherObj, otherOtherObj));


