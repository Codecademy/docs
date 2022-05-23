---
Title: 'Sets'
Description: 'A set is an unordered collection of elements without any duplicates.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Sets'
  - 'Data Types'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

A set is an unordered collection of elements without any duplicates.

Sets are especially useful for performing logical operations like finding the union, intersection, or difference between collections of elements. For example, sets could be used to determine mutual friends on a social networking site.

## Syntax

```pseudo
set_A = set(iterable)

set_B = {element_A, element_B, ..., elementZ}
```

There are several ways to create a set, which include:

- Using the built-in [`set()`](https://www.codecademy.com/resources/docs/python/built-in-functions/set) function and passing in an optional `iterable` parameter.
- Hard-coding a set with dictionary-like syntax (`{}`) where each element is unique.

## Codebyte Example

In the example below, sets are created with lists and the `set()` function. The following observations can be made:

- The first time the `animals` set is created with no parameters and printed, "set()" is printed to the shell.
- When the `dog_breeds` set is created, it has duplicate elements with a `corgi` value that is reduced to one by the time the set is printed.

```codebyte/python
animals = set()
print(animals)

animals = set(['aardvark', 'snail', 'squid'])
oceans = {'Pacific', 'Atlantic', 'Indian', 'Southern', 'Arctic'}
dog_breeds = {'pug', 'golden retriever', 'corgi', 'pug', 'corgi'}

print("Animals:", animals)
print("Oceans:", oceans)
print("Dog Breeds:", dog_breeds)
```
