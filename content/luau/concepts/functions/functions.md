---
Title: 'Functions in Luau'
Description: 'Functions evaluate sets of operations to determine outputs based on given inputs.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Functions'
  - 'Programming Concepts'
  - 'Code Reusability'
CatalogContent:
  - 'learn-lua'
  - 'advanced-luau-programming'
---

**Functions** are one of the fundamental building blocks in programming. They allow you to encapsulate code that performs a specific task into a reusable block. This helps in managing and organizing your code, especially in complex game development projects.

## Declaring Functions in Luau

In Luau, you declare a function using the following syntax:

```pseudo
function functionName(parameter1, parameter2, ...)
  <function body>
  return <return value>
end
```

In the code above, you declare a function using `function functionName(parameter1, parameter2, ...)`, where the parameters are input variables. The `function body` contains the code to execute, and the `return <return value>` statement outputs a result. The function ends with `end`, encapsulating its operations.

### Function Declaration Example

```lua
function greet(name)
  return "Hello, " .. name
end

print(greet("Alex"))  -- Output: Hello, Alex
```

## Parameters and Return Statement

Parameters are variables that act as placeholders for the values passed to the function. The `return` statement is used to specify the output of the function.

### Using Parameters and Return Statement

```lua
function addNumbers(num1, num2)
  return num1 + num2
end

print(addNumbers(5, 7))  -- Output: 12
```

## Functions in Use

Functions can be used for various purposes, from performing calculations to manipulating strings and more.

### Example: Calculating Area

```lua
function calculateArea(length, width)
  return length * width
end

local area = calculateArea(10, 5)
print("The area is:", area)  -- Output: The area is: 50