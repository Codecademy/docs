---
Title: 'return'
Description: 'Used to send a value to the caller and exiting the function' 
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

The **`return`** keyword in Python is used inside a [function](https://www.codecademy.com/resources/docs/python/functions) to stop its execution and send a value back to the caller.

## Syntax

```py
def function_name():
    return value
```
The code snippet above shows the syntax for defining function in Python. Functions are defined using the `def` keyword, followed by the function name and parentheses.

The `return` keyword is used to return a value and must be written in lowercase. Writing it in any other format (such as `Return` or `RETURN`) will result in a SyntaxError.


## Example

In this example, the `sum()` function returns the sum of the two input values:

```py
def sum(a, b):
    result = a + b
    return result
print (sum(3, 4)) #Output: 7
```

The `get_user()` function demonstrates that you can return multiple values by separating them with commas:
```py
def get_user():
    firstname = "Jane"
    lastname = "Doe"
    age = 30
    return firstname, lastname, age

user_firstname, user_lastname, user_age = get_user()
print(user_firstname)  # Output: Jane
print(user_lastname)  # Output: Doe
print(user_age)   # Output: 30
```

## Codebyte Example

The `return` keyword can be used to exit a function early. When used without a value, it implicitly returns `None` (which means no value is returned):

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
---