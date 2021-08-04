---
Title: "ascii()"
Description: "Receives as input an object containing string data, and returns the object as a printable representation with \x, \u, or \U escapes for non-ASCII characters (accented characters)."
Subjects:
  - "Computer Science"
  - "Data Science"
Tags:
  - "Functions"
  - "Strings"
  - "Lists"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/computer-science"
  - "https://www.codecademy.com/learn/paths/data-science"
---

## Definition

Receives as input an object containing `string` data, and returns the object as a printable representation with `\x`, `\u`, or `\U` escapes for non-ASCII characters (accented characters).

## Syntax

```py
ascii(object)
```

## Example 1

Use `ascii()` to return non-ASCII representation of the string `'marquée'`:

```python
print(ascii('marquée'))

# Output: 'marqu\xe9e'
```

## Example 2

Use `ascii()` to return non-ASCII representation of the list `['marquée', 'résumé', 'jalapeño']`:

```codebyte/python
print(ascii(['marquée', 'résumé', 'jalapeño']))
```
