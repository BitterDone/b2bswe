const add = (a, b) => {
    let sum_bitwise = (a | 0x0 )//>>> 0)//.toString(2)
    let carry_bitwise = (b | 0x0 )//>>> 0)//.toString(2)

    let x = 0

    while (carry_bitwise != '0000' && x < 10) {
        console.log(`\nLooping\n${sum_bitwise} sum_bitwise`)
        console.log(`${carry_bitwise} carry_bitwise\n`)
        
        carry_bitwise = (sum_bitwise & carry_bitwise)//.toString(2)
        console.log(`${carry_bitwise} carry loc`)
        
        sum_bitwise = (sum_bitwise ^ carry_bitwise)//.toString(2)
        console.log(`${sum_bitwise} xor`)

        carry_bitwise = (carry_bitwise << 1)//.toString(2)
        console.log(`${carry_bitwise} carry shift`)
        
        x++
    }
    console.log(`Final sum: ${sum_bitwise}`)

    return sum_bitwise
}

const test = () => {
    const sum = add(0x4,0x5)
    console.log(`add(4,5)=${sum} === ${4+5} : ${sum === 4+5}`)
}

var args = process.argv.slice(2)

// add(args[0], args[1])
test()
