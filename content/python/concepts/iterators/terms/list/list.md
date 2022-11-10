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
Catalog Content:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`list()`** function returns a [list](https://www.codecademy.com/resources/docs/python/lists) from an [iterable](https://www.codecademy.com/resources/docs/python/iterators).

## Syntax

```pseudo
list(iterable[optional])
```

It requires only one argument, an `iterable` (e.g., list, [`tuple`](https://www.codecademy.com/resources/docs/python/tuples), [`dictionary`](https://www.codecademy.com/resources/docs/python/dictionaries), or [`set`](https://www.codecademy.com/resources/docs/python/sets)). 

If an [`iterable`](https://www.codecademy.com/resources/docs/python/iterators) is passed it returns a list of the items in the `iterable`. If no parameters are passed, it returns an empty list.
When passing a [string](https://www.codecademy.com/resources/docs/python/strings) as argument, it returns a list of each letter of the string. When passing a range as argument, it returns a list of each number in the range.

## Example

The example below demonstrates how the `list()` function is used to create a list from a dictionary:

```py
# dictionary
my_dict = list({"Python" : "Hard", "Java" : "Medium", "HTML" : "Easy"})
print(my_dict)

# empty list
my_empty = list()
print(my_empty)
```

This will print the following output:

```shell
['Python', 'Java', 'HTML']
[]
```

### Codebyte Example

The following code examples shows three different cases using `list()` function:

```codebyte/python
#animal tuple
animals = ('cat', 'dog', 'hamster')

print("Tuple example with list() : ")
animals_list = list(animals)

print(animals_list)

print("------------------------------------")
#animal string
animal = ['crocodile']

print("String example with list() : ")
animal_list = list(animal)

print(animal_list)

print("------------------------------------")
#number range
my_range = range(1,4)

print("Range example with list() : ")
my_numbers = list(my_range)

print(my_numbers)
```
