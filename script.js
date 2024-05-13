var myMap = new Map();

//api
/*
set()
get()
size()
clear()
has()
*/

var myObj = {};
var myFunc = function(){};

myMap.set(myObj, 'haw');
myMap.set(myFunc, 'world');
myMap.set('string', 2)

// myMap.clear();

// console.log(myMap.has('hee'));

//Iterators
// keys()
// entries()
// values()

// for (var key of myMap.keys()) {
//     console.log(key);
// }

// for (var value of myMap.values()) {
//     console.log(value);
// }

for (var [key, value] of myMap.entries()) {
    console.log(key + ' = ' + value);
}