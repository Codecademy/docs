---
Title: 'Yield'
Description: 'Returns an iterator and pauses execution of a generator function.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Interview Prep'
Tags:
  - 'Functions'
  - 'Iterators'
  - 'Python'
CatalogContent:
  - 'learn-intermediate-python-3-iterators-and-generators'
  - 'learn-intermediate-python-3'
---

The **`yield`** keyword is used in a [function](https://www.codecademy.com/resources/docs/python/functions) to make it a [generator function](https://www.codecademy.com/resources/docs/python/generators).
[Generator functions](https://www.codecademy.com/resources/docs/python/generators) return an [iterator](https://www.codecademy.com/resources/docs/python/iterators) that _produces one value per function call_, rather than _all values at once from the function called_.
This is possible because the [function](https://www.codecademy.com/resources/docs/python/functions) _maintains its own state_, and with each call it resumes from the previous state and performs the next call.
This behavior enhances memory efficiency when working with large datasets, avoiding the need to store all values in memory at once. It also allows for better resource management, such as connecting to a database.

## Syntax

```pseudo
def function_name(parameters):
  # ...
  yield value
  # ...
```


## Example

The following example shows how the yield expression is used within a generator function:
```py
def read_huge_file(file_name):
    
  with open(file_name) as file:
    for line in file:
      yield line
```
The code above returns an iterator that contains all the lines of an input file passed as an argument.
On each iteration, `yield` will return a single line read from the file.


## Codebyte Example: Printing a list of words with `return` vs. `yield`

This Codebyte example shows the difference between using `return` and `yield` in a function.

```codebyte/python
# A list of words to print
words: [str] = ["Hello", "yield", "!"]

# A function that uses return, with print statements before and after
def print_list_by_return(element: str):
    print("Before return")
    return element
    print("After return")

# A function that uses yield, with print statements before and after
def print_list_by_yield(element: str):
    print("Before yield")
    yield element
    print("After yield")

# Calling both functions and printing their outputs
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

> **Note:** Because `yield` produces an iterator, we need to loop through the iterator to get the values to print.
> If not, we'll see the generator object memory address printed.

The output of the code above will be:

```
calling print_list_by_return:

Before return
Hello
Before return
yield
Before return
!

####################

calling print_list_by_yield:

Before yield
Hello
After yield
Before yield
yield
After yield
Before yield
!
After yield
```

As we can see from the output above:

* The function with `return` only prints the statement `"Before return"`. The statement `"After return"` is never printed,
  because the function exits after the `return`.
* The function with `yield` prints both statements `"Before yield"` and `"After yield"` for each word in the list.
  This is because the function pauses at the `yield` statement and resumes after it when the next value is requested from the iterator.

