// This function updates the expressionstatus HTML element given an expression.
const postExpression = (expression) => {

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

}