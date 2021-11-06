const parenParser = (expression) => {
    var i = 0
    const parenStack = []
    var violators = []

    while ( i < expression.length ) {
        if ( expression[i] === '(' && parenStack.length === 0 )
            parenStack.push('(')
        else if ( expression[i] === '(' && parenStack[parenStack.length - 1] === '(' )
            parenStack.push('(')
        else if ( expression[i] === ')' && parenStack.length === 0 )
            violators.push(i)
        else if ( expression[i] === ')' && parenStack[parenStack.length - 1] === '(' )
            parenStack.pop()
        i++
    }
    if ( violators.length !== 0 ) {
        while ( violators.length > 0 ) {
            expression.splice(violators[0], 1)
            violators.splice(0, 1)
            violators = violators.map( element => element -= 1)       
        }
    }
    if ( parenStack.length !== 0 ) {
        let parensOpened = parenStack.length
        while ( parensOpened > 0 ) {
            expression.push(')')
            parensOpened--
        }
    }
    
    return(expression)
}

// module.exports = {
//     parenParser : parenParser
// }