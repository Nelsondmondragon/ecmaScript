function newFunction(name,age, country){
    var name = name || 'nelson';
    var age = age || 32;
    var country =country || 'CO';
    console.log(name,age,country);
}

//es6
function newFunction2(name ='Nelson', age=32,country='COL'){
    console.log(name,age,country)
};

//Parametro -> Representa un valor que el procedimiento espera
//que pase al llamarlo.

//Argumento -> Representa el valor que se pasa a un parametro de procedimiento
//cuando se llame el procedimiento.

newFunction2(); // La funcion toma los valore
newFunction2('Juan',12,"MX");


//Antes de es6
let hello = "Hello";
let world = "world";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);



//Despues de es6
//Temple literals y la interpolacion de cadenas.

let epicPhrase2 = `${hello} ${world}`;

console.log(epicPhrase2);

let lorem = "ecmascript practica\n"
+ "ecmascript practica dos frase";

//Multilinea despues de es6

let lorem2 =`ecmascript multilinea
ahora esto hace un salto de linea`;

console.log(lorem);
console.log(lorem2);


let person = {
    'name': 'nelson',
    'age': '22',
    'country': 'CO'
}

//Para acceder a los atributos de un objeto anstes de es6

console.log(person.name,person.age);

//desestructuracion de elementos con es6
let{name,age,country}=person;
console.log(name,age,country);


let team1 = ['Nelson','Cristian','Gustavo'];
let team2 = ['Valentina','Ximena','Sofia'];

let education = ['Daniela', ...team1,...team2];
console.log(education);


{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global let";
}

console.log(globalVar);
console.log(globalLet);


let name = 'Nelson';
let age = '22';

//Antes de es6
obj = { name:name, age:age};

//despues de es6
obj2 = {name,age};

console.log(obj2);


const names =[
    {name: 'Nelson', age: 22},
    {name: 'Gustavo', age: 27}
]

//Pasando una funcion anonima
let listOfNames= names.map(function(item){
    console.log(item.name);
})


//No pasamos la funcion anonima, directamente establecemos el elemento que necesitamos.
let listOfName2 = names.map(item => console.log(item.name));

const listOfName3 = (names, age) =>
{
    console.log(name,age);
}

const listOfName = name =>{
    console.log(name);
}


const square = (num,num2) => num2*num*num;
console.log(square(23,2));

const helloPromise=()=>{
    return new Promise((resolve,reject) =>{
        if(true){
            resolve('Hey');
        }else{
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error));



    class calculator{
        constructor(){
            this.valueA = 0;
            this.valueB = 0;
        }
    
        sum(valueA,valueB){
            this.valueA=valueA;
            this.valueB=valueB;
            return this.valueA + this.valueB;
        }
    }
    
    const calc = new calculator();
    console.log(calc.sum(2,2));

//import {hello} from './module'; <- Clase platzi.
const hello = require('./module');

console.log(hello());

function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }

    if(true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

