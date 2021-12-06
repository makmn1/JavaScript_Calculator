const liveExpression = (expression) => {
    const validValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] 
    const validOperators = ["+", "-", "*", "/", "^"]
    const validSeparators = ["(", ")"]

    var i = 0
    var includesNumbers

    if ( expression.length === 0 )
        includesNumbers = true
    else
        includesNumbers = false

    while ( i < expression.length ) {
        if ( !isNaN(expression[i]) )
            includesNumbers = true
        i++
    }
    
    expression = parseInvalidChars(expression)
    expression = parenthesesChecker(expression)
    expression = parseInvalidOperators(expression, validOperators)
    expression = specifyNegNum(expression, validOperators)
    expression = specifyMultipliers(expression)

    // move this to a function. The below 2 lines combine '-' and '1' if they exist in the beginning of the expression. 


    console.log(expression)
    
    postExpression(expression)

    return(expression)
    
}

// Finds a solution of an expression using either the MathJS API or in-house functions. 
const solutionFinder = (expression, useAPI) => {
    qotd()
    if ( useAPI ) {
        mathJSAPI(expression)
    } else {
        expression = postfixConversion(expression)
        const answer = postfixCalculation(expression)
        postAnswer(answer)
    }

}