const add1ToNeg = (expression) => {
    var element = 1

    while ( element < expression.length ) {
        if ( expression[element - 1] === '-' && expression[element] === '(' ) {
            expression.splice(element, 0, '1', '*')
            element += 3
        }
        else
            element++
    }
    return(expression)
}

// module.exports = {
//     add1ToNeg : add1ToNeg 
// }