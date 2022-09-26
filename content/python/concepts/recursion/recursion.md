---
Title: 'Recursion'
Description: 'Recursion is a technique that allows a function to be broken down and operated on more efficiently.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Parameters'
  - 'Arguments'
  - 'Recursion'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

Functions in Python can call themselves — a concept known as "recursion". Recursion is a technique that allows a function to be broken down and operated on more efficiently.

## Syntax

```pseudo
def recursiveSyntax(parameter_1, parameter_2, ..., parameterN):
  if(base_cases involving parameters):
    return "this data"
  else:
    recursive_call = recursiveSyntax(parameter_1 - 1, parameter_2 - 2, parameterN)
    return recursive_call
```

Recursive functions are commonly structured to operate on their parameters under two scenarios:

- A `recursive_call` to the `recursiveSyntax()` but with smaller values for the parameters.
- One or more `base_cases` that stop the line of recursive calls and return data that can be aggregated back up the `recursive_call` chain.

## Example

In the example below, a recursive call to `sodaCount` is made until the `count` reaches zero, printing a message each time:

```py
def sodaCount(count):
  if(count==0):
    print("All of the soda is gone!")
    return
  else:
    print(f"{count} bottles of soda left on the shelf.")
    return sodaCount(count-1)

print(sodaCount(5))
```

The resulting output will look like this:

```shell
5 bottles of soda left on the shelf.
4 bottles of soda left on the shelf.
3 bottles of soda left on the shelf.
2 bottles of soda left on the shelf.
1 bottles of soda left on the shelf.
All of the soda is gone!
None
```

## Codebyte Example

Consider the Fibonacci sequence, whose first two terms are explicitly defined to be 0 and 1. Each subsequent term is constructed by taking the sum of the previous two terms. Thus, the first six terms of the sequence are 0, 1, 1, 2, 3, and 5.

Defining a function that prints the `n`-th Fibonacci number is most easily achieved using recursion.

```codebyte/python
def fibonacci(n):
  if n <= 1:
    # Base cases
    return n
  else:
    # Sum of the previous two terms
    return fibonacci(n - 2) + fibonacci(n - 1)

for i in range(6):
  print(fibonacci(i))
```

Inside the `else` block of the function definition, two recursive calls to `fibonacci()` (representing the two previous numbers) are added and returned. Once `n` is equal to `0` or `1`, the base case (the `if` block) runs instead.
