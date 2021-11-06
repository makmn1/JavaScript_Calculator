const parseInvalidOperators = (expression, operators) => {

    var p = 0
    while ( p < expression.length ) {
        if ( p === 0 && operators.includes(expression[p]) && expression[p] != '-' ) {
            expression.splice(p, 1)
        }
        else if ( operators.includes(expression[p]) && operators.includes(expression[p + 1]) ) {
            expression.splice(p + 1, 1)
        }
        else if ( operators.includes(expression[p]) && expression[p + 1] === ')' ) {
            expression.splice(p, 1)
            p++
        }
        else if ( expression[p] === '(' && operators.includes(expression[p + 1]) ) {
            expression.splice(p + 1, 1)
            p++
        }
        else if ( (p === expression.length - 1) && operators.includes(expression[p]) ) {
            expression.splice(p, 1)
        }
        else
            p++
    }
    return(expression)
}

// module.exports = {
//     parse : parse 
// }