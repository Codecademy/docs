---
Title: .lower()
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

The built-in `.lower()` method takes a string, and returns a copy of that string in which all letters are lowercase. Numbers and symbols are not changed.

## Syntax

```python
string.lower()
```

## Example 1

The `.lower()` method can be used to compare strings:

```python
string_one = "Red Pandas"
string_two = "rEd pAnDaS"
if string_one == string_two:
  print("These strings are the same")
elif string_one.lower() == string_two.lower():
  print("These strings are the same when you use .lower()")
else:
  print("These strings are NOT the same.")
# Output: "These strings are the same when you use .lower()"
```

## Example 2

The `.lower()` method can be used to standardize text that might take different forms, such as user input or the response to an API call:

```python
my_string = input("What is your name?")
# User writes their name
if my_string.lower() == "john": 
  print("Your name is John!")
else:
  print("Your name is not John.")
# Prints "Your name is John!" if the user types "john" or "John".
```

## Example 3

The `.lower()` method does not change the string it is used on:

```python
my_string = "AMAZING!"
if my_string.lower() == "amazing!":
  print("Isn't that just " + my_string)
# Output: "Isn't that just AMAZING!""
```




