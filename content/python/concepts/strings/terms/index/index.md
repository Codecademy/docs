---
Title: '.index()'
Description: 'Searches through a string variable for the occurrence of a pattern or a substring.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The `.index()` string method searches through a string variable for the occurrence of a pattern or a substring.

If the substring is not found, a `ValueError` will be raised.

## Syntax

```python
string.index(pattern, start, end)
```

In the above syntax for the `.index()` method:

- `pattern` (Required): The pattern or substring to search for.
- `start` (Optional): The starting index of `string` to search. The default is 0.
- `end` (Optional): The index of the slice of `string` to search up to, non-inclusive. The default is end of the string.

## Example 1

Use `.index()` method to search for the occurrence of `'Python'` in the string variable `my_string`:

```python
my_string = 'Learning Python is fun!'

index = my_string.index('Python')

print(index)
# Output: 9
```

The starting index of the substring `'Python'` is 9.

## Example 2

Use `.index()` method to search for the occurrence of `'Coding'` in the string variable `my_string`:

```py
my_string = 'Learning Python is fun!'

my_string.index('Coding')
```

There will be an error:

```error
ValueError: substring not found
```

## Codebyte Example

Use `.index()` method to search for the occurrence of `'code'` in a slice of the string variable `my_string` (i.e. from the character at index 8 up to, but not including, the character at index 16):

```codebyte/py
my_string = 'Learning to code is fun!'

index = my_string.index('code', 8, 16)

print(index)
```
