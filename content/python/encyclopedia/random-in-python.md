---
Title: "Random in Python" 
Subjects:
  - "Data Science"
  - "Computer Science"
Tags: 
  - "Strings"
  - "Methods"
  - "Lists"
Catalog Content: 
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/data-science"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

Python has a special module called `random` which can be used to randomly generate or modify integers, floats, lists and strings. In order to use the random module first add `import random` to the top of a python file.

For example, the `random()` method will generate a float greater than or equal to 0.0 and less then 1.0.

```codebyte/py
import random

myRandomNumber = random.random()

print(myRandomNumber)
# Output: A random number between 0.0 and 1.0, including 0.0 and excluding 1.0
```

## Generating Random Numbers

The random module can generate random integers rather than floats by using `randint(a,b)`, where `a` and `b` are integers. This generates a number between `a` and `b` inclusive.

```codebyte/py
import random

myRandomNumber = random.randint(1,2)
print(myRandomNumber)
# Output: either 1 or 2

myRandomNumber = random.randint(20,100)
print(myRandomNumber)
# Output: a number between 20 and 100, including 20 and 100
```

Alternatively, to generate a random float between `a` and `b`, use the `uniform(a,b)` method. However, unlike `randint(a,b)`, `uniform(a,b)` is inclusive of `a` but exclusive of `b`:

```codebyte/py
import random

myRandomNumber = random.uniform(1,2)
print(myRandomNumber)
# Output: a number between 1.0 and 2.0, including 1.0 and excluding 2.0 

myRandomNumber = random.uniform(1.5,10.3)
print(myRandomNumber)
# Output: a number between 1.5 and 10.3, including 1.5 and excluding 10.3

```

## Using Random with Lists and Strings

The random module can also be used to modify and interact with lists. For example, to pick a random element from a list, use the `choice()` method. Because strings are also a form of list, the `choice()` method can also be used on strings:

```codebyte/py
import random

myList = ["apples", "bananas", "cherries"]
myFruit = random.choice(myList)
print(myFruit)
# Output: A random fruit from the above list

myLetter = random.choice(myFruit)
print(myLetter)
# Output: A random letter from the fruit chosen above
```

The random module also has the `shuffle()` and `sample(a,b)` methods, both of which randomize all of the elements in a list. `shuffle()` randomizes the list itself and takes no parameters; `sample(a,b)` returns a new list, where `a` is the list to randomize and `b` is the number of list elements to return:

```codebyte/py
import random

myList = [1,2,3,4,5,6,7,8]
random.shuffle(myList)
print(myList)
# Output: myList in a randomized order

myList = [1,2,3,4,5,6,7,8]
random.sample(myList, len(myList))
print(myList)
# Output: myList is unchanged

myList = [1,2,3,4,5,6,7,8]
myList = random.sample(myList, len(myList))
print(myList)
# Output: myList in a randomized order

myList = [1,2,3,4,5,6,7,8]
myList = random.sample(myList, 4)
print(myList)
# Output: four numbers from myList in a randomized order
```

The difference between `shuffle()` and `sample(a,b)` matters when randomizing strings. Because lists are mutable, they can be changed directly with `shuffle()`; however, strings are immutable, so using `shuffle()` on a string will cause an error.

```codebyte/py
import random

myString = "Codecademy"
random.shuffle(myString)
print(myString)
# Output: TypeError: 'str' object does not support item assignment
```

On the other hand `sample(a,b)` returns a new object rather than modifying the original string, so it can be used: 

```codebyte/py
import random

myString = "Codecademy"
myList = random.sample(myString, len(myString))
print(myList)
# Output: A randomized list of the letters in "Codecademy"
```

To make the list returned by `sample(a,b)` a string again, use Python's built in `join()` method:

```codebyte/py
import random

myString = "Codecademy"
myList = random.sample(myString, len(myString))
myString = "".join(myList)
print(myString)
# Output: A randomized string of the letters in "Codecademy"
```
