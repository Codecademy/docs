---
Title: ".upper()"
Description: "Takes a string, and returns a copy of that string in which all letters are lowercase. Numbers and symbols are not changed."
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

 

Takes a string, and returns a copy of that string in which all letters are lowercase. Numbers and symbols are not changed.

## Syntax

```python
string.upper()
```

## Example 1

```python
my_string = "shout"

print(my_string)
print(my_string.upper())
```

This would output:

```
shout
SHOUT
```

Notice how the `.upper()` method does not change the string it is used on.

## Example 2

The `.upper()` method can be used to compare strings:

```python
string1 = "Green Tigers"
string2 = "gReEn tIgErs"

if string1 == string2:
  print("These strings are already the same")
elif string1.upper() == string2.upper():
  print("They are the same when you use the .upper() method")
else:
  print("They are NOT the same")
  
# Output: They are the already the same when you use the .upper() method
```

## Example 3

```python
my_string = "amazing!"

if my_string.upper() == "AMAZING!":
  print("Isn't that just " + my_string)
# Output: "Isn't that just amazing!"
```
