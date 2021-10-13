---
Title: 'find()'
Description: 'Searches a string for the occurrence of a pattern, or a substring, and returns the starting index of the substring (or -1 if there is no match).'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
  - 'paths/computer-science'
---

'Searches a string for the occurrence of a pattern, or a substring, and returns the starting index of the substring (or -1 if there is no match).'

## Syntax

```py
string.find(pattern,start,end)
```

In the above syntax for the `find()` method:

- `string` is the string to search. (Required)
- `pattern` is the pattern that you are searching for. (Required)
- `start` is the starting index of the slice to search through. (Optional, Default: start of the string - index `0`)
- `end` is the final index of the slice. (Optional, Default: end of the string )

## Example 1

Use `find()` to search for the occurrence of `"Python"` in the string `my_string`:

```py
my_string = "I love Python!"
my_string.find("Python")

# Output: 7
0 #as "Python" occurs at the start of the string
```

## Example 2

Use `find()` method to search for the occurrence of `"JavaScript"` in the string `my_string`:

```py
my_string = "I love Python!"
my_string.find("JavaScript")

# Output: -1
-1 #as "JavaScript" does not occur in the string
```

## Codebyte Example

Use `find()` method to search for the occurrence of `"fun"` in a slice of the string `my_string`, that is `my_string[7:14]`:

```codebyte/py
my_string = "Coding is fun!"
my_string.find("fun",7,14)
```
