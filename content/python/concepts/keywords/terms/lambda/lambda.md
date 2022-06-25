---
Title: 'lambda'
Description: 'Produces an anonymous function expression.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Parameters'
  - 'Arguments'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`lambda`** keyword produces [anonymous function](https://www.codecademy.com/resources/docs/python/functions/anonymous-functions) expressions without using the `def` keyword. Lambda expressions are commonly used for defining single-use functions which are then passed to higher-order functions.

## Syntax

```pseudo
lambda parameter_list : expression
```

A comma-separated `parameter_list` is provided and mapped into the `expression` on the other side of the colon `:`.

## Example

A `lambda` expression can be assigned to a variable like in the example below:

```py
example = lambda base, exponent : base**exponent

print(example(2, 3))
```

## Codebyte Example

Below is another example of using a `lambda` expression:

```codebyte/python
add_five = lambda num : num+5

print(add_five(45))
```
