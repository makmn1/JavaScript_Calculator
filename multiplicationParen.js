const specifyMultipliers = (expression, validValues) => {
    var element = 1

    while ( element < expression.length ) {
        if ( validValues.includes(expression[element - 1]) && expression[element] === '(' ) {
            expression.splice(element, 0, '*')
            element += 2
        }
        else if ( expression[element - 1] === ')' && expression[element] === '(' ) {
            expression.splice(element, 0, '*')
            element += 2
        }
        else if ( expression[element - 1] === ')' && validValues.includes(expression[element]) ) {
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