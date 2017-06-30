const fs = require('fs');


let output = fs.readFileSync('names.txt', 'utf8')
    .split('\n') // splits on line break **\t splits on tab
    .map(line => line.split(' '))
    .reduce((customers, line) => {
        customers[line[0]] = customers[line[0]] || []
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
        })
        return customers
    }, {})

console.log(JSON.stringify(output, null, 2))

