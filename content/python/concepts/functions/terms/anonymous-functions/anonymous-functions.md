---
Title: 'Anonymous Functions'
Description: 'Defines a function without a name using the lambda keyword.'
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

The act of defining a function using the `def` keyword binds that function to a name. However, some functions can be defined without giving them a name. Such functions are called "anonymous" and are defined using the [`lambda`](https://www.codecademy.com/resources/docs/python/keywords/lambda) keyword.

```pseudo
lambda <parameter_list> : <function_body>
```

The following two definitions are equivalent.

```py
def add(a, b):
  return a + b


add = lambda a, b: a + b
```

The expression to the right of the assignment operator is called a ["lambda expression"](https://www.codecademy.com/resources/docs/python/keywords/lambda). The Python interpreter takes this expression and defines a function object which can be bound to an identifier (in this case, `add`). There is no difference between binding a function to a name using the assignment operator or by using the `def` keyword.

Parameters are optional when defining an anonymous function. However, a function body must be present, and it must only contain a single return expression.

```py
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

odd_numbers = filter(lambda n : n % 2 == 1, numbers)

print(list(odd_numbers))
# Output: [1, 3, 5, 7, 9]
```

Anonymous functions can also be evaluated immediately after they are defined, similar to an immediately-invoked function expression (IIFE) in JavaScript.

```codebyte/python
print((lambda a, b: a + b)(1986, 33))
```

Anonymous functions are useful when the function can be written in a single line. Otherwise, if the function is more complex, it is recommended to use the `def` keyword.
