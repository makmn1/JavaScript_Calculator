const specifyNegNum = (expression, validOperators) => {
//PROBLEM WITH: 15--(-3+5)
    var element = 1
    var elementTemp
    var closeParens
    var arrayPosition

    if ( expression[0] === '-' && !isNaN(expression[1]) )
        expression.splice(0, 2, ('-'+expression[1]))

    while ( element < expression.length ) {

        if ( expression[element - 1] === '-' && expression[element] === '(' ) {
            expression.splice(element - 1, 1, '-1', '*')
            element += 2
        }
        // else if ( expression[element - 1] === '(' && expression[element] === '-' ) {

        // }
        else if ( (validOperators.includes(expression[element - 1]) || expression[element - 1] === '(') && expression[element] === '-' ) {
            elementTemp = element + 1
            console.log(elementTemp)
            console.log(expression[elementTemp])
            // stops when it reaches a character !== '-'. Spot is saved in arrayPosition
            while ( expression[elementTemp] === '-' ) {
                elementTemp++
            }
            console.log(elementTemp)

            closeParens = elementTemp - element
            arrayPosition = elementTemp
            elementTemp-- //go back to last '-'
            while ( elementTemp !== element - 1 ) {
                expression.splice(elementTemp, 1, '*', '(', '-1')
                arrayPosition += 2
                console.log(elementTemp)
                console.log(expression)
                elementTemp--
            }
            
            expression.splice(element, 1, '(')
            while( closeParens > 0 ) {
                expression.splice(arrayPosition, 0, ')')
                arrayPosition++
                closeParens--
                console.log(elementTemp)
                console.log(expression)

            }
            expression.splice(arrayPosition + 1, 0, ')')
            element = arrayPosition
        } 
        else {
            element++
        }
    }
    return(expression)
}

// module.exports = {
//     add1ToNeg : add1ToNeg 
// }