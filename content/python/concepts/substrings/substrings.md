---
Title: 'Substrings'
Description: 'A substring is a sequence of characters that are part of an original string.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

A substring is a sequence of characters that are part of an original [string](https://www.codecademy.com/resources/docs/python/strings). In Python, substrings can be obtained by using the slicing feature on a string variable. A slice can be made in a specific position within the string or it can be made at the default index.

## Syntax

A slice is made by using the open `[` and closed `]` square brackets next to a string variable. Inside the brackets, the position can be given:

```pseudo
string[start:end:step]
```

- `start` defaults to 0 and gives the initial position the slice will start from.
- `end` defaults to -1 and is the position where the slicing will end.
- `step` defaults to 1 and indicates the number of steps to take in between indexes.

## Examples

The following examples show different ways of obtaining substrings from an original string `name`.

```py
name = "Code Ninja"
```

### Retrieving Single Characters

When only one index is specified, a single character is returned. An index of `0` retrieves the first character of the string:

```py
print(name[0])

# Output: C
```

Negative numbers work on the string backwards. For example, index `-1` retrieves the last character of the string:

```py
print(name[-1])

# Output: a
```

### Negative Start Index

Using a negative start index (`-n`) with the default end value accesses the last `n` characters of the string. The following gives access to the last three characters of the string:

```py
print(name[-3:])

# Output: nja
```

### End Index

To specify only an end index, use `[:n]`, where `n` is the ending position. This will return the first `n` characters.

```py
print(name[:4])

# Output: Code
```

### Negative Step Value

Given a negative step value, returns the results backward:

```py
reversed = name[::-2]
print(reversed)

# Output: anNeo
```

### Keyword `in`

The `in` keyword can be used to check for a specific substring, like in the example below:

```py
print('de' in name)

# Output: True
```

### `.find()` Method

The string method [`.find()`](https://www.codecademy.com/resources/docs/python/strings/find) can also be used to find a subset. It returns the index of the first occurrence of the substring. If the substring is not found, it returns `-1`.

```codebyte/python
name = "Code Ninja"
print(name.find('ni'))
```
