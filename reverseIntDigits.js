const intToReverse = (intToRev) => {
    console.log(`intToRev: ${intToRev}`)
    let result = 0
    let intWip = parseInt(Math.abs(intToRev))

    while (intWip != 0) {
        result *= 10
        result += parseInt(intWip%10)
        intWip = parseInt(intWip / 10)
    }
    return intToRev<0 ? -result : result
}

const run = args => {
    let intToRev = args[0] || '123'
    
    const revd = intToReverse(parseInt(intToRev))
    console.log(`intToReverse(${intToRev}) = ${revd}`)
}

var args = process.argv.slice(2)

run(args)