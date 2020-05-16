// https://gist.github.com/wildlyinaccurate/8859257

const add1 = (a, b) => {
    let sum = a
    let carry = b

    let x = 0

    while (carry && x < 10) {
        console.log(`\nLooping\n${sum} sum`)
        console.log(`${carry} carry\n`)
        
        sum = (a ^ b)
        carry = (a & b) << 1

        a = sum
        b = carry
        
        x++
    }
    console.log(`Final sum: ${sum}`)

    return sum
}

const add = (a, b) => {
    const sum = a ^ b
    const carry = (a & b) << 1

    return (sum & carry) ? add(sum, carry) : sum ^ carry
}

const test = () => {
    const sum = add1(0x4,0x5)
    console.log(`add(4,5)=${sum} === ${4+5} : ${sum === 4+5}`)
}

var args = process.argv.slice(2)

// add(args[0], args[1])
test()
