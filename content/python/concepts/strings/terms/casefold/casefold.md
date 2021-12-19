---
Title: .casefold()
Description: 'Takes in a string, and returns a copy of the string with all characters in lower case.'
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

Returns a copy of a string with all characters in lower case. `.casefold()` is similar to `.lower()`, but whereas that method deals purely with ASCII text, `.casefold()` can also convert Unicode characters.

## Syntax

```py
"string".casefold()
```

## Example 1

Use `casefold()` to set all characters in a string to lower case:

```codebyte/python
print("THIS SHOULD ALL BE IN LOWERCASE!".casefold())
```

## Example 2

Use `casefold()` to set all characters in a string to lower case:

```codebyte/python
text = "this Should All Be In Lower Case!"

x = text.casefold()
print(x)
```

## Example 3

Again, `.casefold()` can convert a wider scope of characters than `.lower()` can, including characters unique to human languages. Take the German lowercase letter "ß", for example. While `.lower()` cannot convert it, `.casefold()` can convert it to "ss":

```codebyte/python
text = "Straße"

print(text.casefold())
```
