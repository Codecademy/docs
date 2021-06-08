---
Title: ".upper()"
Subjects:
  - "Data Science"
  - "Computer Science"
Tags: 
  - "Strings"
  - "Methods"
  - "Functions"
Catalog Content: 
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/analyze-data-with-python"
---
## Definition 
The built-in `.upper()` method takes a string, and returns a copy of that string in which all letters are lowercase. Numbers and symbols are not changed.

## Syntax
```python
my_string = "Hello, World!"
new_string = my_string.upper()
print(new_string)
# Output: "HELLO, WORLD!"
```

## Example 1

The `.upper()` method can be used to compare strings:

```python
string_one = "Green Tigers"
string_two = "gReEn tIgErs"
if string_one == string_two:
  print("These strings are the same")
elif string_one.upper() == string_two.upper():
  print("These strings are the same when you use .upper()")
else:
  print("These strings are NOT the same.")
# Output: "These strings are the same when you use .upper()"
```

## Example 2

The `.upper()` method does not change the string it is used on:

```codebyte/py
my_string = "shout"
my_string.upper()
print(my_string)
print(my_string.upper())
```

## Example 3

```python
my_string = "amazing!"
if my_string.upper() == "AMAZING!":
  print("Isn't that just " + my_string)
# Output: "Isn't that just amazing!"
```




