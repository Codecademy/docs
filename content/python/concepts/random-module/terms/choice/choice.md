---
Title: '.choice()'
Description: 'Returns a random item chosen from an iterable argument, such as a list or a dictionary.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Random'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The `.choice()` method returns a random item chosen from an `iterable` argument, such as a [list](https://www.codecademy.com/resources/docs/python/lists) or a [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries).

## Syntax

```pseudo
random.choice(iterable)
```

An `iterable` can be any kind of sequence-oriented variable, including:

- A [string](https://www.codecademy.com/resources/docs/python/strings) of characters (`"Hello, World!"`).
- A range of steps (`range(10)`).
- A list of items (`[0, 1]`).
- A [tuple](https://www.codecademy.com/resources/docs/python/tuples) of data values (`(0, "one")`).

## Example 1

In the example below, `.choice()` returns an item sampled at random from a list called `shopping_list`:

```py
import random

shopping_list = ["milk", "eggs", "bread", "apples"]
to_buy = random.choice(shopping_list)

print(to_buy)
```

After `to_buy` is assigned one of the four shopping items with `.choice()`, it is printed.

## Example 2

Since strings are lists of single characters, they can be passed as arguments to the `.choice()` method:

```py
import random

my_string = "Coding!"

print(random.choice(my_string))
```

## Codebyte Example

In the example below, `.choice()` is used to return a random element from the `to_learn` tuple:

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
