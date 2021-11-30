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
        if ( validValues.includes(expression[i]) )
            includesNumbers = true
        i++
    }
    
    expression = separateAndParse(expression)
    expression = parenParser(expression)
    expression = parseInvalidOperators(expression, validOperators)
    expression = add1ToNeg(expression, validValues)
    expression = specifyMultipliers(expression, validValues)

    // move this to a function. The below 2 lines combine '-' and '1' if they exist in the beginning of the expression. 
    if ( expression[0] === '-' && validValues.includes(expression[1]) )
        expression.splice(0, 2, '-1')

    console.log(expression)
    var stringExpression = ''
    for (let i = 0; i < expression.length; i++)
        stringExpression += (expression[i] + ' ')
        
    const newPara = document.createElement("p")
    newPara.setAttribute("id", "expressionStatus")
    const newExpression = document.createTextNode("Your expression is: " +stringExpression)
    newPara.appendChild(newExpression)
        
    const parent = document.getElementById("div1")
    const currentPara = document.getElementById("expressionStatus")
    parent.replaceChild(newPara, currentPara)

    return(expression)
    
}

const solutionFinder = (expression) => {
    expression = toPostfix(expression)
    const answer = calculate(expression)
    const newPara = document.createElement("p")
    newPara.setAttribute("id", "solution")
    const userSolution = document.createTextNode("The answer is: " +answer)
    newPara.appendChild(userSolution)

    const parent = document.getElementById("div1")
    const currentPara = document.getElementById("solution")
    parent.replaceChild(newPara, currentPara)

}
