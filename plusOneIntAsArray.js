
const addOne1 = numArray => {
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

const addOne = (numArr, index, carry) => {
    // numArr[index] = (numArr[index] === 9) ? 0 : numArr[index] + carry

    // const newCarry = (numArr[index] === 0) ? 1 : 0
    // return addOne(numArr, index-1, newCarry)

    console.log(`numArr: ${numArr} index: ${index} carry: ${carry}`)
    if (index === 0) return numArr[index] + carry

    if (numArr[index] === 9) {
        numArr[index] = 0
        return addOne(numArr, index-1, 1)
    } else {
        numArr[index] = numArr[index] + carry
        return addOne(numArr, index-1, 0)
    } 
}

const run = args => {
    let numArr = args[0] || '999'
    const incremented = parseInt(numArr) + 1
    
    numArr = numArr
        .split('')
        .map(num => parseInt(num))
    const sum = addOne(numArr, numArr.length, 1)
    console.log(`addOne(${numArr})=${sum} ${sum === incremented ? '=' : '!'}== ${incremented}`)
}

const run1 = args => {
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