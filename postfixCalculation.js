// This function caluclates a postfix expression and returns the solution
const calculate = (pfxArr) => {
    var pfx = 0
    var exponent = 0
    var base = 0
    while ( pfx < pfxArr.length ) {
        console.log("Postfix Calculation")
        console.log(pfxArr)
        if ( !isNaN(pfxArr[pfx]) ) {
            pfx++
            continue
        }
        else if ( pfxArr[pfx] === '+' ) {
            pfxArr[pfx] = Number(pfxArr[pfx - 2]) + Number(pfxArr[pfx - 1])
        }
        else if ( pfxArr[pfx] === '-' ) {
            if ( pfxArr[pfx - 2] === undefined )
                pfxArr[pfx - 1] *= -1
            else
                pfxArr[pfx] = pfxArr[pfx - 2] - pfxArr[pfx - 1]
        }
        else if ( pfxArr[pfx] === '*' ) {
            pfxArr[pfx] = pfxArr[pfx - 2] * pfxArr[pfx - 1]
        }
        else if ( pfxArr[pfx] === '/' ) {
            pfxArr[pfx] = pfxArr[pfx - 2] / pfxArr[pfx - 1]
        }
        else if ( pfxArr[pfx] === '^' ) {
            base = pfxArr[pfx - 2]
            exponent = pfxArr[pfx - 1]
            while ( exponent > 1 ) {
                pfxArr[pfx - 2] *= base                
                exponent--
            }
            if ( exponent === '0' )
                pfxArr[pfx] = 1
            else
                pfxArr[pfx] = pfxArr[pfx - 2]       
        }
        pfxArr.splice(pfx - 2, 2)
        pfx -= 1
    }

    const solution = pfxArr[0]
    
    return(solution)
}

// module.exports = {
//     calulate : calculate
// }
// Debugging
// console.log(pfxArr)
// console.log(pfx + ' ' + pfxArr[pfx])
// console.log(pfxArr)
// console.log('skip')
// console.log('add')
// console.log('subtract')
// console.log('multiply')
// console.log('divide')
// console.log('exponentiate')