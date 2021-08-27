---
Title: ".split()"
Description: "Converts a string to a list. It takes a specified delimiter and a maximum number of items to split as optional parameters. "
Subjects:
  - "Data Science"
  - "Computer Science"
Tags: 
  - "Strings"
  - "Methods"
  - "Functions"
CatalogContent: 
  - "learn-python-3"
  - "paths/analyze-data-with-python"
---
 

Converts a string to a list. It takes a specified delimiter and a maximum number of items to split as optional parameters. 

## Syntax

```python
string.split("delimiter", maximum number of items to split)
```

## Example 1

If the paramaters of `.split()` are left blank, the delimiter will default to whitespace and the maximum number of items to split will be infinite.

```python
my_string = "I like waffles from Belgium"

my_list = my_string.split()

print(my_list)
# Output: ['I', 'like', 'waffles', 'from', 'Belgium']
```

## Delimiter

Whatever is set as the delimiter will be removed:

```python
my_string = "color=red:size=medium:type=shirt"

my_list = my_string.split(":")

print(my_list)
# Output: ['color=red', 'size=medium', 'type=shirt']
```

## Example 3

It is also possible to use escape characters with `.split()`, such as `\t` (tab) and `\n` (newline):

```python
my_string = """
Beets
Bears
Battlestar Galactica
"""

my_list = my_string.split("\n")

print(my_list)
# Output: ['', 'Beets', 'Bears', 'Battlestar Galactica', '']
```

## Example 4

To limit the number of items in the list, set the maximum number of items to split paramater:

```python
menu = "Breakfast|Eggs|Tomatoes|Beans|Waffles"

my_list = menu.split("|", 3)

print(my_list)
# Output: ['Breakfast', 'Eggs', 'Tomatoes', 'Beans|Waffles']
```
