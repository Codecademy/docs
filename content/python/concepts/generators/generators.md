---
Title: 'Generators'
Description: 'In Python, a generator is a function or expression that will process a given iterable one object at a time, on demand.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Generators'
  - 'OOP'
  - 'Loops'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

In Python, a generator is a function or expression that will process a given iterable one object at a time, on demand. A generator will return a generator object, which can be cast as a list or some other data structure as appropriate.

## Generators

Generators are a convenient means of employing [iterator](https://www.codecademy.com/resources/docs/python/iterators) functionality within the syntax of a function or expression. One of the main advantages of generators is that they evaluate items on demand, which means only one item is in memory at a time in lieu of the entire sequence (as with a list).

### A Generator Function

The following code shows the creation of a generator function. In the function definition, the `yield` statement is used to return or include an item in the final generator object.

```py
def return_evens(lst):
    for l in lst:
        if l % 2 == 0:
            yield l

eggs = [x for x in range(20)]

print(list(return_evens(eggs)))
# Output: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
```

### A Generator Expression

The functionality in the previous example can alternatively be defined as an expression. A generator expression utilizes the same syntax as a list comprehension with parentheses framing the statement instead of square brackets.

```py
eggs = [x for x in range(20)] # a list comprehension

list((x for x in eggs if x % 2 == 0)) # a generator expression
```

## Custom Iteration

A generator object can be incrementally advanced with the `next()` function. When `next()` is called the current item is returned and the state is saved.

```codebyte/python
eggs = [x for x in range(20)]

spam = (x for x in eggs if x % 2 == 0)

print(next(spam))

print(next(spam))
```
