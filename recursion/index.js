// simple example
function countDownFrom(number) {
    console.log(number)
    if (number === 0) return 'countdown complete';
    return countDownFrom(number - 1);
}

console.log(countDownFrom(10));

// practical example
// how can we represent this in a tree structure
let categories = [
    {id: 'animals', parent: null},
    {id: 'mammals', parent: 'animals'},
    {id: 'cats', parent: 'mammals'},
    {id: 'dogs', parent: 'mammals'},
    {id: 'chihuahua', parent: 'dogs'},
    {id: 'labrador', parent: 'dogs'},
    {id: 'persian', parent: 'cats'},
    {id: 'siamese', parent: 'cats'},    
]


let makeTree = (categories, parent) => {
    let node = {}
    categories
        .filter(x => x.parent === parent)
        .forEach(x => 
            node[x.id] = makeTree(categories, x.id))
    return node
}

console.log(JSON.stringify(makeTree(categories, null), null, 2));

