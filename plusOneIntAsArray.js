

const add = argsArray => {
    console.log(argsArray)

    return 0
}

const test = () => {
    const sum = add([1, 2, 3])
    console.log(`add(4,5)=${sum} === ${4+5} : ${sum === 4+5}`)
}

var args = process.argv.slice(2)

add(args)
// test()
