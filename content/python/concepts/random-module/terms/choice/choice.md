---
Title: 'random.choice()'
Description: The `random.choice()` function returns a random sample drawn from an iterable argument, such as a list.
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

The `random.choice()` function returns a random sample drawn from an iterable argument, such as a list.

## Syntax

```py
random.choice(iterable)
```

## Example 1

In the example below, `random.choice()` returns an item sampled at random from a list called `shopping_list`:

```py
import random
shopping_list = ["bread", "pens", "apples", "milk"]
to_buy = random.choice(shopping_list)
print(to_buy)
```

After `to_buy` is assigned one of the four shopping items with `random.choice()`, it is printed.

## Example 2

Here, `random.choice()` is used to return a single character that is sampled from a `str` variable:

```py
import random

my_string = "Coding!"
print(random.choice(my_string))
```

## Codebyte Example

Use `random.choice()` to return a random element from the tuple `to_learn`:

```codebyte/python
import random

to_learn = ("Python", "JavaScript", "Go")
print(random.choice(to_learn))
```
