---
Title: '.ljust()'
Description: 'Left align the string, using a specified character (space is default) as the fill character'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The `ljust()` method will left align the string, using a specified character (space is default) as the fill character.

## Syntax

The `.ljust()` method is called on a string:

```pseudo
string.ljust(length, character)
```

- `length`: ***Required***. The length of the returned string
- `character`: ***Optional***. A character to fill the missing space (to the right of the string). Default is " " (space).

## Example

Using the letter "O" as the padding character:

```python
txt = "banana"

x = txt.ljust(20, "O")

print(x)
#Output: bananaOOOOOOOOOOOOOO
```
