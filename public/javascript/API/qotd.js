// Retrieves a quote from an endpoint
const qotd = () => {

    const quoteRequest = new XMLHttpRequest();

    let apiURL = "https://zenquotes.io/api/quotes/"
    
    quoteRequest.addEventListener("load", transferComplete)
    quoteRequest.addEventListener("error", transferFailed)
    quoteRequest.addEventListener("abort", transferCanceled)
    quoteRequest.open("GET", apiURL, true)
    
    function transferComplete(event) {
        console.log("Data received from endpoint.")
    }
    
    function transferFailed(event) {
        console.log("An error has occurred when communicating with the endpoint.")
    }
    
    function transferCanceled(event) {
        console.log("Communication has been cancelled by the user.")
    }
    
    quoteRequest.onload = function () {
        console.log(quoteRequest.response)
        console.log("Hello")
    }

    quoteRequest.send()

    // async function getApi(url) {
    //     const response = await fetch(url)
    //     var data = await response.json()
    //     console.log(data)
    // }

    // getApi(apiURL)

}