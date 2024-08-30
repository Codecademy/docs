---
Title: 'Functions' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Functions are blocks of code that can be repeated multiple times. They are used to perform specific tasks when they are called in a program.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Functions'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-lua'
  - 'paths/computer-science'
---

**Functions** are blocks of code that can be repeated multiple times. They can perform specific tasks when they’re called. A function must be declared in the scope it will be utilized.

## Function Declaration

Functions are declared and called using their names. Function declarations are built using:

1. The `function` keyword.
2. The function’s name in camel case: the first word starts with lowercase, and any following words start with uppercase. For example: iPhone.
3. An optional list of comma-separated parameters, enclosed by `()`.
4. The code to be run by the function.
5. The `end` keyword in the last line of function.

The example code provided below contains a function named `difference()` that takes two values and prints their difference:

```lua
function difference(value1, value2)
 result = value1 - value2
 print(result)
end
```

## Parameters

When a function is declared, inputs can be provided as parameters. Parameters are only assigned a value when the function is called.

```lua
function sum(number1, number2)  -- number1 and number2 are parameters
 result = number1 + number2
 print(result)
end
```

## Calling Functions

Functions can be called by referencing the function’s name followed by parentheses, once functions have been declared. Once called, all the code inside the function will run.

```lua
function product()
 result = 2 * 5
 print(result)
end

product() -- This is calling a function
```

## Arguments

When a function is called, a comma-separated list of values between parentheses are arguments.

```lua
function sum(number1, number2)
 result = number1 + number2
 print(result)
end

sum(30,20)  -- 30 and 20 are arguments
```

## Nil Arguments

When a function is called without passing in enough arguments, the remaining parameters will be assigned the value `nil`.

```lua
function sum(number1, number2)
 result = number1 + number2
 print(result)
end

sum() -- Throws an error because nil values can't be summed
```

## Return Keyword

The output of the function can be specified using the `return` keyword. This returns the value to where the function was called and ends the function.

```lua
function product(number1, number2)
 result = number1 * number2
 return result
end

total = product(2, 4)
print(total) -- Prints: 8
```
