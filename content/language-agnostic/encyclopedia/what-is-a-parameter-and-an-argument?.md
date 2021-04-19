<!--
---
Subjects:
  - "What is a parameter and an argument?"
Tags: 
  - "language-agnostic"
  - "functions"
Catalog Content:  # If listing multiple URLs, please put the most relevant one first 
  - "https://www.codecademy.com/courses/introduction-to-javascript/lessons/functions/exercises/parameters"
---
-->

# What is a parameter and an argument?

A parameter is the name of a variable passed into a function. Parameters allow functions to accept inputs. An argument, on the other hand, is the actual value of the variable (aka. the parameter) passed into a function.


## Example with Kotlin

```js
// The parameter is x since it is the variable
function tripleThis(x) {
  return x * 3 
}

// The argument is 6 since it is the actual value
tripleThis(6)
```