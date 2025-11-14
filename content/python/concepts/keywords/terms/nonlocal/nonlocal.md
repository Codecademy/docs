---
Title: 'nonlocal'
Description: 'Declares a variable inside a nested function that refers to a variable in the nearest enclosing scope (not global).'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Attributes'
  - 'Classes'
  - 'Modules'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`nonlocal`** keyword in Python is used inside nested [functions](https://www.codecademy.com/resources/docs/python/functions) to modify a [variable](https://www.codecademy.com/resources/docs/python/variables) defined in the nearest enclosing scope that is not global. It allows inner functions to change variables that belong to the outer function. Without `nonlocal`, assignments inside a nested function create a new local variable instead of updating the one in the enclosing scope.

This keyword is especially useful when building closures or decorators where state needs to persist across function calls without using global variables.

## Syntax

```pseudo
nonlocal variable_name
```

**Parameters:**

- `variable_name`: The name of a variable defined in the nearest enclosing (non-global) scope.

**Behavior:**

- Declares that the variable belongs to the outer function scope.
- Changes to this variable inside the inner function affect the variable in the enclosing scope.

## Example 1

In this example, nonlocal allows an inner function to modify a variable defined in its outer function:

```py
def outer_function():
  count = 0  # variable in the enclosing scope

  def inner_function():
    nonlocal count  # refers to 'count' in outer_function
    count += 1
    print("Inner count:", count)

  inner_function()
  inner_function()
  print("Outer count after calls:", count)

outer_function()
```

The output of this code is:

```shell
Inner count: 1
Inner count: 2
Outer count after calls: 2
```

Here, `nonlocal` ensures that `count` is updated in the `outer_function` scope rather than creating a new local `count` each time.

## Example 2

In this real-world example, `nonlocal` helps track the number of times a closure is called:

```py
def make_counter():
  total = 0

  def counter():
    nonlocal total
    total += 1
    return total

  return counter

count_calls = make_counter()
print(count_calls())
print(count_calls())
print(count_calls())
```

The outpput of this code:

```shell
1
2
3
```

## Codebyte Example

In this example, a variable in the outer function is updated from within a nested function using the nonlocal keyword:

```py
def outer():
  name = "Alice"

  def change_name():
    nonlocal name
    name = "Bob"
    print("Inside:", name)

  change_name()
  print("Outside:", name)

outer()
```

This ensures the change affects the variable in the enclosing scope rather than creating a new local one.

## Frequently Asked Questions

### 1. What is the nonlocal keyword in Python?

The `nonlocal` keyword lets you modify a variable in the nearest enclosing scope (not the global one) from within a nested function.

### 2. What does non-local mean in Python?

“Non-local” refers to a variable that isn’t local to the current function but isn’t global either—it belongs to an outer function’s scope.

### 3. What is a nonlocal variable?

A nonlocal variable is one that’s defined in an enclosing function and accessed or modified by an inner function using the nonlocal keyword.

### 4. What is the difference between local and nonlocal in Python?

- Local variables exist only within the current function.
- Nonlocal variables refer to variables from the nearest enclosing function, allowing modification of that outer variable.

### 5. Is using nonlocal in Python bad?

Not necessarily. `nonlocal` is safe and useful when used carefully in closures or stateful functions. However, overusing it can make code harder to read—so it’s best applied when managing shared state across nested functions.
