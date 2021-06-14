---
Title: "all()"
Subjects:
  - "Data Science"
  - "Computer Science"
Tags: 
  - "Booleans"
  - "Dictionary"
  - "Sets"
  - "Strings"
  - "Lists"
  - "Tuples"
  - "Iterators"
  - "Functions"
  - "Logic"
Catalog Content: 
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/analyze-data-with-python"
---
## Definition 

The built-in `all()` function returns `True` if every item in an iterable evaluates to `True`, otherwise, it returns `False`.

## Syntax

```python
all(iterable)
```

## Example 1

As long as one element in the iterable is `False`, `all()` will return `False`.

```python
my_list = [True, "hello", 17]
print(all(my_list))
# Output: True

my_list = [False, "hello", 17]
print(all(my_list))
# Output: False
```

## Example 2

If the iterable is empty, `all()` will return `True`. The integer `0` evaluates to `False`; however, all non-zero numbers and strings evaluate to `True`.

```python
my_list = []
print(all(my_list))
# Output: True

my_list = [4, 3, 2, 1, 0]
print(all(my_list))
# Output: False

my_list = [4, 3, 2, 1, "0"]
print(all(my_list))
# Output: True
```

## Example 3

`all()` can be used on any iterable, such as a list, set, string, dictionary, or tuple. 

```python
my_list = [1, 1, 0, True]
print(all(my_list))
# Output: False
# False because the integer 0 is False

my_set = {1, "False", True, 7}
print(all(my_set))
# Output: True
# True because strings and non zero integers are true

my_string = "Python is more fun than Javascript"
print(all(my_string))
# Output: True
# True because strings and non zero integers are true

my_dict = {0:"zero", 1:"one", 2:"two"}
print(all(my_dict))
# Output: False
# False because the first key, 0, is false 

my_tuple = ("Heffalumps", "and", "Woozles")
print(all(my_tuple))
# Output: True
# True because all items in the tuple are true
```

## Example 4

When `all()` is used with a dictionary, it evaluates the keys, not the values. That means, even if a value is `False`, `all()`, will return `True` if all of the keys evaluate to `True`.

```Python
my_dict = {"one": False, "two": 0, "three": "yellow"}
print(all(my_dict))
# Output: True
# True because all keys in the dictionary are true
```






