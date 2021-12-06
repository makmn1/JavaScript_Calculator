// The following function updates the solution element with the passed argument
const postAnswer = (answer) => {

    const newPara = document.createElement("p")
    newPara.setAttribute("id", "solution")
    const userSolution = document.createTextNode("The answer is: " +answer)
    newPara.appendChild(userSolution)

    const parent = document.getElementById("div1")
    const currentPara = document.getElementById("solution")
    parent.replaceChild(newPara, currentPara)
    
}