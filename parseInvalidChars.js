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

    /* The above implementation has a flaw:
     * Numbers with >1 digits have been separated.
     * The following loop combines adjacent numbers. 
    */
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
    
    // But is it a flaw? We could convert any '-' preceding a number by -1. This could be done after parsing. All '-' should be preserved though.
    /* The above implementation has a flaw:
     * Negative numbers have the negative separated.
     * The following loop combines the number back with its negative.
    */
    
    // // Edge Case: Checks first number
    // if ( values[0] === '-' && !isNaN(values[1]) ) {
    //     values[1] *= -1
    //     values.splice(0, 1)
    // }
    
    // // If the character before a - is a number, its subtraction. If an operation/separator, its a negative.
    // i = 2
    // while ( i < values.length ) {
    //     if ( values[i - 2] === '(' && values[i - 1] === '-' && !isNaN(values[i]) ) {
    //         values[i] *= -1
    //         values.splice(i - 1, 1)
    //     }
    //     // Checks if there exists the following [operator] [minus] [number]. If so, a negative number exists. 
    //     else if ( validOperators.includes(values[i - 2]) && values[i - 1] === '-' && !isNaN(values[i]) ) {
    //         values[i] *= -1
    //         values.splice(i - 1, 1)
    //     } else
    //         i++
    // }
    return(values)
}

// module.exports = {
//     separateAndParse : separateAndParse 
// }