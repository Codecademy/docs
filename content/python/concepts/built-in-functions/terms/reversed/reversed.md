---
Title: 'reversed()'
Description: 'Takes in an iterable object, such as a list, string, or a tuple and returns a reversed iterator object.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Functions'
  - 'Iterators'
  - 'Lists'
  - 'Tuples'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

The **`reversed()`** function takes in an iterable object, such as a list, string, or a tuple and returns a reversed iterator object.

## Syntax

```pseudo
reversed(iterator)
```

## Example 1

Because the `reversed()` function returns an iterator object, in order to access the content, it is necessary to iterate over the object when printing:

```python
counting = ["one", "two", "three"]

blast_off = reversed(counting)

for num in blast_off:
  print(num, end=" ")

# Output: three two one
```

## Example 2

The example below reverses the elements of a list.

> **Note:** To simply reverse an existing list rather than return an iterator object, Python has a [`list.reverse()`](https://www.codecademy.com/resources/docs/python/lists/reverse) method:

```python
counting = ["one", "two", "three"]

blast_off = reversed(counting)

print(blast_off) # Output: <list_reverseiterator object at 0x7ff4f6a1dfa0>

counting.reverse()

print(counting) # Output: ['three', 'two', 'one']
```

## Example 3

Because strings are also iterable objects, `reversed()` can also be used on strings.

```python
new = reversed("stressed")

for letter in new:
  print(letter, end="")

# Output: desserts
```

## Codebyte Example

Tuples are iterable objects too, hence `reversed()` can be used on tuples as well.

```codebyte/python
# Reversing a tuple using reversed() function

original_tuple = (1, 2, 3, 4, 5)
reversed_tuple = tuple(reversed(original_tuple))

print("Original Tuple:", original_tuple)
print("Reversed Tuple:", reversed_tuple)
```
