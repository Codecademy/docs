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

**Functions** are one of the fundamental building blocks in programming. They allow the encapsulation of code that performs a specific task into a reusable block. This helps in managing and organizing code, especially in complex game development projects.

## Declaring Functions in Luau

In Luau, a function is declared using the following syntax:

```pseudo
function functionName(parameter1, parameter2, ...)
  <function body>
  return <return value>
end
```

In the code above, a function is declared using the `function` keyword, `functionName` is the name of the function `(parameter1, parameter2, ...)` are input variables. The `function body` contains the code to execute, and the `return <return value>` statement returns the result. The function ends with the `end` keyword, encapsulating its operations.

### Function Declaration Example

The code block below is an example of a simple Lua function. This function, named `greet`, takes one parameter `name` and returns a greeting string that incorporates the provided name. The last line demonstrates how to call the function and print the greeting to the console.

```lua
function greet(name)
  return "Hello, " .. name
end

print(greet("Alex"))  -- Output: Hello, Alex
```

## Parameters and Return Statement

Parameters are variables that act as placeholders for the values passed to the function. The `return` statement is used to specify the output of the function.

```lua
function addNumbers(num1, num2)
  return num1 + num2
end

print(addNumbers(5, 7))  -- Output: 12
```

In the above function, `addNumbers` is the function's name, `num1` and `num2` are its parameters. The function adds these parameters and returns their sum using the `return` keyword. When called with 5 and 7, it returns 12, displayed by the print statement.

## Functions in Use

Functions can be used for various purposes, from performing calculations to manipulating strings and more.

### Example: Calculating Area

The code block below demonstrates a Lua function that calculates the area of a rectangle. The function `calculateArea` accepts two parameters, `length` and `width`, and returns their product, representing the area. The function is then called with specific values, and the result is stored in the variable `area`, which is subsequently printed to the console with a descriptive message.

```lua
function calculateArea(length, width)
  return length * width
end

local area = calculateArea(10, 5)
print("The area is:", area)
```

This example results in the following output:

```shell
The area is: 50
```

### Example: Returning Multiple Values

Luau functions can return multiple values. This feature can be useful when it's necessary to return more than one result from a function.

```lua
function calculateDimensions(area, perimeter)
  local length = perimeter / 4
  local width = area / length
  return length, width  -- Returns both length and width
end

local length, width = calculateDimensions(50, 30)
print("Length:", length, "Width:", width)
```

This example results in the following output:

```shell
Length: 7.5 Width: 6.6666666666667
```

In the example above, `calculateDimensions` takes an `area` and a `perimeter` as arguments and calculates the `length` and `width` of a square. It then returns both values. The caller then receives these multiple return values and can use them as needed.
