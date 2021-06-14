---
Title: ".partition()"
Subjects:
  - "Data Science"
  - "Computer Science"
Tags: 
  - "Strings"
  - "Tuples"
  - "Methods"
  - "Functions"
Catalog Content: 
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/analyze-data-with-python"
---
## Definition 

The built-in `.partition()` method searches a string for a given keyword and splits that string into a three part tuple.

## Syntax

```python
string.partition("keyword")
```

## Example 1

The `.partition()` method searches for an exact match of the given keyword:

```codebyte/py
my_string = "Do not go gentle into that good night"
my_tuple = my_string.partition("gentle")
print(my_tuple)
```

## Example 2

If no match is found, `.partition()` will return a tuple with the full string, followed by two empty strings

```codebyte/py
my_string = "Old age should burn and rave at close of day"
my_tuple = my_string.partition("gentle")
print(my_tuple)
```

## Example 3

If there are multiple matches, the first one will be used:

```codebyte/py
my_string = "rage, rage against the dying of the light"
my_tuple = my_string.partition("rage")
print(my_tuple)
```
