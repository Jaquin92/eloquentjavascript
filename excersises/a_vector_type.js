//-=-=-=-=-= Exercise 6.1 - A vector type -=-=-=-=-=//
//creating a vector class that allows you to compare and contrast vectors aswell as find the distance from 0,0
class Vec {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    plus (vector){
        return new Vec(this.x + vector.x, this.y + vector.y)
    };

    minus (vector){
        return new Vec(this.x - vector.x, this.y - vector.y)
    };

    get length () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

//-=-=-=-=-= Test Cases 6.1 - A vector type -=-=-=-=-=//

// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// // → Vec{x: 3, y: 5}
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// // → Vec{x: -1, y: -1}
// console.log(new Vec(3, 4).length);
// // → 5

//-=-=-=-=-= Exercises Groups 6.2 && 6.3 Iterable groups -=-=-=-=-=//
//creating a group class that allows you to add and remove items
//you can also check if an item exists in the object
class Group{
    constructor(){
        this.group = [];
    }

    add (item){
        if(!this.has(item)) this.group.push(item)
    };

    delete (item){
        if(this.has(item)){
            this.group.splice(this.group.indexOf(item), 1)
        }
    };

    has (item){
       return this.group.includes(item);
    };

    get (index){
        return this.group[index];
    }

    static from (items){
        let newGroup = new Group();
        items.forEach(item => newGroup.add(item));
        return newGroup;
    }
    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}
//created an iterator interface that allows you to iterate through our group class
//I am appending this class to our Group class above as a Symbol
class GroupIterator{
    constructor(thing){
        this.iterableGroup = thing;
        this.iterationIndex = 0;
    }
    next (){
        if(this.iterationIndex === this.iterableGroup.group.length){
            return { done: true };
        } else {
            let value = ({
             value: this.iterableGroup.get(this.iterationIndex),
             done: false
         });
            this.iterationIndex++;
            return value;
        }
    }
}

//-=-=-=-=-= Test Cases 6.2 - Groups && 6.3 Iterable groups -=-=-=-=-=//

// //6.2
// let group = Group.from([10, 20]);
// console.log(group.has(10));
// // → true
// console.log(group.has(30));
// // // → false
// group.add(10);
// group.delete(10);
// console.log(group.has(10));
// // → false
// group.add(99);
// console.log(group.has(99));
// // → true
// group.delete(99);
// console.log(group.has(99));
// // → false
//
// //6.3
// for (let value of Group.from(["a", "b", "c"])) {
//     console.log(value);
// }
// // → a
// // → b
// // → c
// for (let value of Group.from(["Hi", "Jonathan", "Aquino", ",", "how", "are", "you"])) {
//     console.log(value);
// }
// // → Hi
// // → Jonathan
// // → Aquino
// // → ,
// // → how
// // → are
// // → you

//-=-=-=-=-= Exercise 6.4 - Borrowing a method -=-=-=-=-=//
//I am creating a hasOwnPropertyClone method on my map
// that clones the hasOwnProperty method from the Object prototype
// and using this method instead of hasOwnProperty

let map = {one: true, two: true, hasOwnProperty: true};
map.hasOwnPropertyClone = Object.hasOwnProperty;

//-=-=-=-=-= Test Cases 6.4 - Borrowing a method -=-=-=-=-=//

// console.log(map.hasOwnPropertyClone("one"));
// // → true
// console.log(map.hasOwnPropertyClone("two"));
// // → true
// console.log(map.hasOwnPropertyClone("three"));
// // → false
// // Eloquent Javascripts solution
// // this solution is much cleaner than mine
// // I will try to use the call method in the future
// console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// // → true