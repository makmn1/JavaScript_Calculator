const separateAndParse = (expression) => {

    const validValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] 
    const validOperators = ["+", "-", "*", "/", "^"]
    const validSeparators = ["(", ")"]

    const invalidValuesFound = []

    console.log([...expression])
    const values = [...expression].filter( element => {
        
        for (let i = 0; i < validValues.length; i++) {
            if ( element === validValues[i] || element === validOperators[i] || element === validSeparators[i])
                return true
        }

        invalidValuesFound.push(element)
        return false
    })
    let i = 1
    while ( i < values.length ) {
        if ( !isNaN(values[i - 1]) && !isNaN(values[i]) ) {
            console.log(values)
            values[i] = values[i - 1] + values[i]
            values.splice(i - 1, 1)
        }
        else
            i++
    }
    // In case of (-#), combines '-' with '#'
    i = 2
    while ( i < values.length ) {
        if ( values[i - 2] === '(' && values[i - 1] === '-' && !isNaN(values[i]) ) {
            values[i] *= -1
            values.splice(i - 1, 1)
        }
        else
            i++
    }
    return(values)
}

// module.exports = {
//     separateAndParse : separateAndParse 
// }