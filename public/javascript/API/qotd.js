// Retrieves a quote from an endpoint
const qotd = () => {

    const quoteRequest = new XMLHttpRequest();

    let apiURL = "https://type.fit/api/quotes"
    
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
        let quotes = JSON.parse(quoteRequest.response)
        const length = quotes.length
        const picker = Math.floor((Math.random()*length)+1)
        const chosenQuote = quotes[picker]
        quote = chosenQuote.text
        author = chosenQuote.author
        postQuote(quote, author)
    }

    quoteRequest.send()

}