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

Takes in a string, and returns a copy of the string with all characters in lower case. `casefold()` is similar to `lower()`, but whereas that method deals purely with ASCII text, `casefold()` can convert Unicode characters. Take the German lowercase letter "ß", for example. `lower()` does not convert it, but `casefold()` converts it to "ss".

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

## Codebyte Example

`casefold()` is used to set all characters in a string to lower case:

```codebyte/python
text = "Straße"

print(text.casefold())
```
