---
Title: 'Lambda Functions'
Description: 'Lambda Functions are simple functions that can be defined in one line.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Lambda'
  - 'FP'
CatalogContent:
  - 'learn-intermediate-python-3'
  - 'paths/computer-science'
---

**Lambda Functions** are one-line functions that can perform simple tasks.

The usage of Lambda Functions is a key element of [fuctional-programming](https://www.codecademy.com/resources/docs/general/programming-paradigms/functional-programming) (FP) where fuctions perform tasks. It is commonly used in the *map*, *reduce*, and *filter* functions

## Creating a Lambda Function

In Python, Lambda Functions are defined using the following syntax: lambda *arguments*: *returns*

```py
lambda x: x+1
```

**Note**: The example above would return x+1


In the function body, conditionals can be applied by adding a *returns something* if *boolean* else *returns some other thing*

```py
lambda x: x/2 if x%2 == 0 else x
```

**Note**: The example above returns half x if x is even and if not it simply returns x.


### Lambda Functions as Variables

A lambda function can be applied to a variable normally

```py
add_54 = lambda x: x+54
five_plus_54 = add_54(5)
```

**Note**: The example above creates a lambda function that adds 54 to a number.