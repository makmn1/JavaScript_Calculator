# JavaScript_Calculator v1.25
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
A link to a working web page of this repository where you can test this calculator can be found here: https://javascript-calculator-b7632.web.app/

## CHANGELOG
**[Version 1.0] 2021, November 5th** 
- Added core calculator components with live typing support.

**[Version 1.1] 2021, November 30th** 
- Added parsing support for multiple negatives.

**[Version 1.2] 2021, November 30th**
- Bug fixes.
- Change file names to match function names. 

**[Version 1.3] 2021, December 6th**
- Lots of bug fixes.
- Lots of code refactoring.
- Added API support for calculations (MathJS) and random quotes on page load.
- Added CSS styling to remove dullness of page.

## FIXED BUGS
**[Version 1.1]**
- Fixed a major bug where false priority was given in postfix conversion. 
This bug occurred in postfixConversion.js when a current operator in the expression string matched or was a higher priority to the operator on 
top of the operator stack. In this case, the operator on the stack was popped off, and the current operator pushed on. 
The problem with this was that the operator may need to push off the next operator as well. The example found was with the operator stack 
containing '-' and '\*', and the current operator being '-'. In this case, the program popped off '\*', and pushed '-', giving a stack of 
'-', '-', which is invalid. The module postfixConversion.js has been updated to only pop and push in separate conditions.
This would cause the loop to run more times, though it should now arrive at the correct postfix string, leading to the correct 
answer for the user. 

**[Version 1.2]**
- Fixed a small bug in specifyMultipliers where before, the valid number list was used. This was not sufficient since numbers larger than 
9 were considered not valid. Instead, the method isNaN() was used to check if an element is a number. This bug led to missing operators 
which affected calculations involving parentheses. 

**[Version 1.3]**
- Fixed many bugs, but one notable bug fixed was negative numbers. Now negative numbers should be assigned appropiately in all cases.
- There is a known bug where negatives adjacent to parentheses can cause incorrect parsing. This will be fixed in a future update.



