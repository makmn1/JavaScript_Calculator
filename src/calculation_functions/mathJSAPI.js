// Given an expression, the following function calls the MathJS API to solve it.
const mathJSAPI = (expression) => {
    
    expression = expression.join('')
    const mathJSRequest = new XMLHttpRequest();

    let apiURL = "http://api.mathjs.org/v4/?expr="
    const expressionURL = encodeURIComponent(expression)
    apiURL += expressionURL

    const precision = 'precision=5'
    apiURL += '&'
    apiURL += precision
    
    mathJSRequest.addEventListener("load", transferComplete)
    mathJSRequest.addEventListener("error", transferFailed)
    mathJSRequest.addEventListener("abort", transferCanceled)
    mathJSRequest.open("GET", apiURL, true)
    
    function transferComplete(event) {
        console.log("Data received from endpoint.")
    }
    
    function transferFailed(event) {
        console.log("An error has occurred when communicating with the endpoint.")
    }
    
    function transferCanceled(event) {
        console.log("Communication has been cancelled by the user.")
    }
    
    mathJSRequest.onload = function () {
        console.log(mathJSRequest.responseText)
        postAnswer(mathJSRequest.responseText)
    }

    mathJSRequest.send()
    
}