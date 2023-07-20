---
Title: 'list()'
Description: 'Returns a list from an iterable.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Iterators'
  - 'OOP'
  - 'Loops'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`list()`** function returns a [list](https://www.codecademy.com/resources/docs/python/lists) from an [iterable](https://www.codecademy.com/resources/docs/python/iterators).

## Syntax

```pseudo
list(iterable)
```

The `iterable` parameter can be one of the following:

- A sequence type such as a [string](https://www.codecademy.com/resources/docs/python/strings), [range object](https://www.codecademy.com/resources/docs/python/built-in-functions/range), list, or [`tuple`](https://www.codecademy.com/resources/docs/python/tuples).
- An iterable container such as a list, tuple, [`dictionary`](https://www.codecademy.com/resources/docs/python/dictionaries), or [`set`](https://www.codecademy.com/resources/docs/python/sets).
- An iterable object such as one returned by the [`iter()`](https://www.codecademy.com/resources/docs/python/iterators/iter) function.

If no `iterable` is passed, the `list()` function returns an empty list.

## Example

The example below demonstrates how the `list()` function is used to create a list from a dictionary:

```py
language_difficulties = list({"Python" : "Hard", "Java" : "Medium", "HTML" : "Easy"})
print(language_difficulties)

empty_list = list()
print(empty_list)
```

This will print the following output:

```shell
['Python', 'Java', 'HTML']
[]
```

### Codebyte Example

The following examples shows three different cases of using the `list()` function:

```codebyte/python
animals_tuple = ("cat", "dog", "hamster")
print(f"Tuple example with list(): {list(animals_tuple)}")

print("------------------------------------")

animal_string = "crocodile"
print(f"String example with list(): {list(animal_string)}")

print("------------------------------------")

my_range = range(1, 4)
print(f"Range example with list(): {list(my_range)}")
```
