---
Title: random.choice()
Description: 'Takes in any iterable, and returns an item sampled at random from the iterable.'
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

Takes in any iterable, and returns an item sampled at random from the iterable.

## Syntax

```py
random.choice(iterable)
```

## Example 1

Use `random.choice()` to return an item sampled at random from the list `shopping_list`:

```py
import random
shopping_list = ["bread","pens","apples","milk"]
to_buy = random.choice(shopping_list)
print(to_buy)
```

## Example 2

Use `random.choice()` to return a random character from `my_string`:

```py
import random
my_string = "Coding!"
print(random.choice(my_string))
```

## Codebyte Example

Use `random.choice()` to return a random element from the tuple `to_learn`:

```codebyte/python
import random
to_learn = ("Python","JavaScript","Go")
print(random.choice(to_learn))
```
