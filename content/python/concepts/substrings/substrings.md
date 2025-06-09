---
Title: 'Substrings'
Description: 'A substring in Python is a contiguous sequence of characters extracted from an original string.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Characters'
  - 'Methods'
  - 'Strings'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

A Python **substring** is a sequence of characters that are part of an original [string](https://www.codecademy.com/resources/docs/python/strings). In Python, substrings can be obtained by using the slicing feature on a string [variable](https://www.codecademy.com/resources/docs/python/variables). A slice can be made in a specific position within the string, or it can be made at the default index.

## Syntax

A slice is made by using the open `[` and closed `]` square brackets next to a string variable. Inside the brackets, the position can be given:

```pseudo
string[start:end:step]
```

- `start`: Defaults to `0` and gives the initial position the slice will start from.
- `end`: Defaults to the length of the string and marks the position where the slice stops (not inclusive).
- `step`: Defaults to `1` and indicates the number of steps to take in between indexes.

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

Using a negative start index (`-n`) with the default end value accesses the last `n` characters of the string. The following returns the last three characters of the string:

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

## Best practices for using substrings in Python

- **Use slicing for efficiency:** String slicing is optimized in Python and should be preferred over loops for extracting substrings.
- **Utilize `in` for membership checks:** The `in` operator is the most efficient way to check if a substring exists within a string.
- **Normalize case before comparisons:** Convert strings to lowercase or uppercase to avoid case-sensitive mismatches.
- **Handle missing substrings gracefully:** Use `.find()` instead of [`.index()`](https://www.codecademy.com/resources/docs/python/strings/index) when searching for substrings to avoid exceptions.

## Frequently Asked Questions

### 1. What happens if the end index is beyond the string length in slicing?

If the end index exceeds the string length, Python does not raise an error. It simply returns the available portion of the string.

### 2. How can I check if a substring exists within a string?

You can use the `in` operator or the `.find()` method. The `in` operator returns `True` or `False`, while `.find()` returns the starting index of the substring or `-1` if not found.

### 3. Why should I use `.find()` instead of `.index()`?

The `.find()` method returns `-1` if the substring is not found, whereas `.index()` raises an exception. If you don’t want to handle exceptions manually, `.find()` is a safer choice.

### 4. <summary>4. Can I use negative indexes for substring extraction?

Yes, Python allows negative indexing, which counts from the end of the string. You can use negative values for both the start and end positions when slicing.
