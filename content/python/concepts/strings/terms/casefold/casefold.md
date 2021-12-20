---
Title: .casefold()
Description: 'Takes in a string, and returns a copy of the string with all characters in lowercase.'
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

Returns a copy of a string with all characters in lowercase. `.casefold()` is similar to `.lower()`, but whereas that method deals purely with ASCII text, `.casefold()` can also convert Unicode characters.

## Syntax

```py
"String".casefold() # Output: string
```

## Examples

Below are some examples of `casefold()` being used to set all characters in a string to lowercase:

```py
example1 = "THIS SHOULD ALL BE IN LOWERCASE!"
print(example1.casefold())

example2 = "this Should ALSO Be Entirely In Lowercase!"
print(example2.casefold())
```

The output would be:

```
this should all be in lowercase!
this should also be entirely in lowercase!
```

## Codebyte Example

Again, `.casefold()` can convert a wider scope of characters than `.lower()` can, including characters unique to human languages. Take the German lowercase letter "ß", for example. While `.lower()` cannot convert it, `.casefold()` can convert it to "ss":

```codebyte/python
text = "Straße"

print(text.casefold())
```
