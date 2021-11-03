const calculate = (expression) => {

    const validValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] 
    const validOperators = ["+", "-", "*", "/", "^"]
    const validSeparators = ["(", ")"]

    const invalidValuesFound = []

    // Checkpoint 1: Receive Expression from index.html
    console.log(expression)

    // Checkpoint 2: Create array with only valid operands and operators

    // Splits the expression into an array of character with only valid values
    console.log([...expression])
    const values = [...expression].filter( element => {
        
        for (let i = 0; i < validValues.length; i++) {
            if ( element === validValues[i] || element === validOperators[i] || element === validSeparators[i])
                return true
        }

        invalidValuesFound.push(element)
        return false
        
    })
    console.log(values)
    console.log("here1")
    

    // Check expression for proper form: No more than 1 consecutive operator (e.g. 2++5 is wrong)
    // Remove consecutive operator (keep only the first) and push invalid operators to a junk array.
    let prevOperator = false;
    const invalidOperators = []

    console.log("here2")
    console.log(values)
    // Cull operators in beginning
    let j = 0
    // The j < values.length ends the loop after checking the whole array (needed if array contains only parenthesis for some reason)
    while (!validValues.includes(values[j]) && j < values.length) {
        if ( validOperators.includes(values[j]) ) {
            invalidOperators.push(values[j])
            values.splice(j, 1)
            j--
        }
        j++
    }
    console.log("here3")

    for (let i = 0; i < values.length; i++) {
        if ( validOperators.includes(values[i]) && prevOperator === true ) {
            invalidOperators.push(values[i])
            values.splice(i, 1)
            i--
        }
        else if ( validOperators.includes(values[i]) )
            prevOperator = true
        else
            prevOperator = false

    }

    console.log("here4")
    // Cull operators at end (could remove more than 1, but ends up removing 1 because of preceding for loop)
    j = values.length - 1
    while (!validValues.includes(values[j]) && j >= 0) {
        if ( validOperators.includes(values[j])) {
            invalidOperators.push(values[j])
            values.splice(j, 1)
            j++
        }
        j--
    }

    // Print out invalid characters
    console.log("You have inputted the following invalid values: " +invalidValuesFound+ ".\n" +
        "You have inputted the following invalid operators: " +invalidOperators+ ".\n" +
        "Operators cannot be consecutive, only the first operator will be kept if consecutive operators are used.\n" + 
        "Operators also cannot be at the beginning or end of an expression. Parentheses, however, can be.")

    
    console.log("The following expression will be calculated: " +values)



    // Checkpoint 3: Delete incomplete parenthesis.
    const checkedValues = []
    j = 0
    let open = 0
    let prevOpenParenthesis = false
    let prevCloseParenthesis = false
    while ( j < values.length ) {
        if (values[j] === ")" && open > 0) {
            checkedValues.push(values[j])
            prevOpenParenthesis = false
            open--
        } else if (values[j] === "(" && prevOpenParenthesis === false) {
            checkedValues.push(values[j])
            prevOpenParenthesis = true
            open++
        } else if (values[j] !== "(" && values[j] !== ")") {
            checkedValues.push(values[j])
            prevOpenParenthesis = false
        }
        j++
    }

    while(open > 0) {
        checkedValues.push(")")
        open--
    }

    j = 1
    while( j < checkedValues.length) {
        if ( checkedValues[j - 1] === "(" && checkedValues[j] === ")" ) {
            checkedValues.splice(j - 1, 2)
            continue
        }
        j++
    }

    

    console.log("Removing unnecessary and incomplete parentheses gives: " +checkedValues)


    // Now I need to push convert these values to postfix notation.
    // Possible operators: +, -, *, /, ^

    const postfix = []

    let i = 0;

    // while ( i < values.length ) {

    // }

    // Checkpoint 3: Convert array to postfix notation 
    // console.log(postfix)

    return
}