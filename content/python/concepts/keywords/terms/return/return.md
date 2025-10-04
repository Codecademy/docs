---
Title: 'return'
Description: 'Ends a function and sends a value back to the caller.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arguments'
  - 'Functions'
  - 'Parameters'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`return`** keyword in Python is used inside a [function](https://www.codecademy.com/resources/docs/python/functions) to terminate its execution and send a value back to the caller.

## Syntax

```pseudo
def function_name():
  return value
```

The `return` statement is used inside a function defined using the `def` keyword. It must be written in lowercase (`return`). Using incorrect casing like `Return` or `RETURN` will result in a `SyntaxError`.

## Example 1

In this example, the `sum()` function returns the sum of the two input values:

```py
def sum(a, b):
  result = a + b
  return result
print (sum(3, 4))
```

The output of this code is:

```shell
7
```

## Example 2

In this example, the `get_user()` function demonstrates returning multiple values by separating them with commas:

```py
def get_user():
  firstname = "Jane"
  lastname = "Doe"
  age = 30
  return firstname, lastname, age

user_firstname, user_lastname, user_age = get_user()
print(user_firstname)
print(user_lastname)
print(user_age)
```

The output of this code will be:

```shell
Jane
Doe
30
```

## Codebyte Example

The `return` keyword can be used to exit a function early. When used without a value, it implicitly returns `None` (which means no value is returned). The following code is demonstrating the same:

```codebyte/python
# Change the value of num and click run to see how the function output changes.

num = 10

def check_positive(x):
  if x < 0:
    print("Number is negative, stopping early.")
    return  # exit early, returns None implicitly
  print("Number is positive or zero.")
  return x

print("Returned value:", check_positive(num))
```
