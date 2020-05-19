const find2ndLargest = (list) => {
    console.log(`list: ${list}`)
    
}

const run = args => {
    let list = args.length > 0 ? args : [0, 2, 3, 48, 2, 32, 2]
    
    const found = find2ndLargest(list)
    console.log(`find2ndLargest(${list}) = ${found}`)
}

var args = process.argv.slice(2)

run(args)