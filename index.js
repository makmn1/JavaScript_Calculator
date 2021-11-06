const liveExpression = (expression) => {
    const validValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] 
    const validOperators = ["+", "-", "*", "/", "^"]
    const validSeparators = ["(", ")"]

    console.log(expression)

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
    expression = parseInvalidOperators(expression, validOperators)
    expression = parenParser(expression)
    expression = add1ToNeg(expression)
    expression = specifyMultipliers(expression)


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


    console.log(stringExpression)
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
