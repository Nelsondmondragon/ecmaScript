let array = [1,2,3,4,[1,2,3,4,[1,2,3]]];

console.log(array.flat(2));

let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value *2]));


let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);