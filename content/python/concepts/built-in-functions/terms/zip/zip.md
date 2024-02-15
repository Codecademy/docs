---
Title: 'zip()'
Description: 'Takes multiple iterators as input and returns a single zip object made up of a list of tuples.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Lists'
  - 'Iterators'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

Takes multiple iterators as input and returns a single zip object made up of a list of tuples.

## Syntax

```python
zip(iterator1, iterator2, ...)
```

## Example 1

`zip()` can be used to combine iterators such as lists. Objects will be combined from left to right.

```python
my_pets = ['cat', 'dog', 'bird', 'great white shark']
my_pets_weight_in_pounds = [9, 50, 0.33, 2000]

combined = zip(my_pets, my_pets_weight_in_pounds)

print(list(combined))
# Output: [('cat', 9), ('dog', 50), ('bird', 0.33), ('great white shark', 2000)]
```

## Example 2

Because `zip()` returns an iterator, it is necessary to use the `list()` function, or a similar function like `tuple()` or `set()`, to work with the result:

```codebyte/py
my_languages = ['Python', 'Swift', 'Lisp']
number_of_months = [10, 24, 50]

combined = zip(my_languages, number_of_months)

print("A zip object printed and it's type:")
print(combined)
print(type(combined))

print("\n A zip object mapped to a list and it's type:")

combined = list(combined)

print(combined)
print(type(combined))

print("\n A zip object mapped to a tuple and it's type:")

combined = tuple(combined)

print(combined)
print(type(combined))
```

## Example 3

If one of the iterators passed in as a parameter to `zip()` contains more objects than another, then the extra objects will be ignored:

```python
numbers = [1, 2, 3, 4, 5]
letters = ['a', 'b', 'c']

combined = zip(numbers, letters)

print(list(combined))
# Output: [(1, 'a'), (2, 'b'), (3, 'c')]
```

Notice how `4` and `5` are not included.

## Example 4

You can also unzip a zip object:

```codebyte/py
# Zipping two lists
artists = ["Bosch", "Bruegel", "Bonheur"]
paintings = ["Garden of Earthly Delights", "Parable of the Sower", "The Horse Fair"]

combined = zip(artists, paintings)
combined = list(combined)

print(combined)

# Unzipping a zip object
artists, paintings = zip(*combined)

print("The artists are: ")
print(artists)

print("The paintings are: ")
print(paintings)
```
