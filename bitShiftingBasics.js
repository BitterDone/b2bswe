const add = (a, b) => {
    let sum_bitwise = (a >>> 0).toString(2)
    let carry_bitwise = (b >>> 0).toString(2)

    while (carry_bitwise != '0000') {
        console.log(`\nLooping\n${sum_bitwise} sum_bitwise`)
        console.log(`${carry_bitwise} carry_bitwise`)
        
        carry_bitwise = (a & b).toString(2)
        console.log(`${carry_bitwise} carry loc`)
        
        carry_bitwise = (carry_bitwise >> 1).toString(2)
        console.log(`${carry_bitwise} carry shift`)
        
        sum_bitwise = (a ^ b).toString(2)
        console.log(`${sum_bitwise} xor`)

    }
    console.log(`Final sum: ${sum_bitwise}`)

    return sum_bitwise
}

const test = () => {
    console.log(`${add(4,5) === (4+5)} ${add(4,5)} === ${4+5}`)
}

var args = process.argv.slice(2)

// add(args[0], args[1])
test()
