# JavaScript_Calculator
An HTML page taking in a mathematical expression given by the user, and then using JavaScript to calculate the result of that expression.

## Not Finished!
This calculator currently parses the expression given by the user to calculate to a legitimate mathematical expression.

For example:
- If the user puts in consecutive operators, only one of them is kept. 
- If the user adds too many or incomplete parentheticals, they are removed.

As more cases where the user can create an error are recognized, they will be added to the parsing process.

I still need to add the actual calculation process. I plan to convert the expression (once parsed) into postfix. Then I plan to use a stack to perform the calculations.

Another goal of mine is to add error handling to return an error to the user if something went wrong, and an option to report the error by sending an email.

To see the parsed expression, check the Console log in the developer tools section of your browser. I plan to send this information to the user on the webpage soon.
