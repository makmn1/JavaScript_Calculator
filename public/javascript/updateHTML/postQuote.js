const postQuote = (quote, author) => {
    const newPara = document.getElementById("quote")
    newPara.innerHTML = quote + '<br> &mdash;' + author
}