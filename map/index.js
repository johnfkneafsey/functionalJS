// map demonstration

const animals = [
    {name: "meowth", species: "cat"},
    {name: "dagy", species: "whale"},
    {name: "dotson", species: "dog"},
    {name: "kirb", species: "dolphin"},
    {name: "flooth", species: "cat"},
]


let names = animals.map(animal => animal.name)
console.log(names);
