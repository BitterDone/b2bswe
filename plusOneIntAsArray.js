

const addOne = argsArray => {
    
    return 0
}

const test = () => {
    let numArr = 123
    const incremented = numArr + 1

    numArr = numArr.toString().split('')
    const sum = addOne(numArr)
    console.log(`addOne(${numArr})=${sum} ${sum === incremented ? '=' : '!'}== ${incremented}`)
}

var args = process.argv.slice(2)

// addOne(args)
test()
