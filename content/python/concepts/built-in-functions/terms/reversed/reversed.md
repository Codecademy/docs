---
Title: "reversed()"
Description: "Takes in an iterator object, such as a list or string, and returns a reversed iterator object."
Subjects:
  - "Data Science"
  - "Computer Science"
Tags: 
  - "Strings"
  - "Functions"
  - "Iterators"
  - "Lists"
CatalogContent: 
  - "learn-python-3"
  - "paths/analyze-data-with-python"
---

 

Takes in an iterator object, such as a list or string, and returns a reversed iterator object.

## Syntax

```python
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

To simply reverse an existing list rather than return an iterator object, Python has a `list.reverse()` method:

```python
counting = ["one", "two", "three"]

blast_off = reversed(counting)

print(blast_off) # Output: <list_reverseiterator object at 0x7ff4f6a1dfa0>

counting.reverse()

print(counting) # Output: ['three', 'two', 'one']
```

## Example 3

Because strings are also iterator objects, `reversed()` can also be used on strings. 

```python
new = reversed("stressed")

for letter in new:
  print(letter, end="")
  
# Output: desserts
```
