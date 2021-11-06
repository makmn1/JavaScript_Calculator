# JavaScript_Calculator
An HTML page taking in a mathematical expression given by the user, and then using JavaScript, calculates the result of that expression.  
The program does this by checking and parsing the expression into a valid mathematical expression.  
Then, this parsed expression is sent to a function that converts it into [postfix notation](https://web.stonehill.edu/compsci/CS104/Stuff/Infix%20and%20%20postfix%20expressions.pdf), which is then processed by another function to calculate the answer.

## Supports Live Typing
As the user types their expression, the calculator converts it to a valid mathematical expression.  
There is still work to be done on how it converts negatives with parentheticals.

## Calculate multiple times
Every time the calculate button is pressed, an answer is generated. Answers are usually accurate or close.  
Again, negatives and parentheses can make these calculations less accurate due to imperfect order of operations. This will be fixed in a later update.

## Supports 5 Operations
For addition, use the plus symbol: +  
For subtraction, use the subtraction symbol: -  
For multiplication, use the asterisk symbol: *  
For division, use the foward slash symbol: /  
For exponentiation, use the caret symbol: ^  

## Live Testing Ground
A link to a working web page of this repository where you can test this calculator can be found here: https://makmn1.github.io/JavaScript_Calculator/
