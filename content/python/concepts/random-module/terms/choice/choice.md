---
Title: random.choice()
Description: 'Takes in any iterable (list, tuple, string etc.) and returns an element sampled at random from the iterable.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Random'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

Takes any Python iterable as the argument, and returns an element sampled at random from the iterable.

## Syntax

```python
random.choice(iterable)
```


## Example 1

Use `random.choice()` to return an element sampled at random from the list `list_1 = ["a","b","c"]`:

```python
import random

print(random.choice(list_1))
```

## Example 2

Use `random.choice()` to return a random character from the string `string_1 = "Coding!"`:

```python
import random

print(random.choice(string_1))
```

## Codebyte Example
Use `random.choice()` to return a random element from the tuple `tuple_1`:

```codebyte/python
import random

tuple_1 = ("Apple, "Mango","Banana")

print(random.choice(tuple_1))
```
