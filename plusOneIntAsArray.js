
const addOne = numArray => {
    let carry = 1
    const incremented = numArray.map(x=>x)
    incremented.unshift(0)
    numArray.unshift(0)

    numArray.forEach((_n, _index) => {
        const reverseIndex = numArray.length - 1 - _index
        const num = numArray[reverseIndex]

        // console.log(`\nLoop ${_index}: ${reverseIndex} = ${num}`)
        if (num === 9) {
            incremented[reverseIndex] = 0
            carry = 1
        } else {
            incremented[reverseIndex] = num + carry
            carry = 0
        }        
        // console.log(`${num===9 ? 'C' : 'No c'}arry, set index ${reverseIndex} = ${incremented[reverseIndex]}`)
    })

    return parseInt(incremented.join(''))
}

const run = args => {
    let numArr = args[0] || '999'
    const incremented = parseInt(numArr) + 1
    
    numArr = numArr
        .split('')
        .map(num => parseInt(num))
    const sum = addOne(numArr)
    console.log(`addOne(${numArr})=${sum} ${sum === incremented ? '=' : '!'}== ${incremented}`)
}

var args = process.argv.slice(2)

run(args)