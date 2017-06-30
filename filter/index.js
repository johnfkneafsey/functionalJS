// what are higher order functions good for?
//  -composition - putting functions inside of functions as arguments


// Ex 1: Filter
const animals = [
    {name: "meowth", species: "cat"},
    {name: "dagy", species: "whale"},
    {name: "dotson", species: "dog"},
    {name: "kirb", species: "dolphin"},
    {name: "flooth", species: "cat"},
]

// es6
let cats = animals.filter(animal => animal.species === "cat")
//console.log(cats);

// es5
var _cats = animals.filter(function(animal){return animal.species === "cat"})
//console.log(_cats);

// we can break the criteria of the filter function into another function to adhere to functional programming style
let isCat = animal => animal.species === "cat";
let __cats = animals.filter(isCat);
console.log(__cats);