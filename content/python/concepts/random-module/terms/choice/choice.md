---
Title: 'random.choice()'
Description: 'Returns a random sample drawn from an iterable argument, such as a list.'
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

The `random.choice()` method returns a random sample drawn from an iterable argument, such as a list.

## Syntax

```py
random.choice(iterable)
```

An `iterable` can be any kind of sequence-oriented variable, including:

- A string of characters (`"Hello, World!"`)
- A range of steps (`range(10)`)
- A list of items (`[0, 1]`)
- A tuple of data (`(0, "one")`)

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

In the example below, `random.choice()` is used to return a random element from the tuple, `to_learn`:

```codebyte/python
import random

to_learn = ("Python",
            "Matplotlib",
            "NumPy",
            "Pandas",
            "Beautiful Soup",
            "SQL")

print(random.choice(to_learn))
```
