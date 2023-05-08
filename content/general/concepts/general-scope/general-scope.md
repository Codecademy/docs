---
Title: 'General Scope'
Description: 'Visibility and accessibility of variables, functions, and objects within a particular part of a program.'
Subjects: 
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Accessibility'
  - 'Variables'
  - 'Visibility'
CatalogContent:
  - 'paths/computer-science'
---


**Scope** in programming refers to the visibility and accessibility of variables, functions, and objects within a particular part of a program. It defines where these entities can be accessed and how long their values persist during program execution. Understanding scope is crucial for writing maintainable and bug-free code, as it helps organize and manage variables, prevents naming conflicts, and ensures proper memory management.

## Example
To illustrate the concept of scope, consider the following pseudocode snippet, which demonstrates various types of scope using common programming structures:

```js
function main()
    set globalVariable = 10

    if true:
        set blockVariable = 20
        
        for i = 1 to 3:
            set loopVariable = i
            display loopVariable
            
        display blockVariable
        
    display globalVariable
    display blockVariable
    display loopVariable
end function
```
In this pseudocode, we have the following scopes:

1. Global Scope: The 'globalVariable' is declared outside any functions or blocks, making it accessible from anywhere within the program, including all functions and blocks.
2. Block Scope: The 'blockVariable' is declared within the if-statement block. It is only accessible within that block and any nested blocks, such as the for-loop. Trying to access 'blockVariable' outside of its block would result in an error.
3. Loop Scope: The 'loopVariable' is declared within the for-loop block. It has scope limited to that block and is only accessible during each iteration of the loop. Attempting to access 'loopVariable' outside of the loop would result in an error.

The pseudocode snippet demonstrates how variables can have different scopes depending on where they are declared. Understanding scope is essential for correctly accessing variables and avoiding conflicts between different parts of a program.




