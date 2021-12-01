const specifyMultipliers = (expression) => {
    var element = 1

    while ( element < expression.length ) {
        if ( !isNaN(expression[element - 1]) && expression[element] === '(' ) {
            expression.splice(element, 0, '*')
            element += 2
        }
        else if ( expression[element - 1] === ')' && expression[element] === '(' ) {
            expression.splice(element, 0, '*')
            element += 2
        }
        else if ( expression[element - 1] === ')' && !isNaN(expression[element]) ) {
            expression.splice(element, 0, '*')
            element += 2
        }
        else {
            element++
            continue
        }
    }
    return(expression)
}

// module.exports = {
//     specifyMultipliers : specifyMultipliers 
// }