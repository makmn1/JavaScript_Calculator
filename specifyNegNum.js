const specifyNegNum = (expression) => {
    var element = 1
    var prevNegMultiplier = false
    while ( element < expression.length ) {
        
        if ( expression[element - 1] === '-' && expression[element] === '(' ) {
            expression.splice(element - 1, 1, '-1', '*')
            element += 2
            prevNegMultiplier = false
        } 
        else if ( expression[element - 1] === '-' && expression[element] === '-' ) {
            expression.splice(element, 1, '1', '*', '(', '-1', ')')
            prevNegMultiplier = true
            element +=5
        } 
        else if ( expression[element] === '-' && prevNegMultiplier === true ) {
            expression.splice(element, 1, '*', '(', '-1', ')')
            element +=4
        }
        else {
            element++
            prevNegMultiplier = false
        }

    }
    return(expression)
}

// module.exports = {
//     add1ToNeg : add1ToNeg 
// }