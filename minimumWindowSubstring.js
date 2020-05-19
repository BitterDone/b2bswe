const findMinWindow = (searchString, pattern) => {
    console.log(`searchString: ${searchString}`)
    console.log(`pattern: ${pattern}`)
    
    if (!searchString || !pattern || searchString === '' || pattern === '') return '<empty string>'
    const patternArray = pattern.split('')

    let minWindow = searchString
    let l = 0
    let r = 0

    while (l < searchString.length && r < searchString.length) {
        console.log(`\nEvaluating ${searchString.substring(l, r)}`)
        console.log(`${pattern} in ${searchString.substring(l, r)}: ${windowSatisfiesPattern(searchString.substring(l, r), patternArray)}`)
        console.log(`Smaller window: ${searchString.substring(l, r).length < minWindow.length}`)

        let window = searchString.substring(l, r)
        if (windowSatisfiesPattern(window, patternArray) && window.length < minWindow.length) {
            minWindow = window
            l = l + 1
        } else {
            r = r + 1
            // if (r === searchString.length)
        }
    }
    
    return minWindow

}

const ineligiblePattern = (searchString, pattern) => {
    pattern.split('').filter(el => { // single letter of pattern
        let re = new RegExp(`/${el}/g`) // search for # of occurs
        let count = (searchString.match(re) || []).length
    })

    /* TODO
        Figure out if the pattern can be found in the searchString.
        Collapse the pattern to unique characters
        For each unqiue pattern character, match it against the pattern
        For each unique pattern character, match it against the search String
        The length of these two arrays needs to match
    */
}

const windowSatisfiesPattern = (window, patternArray) => patternArray.filter(el => window.indexOf(el) < 0).length === 0

const validArgs = args => args && args.length === 2
const run = args => {
    const argsValid = validArgs(args)

    let searchString = argsValid ? args[0] : 'lksdjhfalksdjhf'
    let pattern = argsValid ? args[1] : 'als'
    
    const minWindow = findMinWindow(searchString, pattern) // 'alks'
    console.log(`findMinWindow(${searchString}, ${pattern}) = ${minWindow}`)
}

var args = process.argv.slice(2)

run(args)