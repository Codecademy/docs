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

A substring is a sequence of characters that are part of an original string. In Python, substrings can be obtained by using the slicing feature on a [string](https://www.codecademy.com/resources/docs/python/strings) variable. A slice can be made in a specific position within the string or it can be made at the default index.

## Syntax

A slice is made by using the open `[` and closed `]` brackets on a string variable. Inside the brackets, the position can be given.

```psuedo
string[start:end:step]
```

- `start` gives the initial position the slice will start from (default: 0)
- `end` is the position where the slicing will end (default: -1)
- `step` indicates the number of steps to take in between indexes (default: 1)

## Examples

The following examples are different ways to obtain subsets of a string. All examples are performed on the same string,

```python
string = "Codecademy"
```

### Retrieving Single Characters

When only one index is specified, a single character is returned. An index of `0` retrieves the character at the beginning of the string:

```python
print(string[0])

#Output: C
```

Negative numbers work on the string backwards. For example, index `-1` retrieves the character at the end of the string:

```python
print(string[-1])

#Output: y
```

### Negative Start Index

Using a negative start index (`-n`) with the default end value gives the last `n` characters of the string. The following gives the last three characters of the string:

```python
print(string[-3:])

#Output: emy
```

### End Index

To specify only an end index, use `[:n]`, where `n` is the ending position. This will return the first `n` characters.

```python
print(string[:4])

#Output: Code
```

### Negative Step Value

Given a negative step value, returns the results backward:

```python
reversed = string[::-2]
print(reversed)

#Output: yeaeo
```

### Keyword `in`

The `in` keyword checks for a specific value in a sequence. The following checks for `de` in `string`:

```python
print('de' in string)

#Output: True
```

### `.find()` Method

The string method [`.find()`](https://www.codecademy.com/resources/docs/python/strings/find) can also be used to find a subset. It returns the index of the first occurrence of the substring. If the substring is not found, it returns -1.

```python
print(string.find('em'))

#Output: 7
```
