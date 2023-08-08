---
Title: .lower()
Description: 'Takes a string, and returns a copy of that string in which all letters are lowercase. Numbers and symbols are not changed.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

Takes a string, and returns a copy of that string in which all letters are lowercase. Numbers and symbols are not changed.

## Syntax

```python
string.lower()
```

## Example 1

The `.lower()` method can be used to compare strings:

```python
string1 = "Red Pandas"
string2 = "rEd pAnDaS"

if string1 == string2:
  print("These strings are already the same")
elif string1.lower() == string2.lower():
  print("They are the same when you use the .lower() method")
else:
  print("They are NOT the same")

# Output: They are the same when you use .lower()
```

## Example 2

The `.lower()` method can be used to standardize text that might take different forms, such as user input or the response to an API call:

```python
name = input("What is your name?")
# User writes their name...

if name.lower() == "codey":
  print("Your name is Codey!")
else:
  print("Your name is not Codey.")
```

This would print `Your name is Codey!` whether the user typed in `Codey`, `codey`, `CODEY`, or `CoDeY`.

## Example 3

The `.lower()` method does not change the string it is used on:

```python
my_string = "AMAZING!"

if my_string.lower() == "amazing!":
  print("Isn't that just " + my_string)

# Output: "Isn't that just AMAZING!""
```

## Codebyte Example

Comparing `my_favorite_color` to `user_favorite_color` using `.lower()`:

```codebyte/python
my_favorite_color = "Blue"
user_favorite_color = input("What is your favorite color? : ")

if my_favorite_color.lower() == user_favorite_color.lower():
    print("We both like the color " + my_favorite_color + "!")
else:
    print("We like different colors.")
```
