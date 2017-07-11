let _ = require('lodash');

// without currying
let dragon = (name, size, element) =>
    name + ' is a ' + size + ' dragon that breathes ' + element + '!';

console.log(dragon('fluffy', 'huge', 'water'));


// with currying
// your function can move through your application while gradually picking up arguments.
let curryDragon = 
    name => 
        size =>
            element =>
                name + ' is a ' + size + ' dragon that breathes ' + element + '!';

console.log(curryDragon('meowth')('tiny')('steam'));

// this is the same as...
let mewTwoDragon = curryDragon('MewTwo');
let tinyDragon = mewTwoDragon('tiny');
let steamDragon = tinyDragon('steam');

console.log(steamDragon)


// improving code to include currying
// original

let dragons = [
    {name: 'fluffy', element: 'lightning'},
    {name: 'stinky', element: 'gas'},
    {name: 'slimer', element: 'sludge'},
    {name: 'hairball', element: 'lightning'},
]

let hasElement = 
    _.curry((element, obj) => obj.element === element)

let lightningDragons = 
    dragons.filter(hasElement('lightning'))

console.log(lightningDragons);