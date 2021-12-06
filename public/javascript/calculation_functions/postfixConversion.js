// This function returns the postfix version of a mathematical expression given an expression
const postfixConversion = (expression) => {
    const pfxStack = []
    const pfxArr = []
    var pfx = 0
    var insideParen

    while ( pfx < expression.length ) {
        console.log("Postfix Conversion")
        console.log(pfxArr)
        console.log(pfxStack)
        if ( !isNaN(expression[pfx]) ) {
            pfxArr.push(expression[pfx])
        }  
        else if ( expression[pfx] === '^' && pfxStack[pfxStack.length - 1] != '^' ) {
            pfxStack.push(expression[pfx])
        }
        else if ( expression[pfx] === '^' && pfxStack[pfxStack.length - 1] === '^' ) {
            pfxArr.push(pfxStack.pop())
            continue // we continue because the next element could also be a ^. We can't push a ^ if there is another on top.
        }
        else if ( (expression[pfx] === '*' || expression[pfx] === '/') && (pfxStack[pfxStack.length - 1] === '^' || pfxStack[pfxStack.length - 1] === '*' || pfxStack[pfxStack.length - 1] === '/') ) {
            pfxArr.push(pfxStack.pop())
            continue // we continue because the next element could also be a ^, *, or /. We can't push a * or / if there is another equal priority character on top.
        }
        else if ( (expression[pfx] === '*' || expression[pfx] === '/') && (pfxStack[pfxStack.length - 1] === '+' || pfxStack[pfxStack.length - 1] === '-' || pfxStack[pfxStack.length - 1] === '(' || pfxStack.length === 0) ) {
            pfxStack.push(expression[pfx])
        }
        else if ( (expression[pfx] === '+' || expression[pfx] === '-') && (pfxStack[pfxStack.length - 1] !== '(' && pfxStack.length !== 0) ) {
            pfxArr.push(pfxStack.pop())
            continue // we continue because the next element could also not be a '('. We can't push a '+' or '-' if there is another value that is not '('.
        }
        else if ( (expression[pfx] === '+' || expression[pfx] === '-') && (pfxStack[pfxStack.length - 1] === '(' || pfxStack.length === 0) ) {
            pfxStack.push(expression[pfx])
        }
        else if ( expression[pfx] === '(' ) {
            pfxStack.push(expression[pfx])
        }
        else if ( expression[pfx] === ')' ) {
            while ( insideParen !== '(' ) {
                insideParen = pfxStack.pop()
                if ( insideParen !== '(' ) {
                    pfxArr.push(insideParen)
                }
            }
            insideParen = undefined
        }
        pfx++
        if (pfx === expression.length) {
            while (pfxStack.length !== 0) {
                pfxArr.push(pfxStack.pop())
            }
            console.log("Final Postfix")
            console.log(pfxArr)
            console.log(pfxStack)
        }
    }
    return(pfxArr)
}

// module.exports = {
//     toPostfix : toPostfix 
// }