---
Title: "Random Module" 
Subjects:
  - "Data Science"
  - "Computer Science"
Tags: 
  - "Random"
  - "Integers"
  - "Strings"
  - "Methods"
  - "Lists"
CatalogContent: 
  - "learn-python-3"
  - "paths/data-science"
  - "paths/computer-science"
---

Python has a special module called [random](https://docs.python.org/3/library/random.html) that can be used to randomly generate or modify integers, floats, lists, and strings. In order to use the `random` module, import it at the top of a Python file:

```py
import random
```

For example, the `.random()` method will generate a float greater than or equal to 0.0 and less then 1.0.

```codebyte/py
import random

my_number = random.random()

print(my_number)
```

The result should be different every time `.random()` is called. It should be a random number between 0.0 and 1.0, including 0.0 and excluding 1.0.

## Generating Random Numbers

The random module can generate random integers rather than floats by using `.randint(a, b)`, where `a` and `b` are integers. This generates a number between `a` and `b` inclusive.

```codebyte/py
import random

dice_roll = random.randint(1, 6)

print(dice_roll)
# Output: Either 1, 2, 3, 4, 5, or 6
```

Alternatively, to generate a random float between `a` and `b`, use the `.uniform(a, b)` method. However, unlike `.randint(a, b)`, `.uniform(a, b)` is inclusive of `a` but exclusive of `b`:

```codebyte/py
import random

my_number = random.uniform(1, 2)

print(my_number)
# Output: A number between 1.0 and 2.0, including 1.0 and excluding 2.0 

my_number = random.uniform(1.5, 10.3)

print(my_number)
# Output: A number between 1.5 and 10.3, including 1.5 and excluding 10.3
```

## Using Random with Lists and Strings

The random module can also be used to modify and interact with lists. For example, to pick a random element from a list, use the `.choice()` method. Because strings are also a form of list, the `.choice()` method can also be used on strings:

```codebyte/py
import random

my_list = ["apples", "bananas", "cherries"]
my_fruit = random.choice(my_list)

print(my_fruit)
# Output: A random fruit from the above list

my_letter = random.choice(my_fruit)

print(my_letter)
# Output: A random letter from the fruit chosen above
```

The random module also has the `.shuffle()` and `.sample(a, b)` methods, both of which randomize all of the elements in a list. `.shuffle()` randomizes the list itself and takes no parameters; `.sample(a, b)` returns a new list, where `a` is the list to randomize and `b` is the number of list elements to return:

```codebyte/py
import random

my_list = [1, 2, 3, 4, 5, 6, 7, 8]
random.shuffle(my_list)

print(my_list)
# Output: my_list in a randomized order

my_list = [1, 2, 3, 4, 5, 6, 7, 8]
random.sample(my_list, len(my_list))

print(my_list)
# Output: my_list is unchanged

my_list = [1, 2, 3, 4, 5, 6, 7, 8]
my_list = random.sample(my_list, len(my_list))

print(my_list)
# Output: my_list in a randomized order

my_list = [1, 2, 3, 4, 5, 6, 7, 8]
my_list = random.sample(my_list, 4)

print(my_list)
# Output: Four numbers from my_list in a randomized order
```

The difference between `.shuffle()` and `.sample(a, b)` matters when randomizing strings. Because lists are mutable, they can be changed directly with `.shuffle()`; however, strings are immutable, so using `.shuffle()` on a string will cause an error.

```codebyte/py
import random

my_string = "Codecademy"
random.shuffle(my_string)

print(my_string)
# Output: TypeError: 'str' object does not support item assignment
```

On the other hand `.sample(a, b)` returns a new object rather than modifying the original string, so it can be used: 

```codebyte/py
import random

my_string = "Codecademy"
my_list = random.sample(my_string, len(my_string))

print(my_list)
# Output: A randomized list of the letters in "Codecademy"
```

To make the list returned by `.sample(a, b)` a string again, use Python's built in `.join()` method:

```codebyte/py
import random

my_string = "Codecademy"
my_list = random.sample(my_string, len(my_string))
my_string = "".join(my_list)

print(my_string)
# Output: A randomized string of the letters in "Codecademy"
```
