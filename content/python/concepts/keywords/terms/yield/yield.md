---
Title: 'Yield'
Description: 'Turns a function into a generator, producing values one at a time while retaining state between calls.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Iterators'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`yield`** keyword is used in a [function](https://www.codecademy.com/resources/docs/python/functions) to make it a [generator function](https://www.codecademy.com/resources/docs/python/generators). Generator functions return an [iterator](https://www.codecademy.com/resources/docs/python/iterators) that produces one value per call instead of all values at once. To get a value from a generator, call the `next()` function on it. The code within the function is executed up to the `yield` statement. When `yield` is encountered, the current value is returned. The function maintains its state between calls, resuming from where it left off. This enhances memory efficiency for large datasets and allows better resource management, such as processing streams or database results.

## Syntax

```pseudo
def generatorFunction():
  # ...
  yield value
  # ...
```

**Parameters:**

- `value`: The object to be produced by the generator. If omitted, `None` is yielded.

**Return value:**

`yield` returns the next value in a generator sequence to the caller.

## Example

In this example, the generator yields numbers from 1 to 5, producing values one at a time:

```py
# Define a generator function that yields numbers from 1 to 5
def count_up_to_five():
  for i in range(1, 6):
    yield i

# Create the generator
gen = count_up_to_five()

# Iterate over the generator to get values
for number in gen:
  print(number)
```

The output of this code is:

```
1
2
3
4
5
```

> **Note:** `for` loop implicitly calls `next()` method on the generator `gen`.

In this code:

- `count_up_to_five` is defined as a generator function.
- `count_up_to_five()` is called and it returns a generator object without executing the function body.
- `for` loop calls `next()` on `gen`, which starts executing `count_up_to_five`.
- `count_up_to_five` runs until it hits the `yield` statement, returning the current value of `i`.
- `for` loop calls `next()` again, `count_up_to_five` function resumes right after the `yield` statement.

## Codebyte Example: Printing a list of words with `return` vs. `yield`

This Codebyte example shows the difference between using `return` and `yield` in a function:

```codebyte/python
# A list of words to print
words: list[str] = ["Hello", "yield", "!"]

# Function using return
def print_list_by_return(element: str):
  print("Before return")
  return element
  print("After return")  # never executes

# Function using yield
def print_list_by_yield(element: str):
  print("Before yield")
  yield element
  print("After yield")  # executes when generator resumes

# Calling functions
print("calling print_list_by_return:\n")
for word in words:
  print(print_list_by_return(word))

print(f"\n{'#'*20}\n")

print("calling print_list_by_yield:\n")
for word in words:
  yield_obj = print_list_by_yield(word)
  for value in yield_obj:
    print(value)
```

> **Note:** Because `yield` produces an iterator, we need to loop through the iterator to get the values to print. If not, we'll see the generator object memory address printed.

In this code:

- The `print_list_by_return` function prints only `"Before return"` because it exits immediately.
- The `print_list_by_yield` function prints `"Before yield"` and `"After yield"` for each item, pausing at `yield` and resuming when iterated.
