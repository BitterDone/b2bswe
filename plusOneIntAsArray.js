
const addOne = numArray => {
    let carry = 1
    const incremented = Array(numArray.length + 1)
console.log(numArray.length);
console.log(incremented.length);

    numArray.forEach((_n, _index) => {
        const reverseIndex = numArray.length - 1 - _index
        // const reverseIndex = numArray.length - _index
        const num = numArray[reverseIndex]

        console.log(`\nLoop ${_index}: ${reverseIndex} = ${num}`)
        if (num === 9) {
            incremented[reverseIndex+1] = 0
            carry = 1
        } else {
            incremented[reverseIndex+1] = num + carry
            carry = 0
        }        
        console.log(`${num===9 ? 'C' : 'No c'}arry, set index ${reverseIndex} = ${incremented[reverseIndex+1]}`)
    })
    incremented[0] = carry
    return parseInt(incremented.join(''))
}

const test = () => {
    let numArr = 999
    const incremented = numArr + 1
    
    numArr = numArr
        .toString()
        .split('')
        .map(num => parseInt(num))
    const sum = addOne(numArr)
    console.log(`addOne(${numArr})=${sum} ${sum === incremented ? '=' : '!'}== ${incremented}`)
}

var args = process.argv.slice(2)

// addOne(args)
test()
