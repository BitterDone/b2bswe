const find2ndLargest = (list) => {
    console.log(`list: ${list}`)

    if (!list || list.length < 2) return -Infinity

    let first = -Infinity
    let second = -Infinity
    
    list.forEach(num => {
        if (num > first) {
            second = first
            first = num
        } else if (num != first && num > second) second = num
    })
    return second
}

const run = args => {
    let list = args.length > 0 ? args : [0, 2, 3, 48, 2, 32, 2]
    
    const found = find2ndLargest(list)
    console.log(`find2ndLargest(${list}) = ${found}`)
}

var args = process.argv.slice(2)

run(args)