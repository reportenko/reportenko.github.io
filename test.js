var name = 'Natally'; // String
var count = 2; // Integer
var names = ['Anna', 'Anastasia', 'Natally', 2, 'Slava', 'Ildar', 'Illya']; // an array

const slava = { // an object
    "slavas legs": 2,
    "hands": 2
};

slava.hands = 'Too many';         // Object mutation
slava['slavas legs'] = 345;       // Object mutation
// Why do we need two ways of reassigning? - spaces

console.log(slava);