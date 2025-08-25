---
Title: join.md
Description: The `join()` method in Python is used to concatenate elements of an iterable (such as a list or tuple) into a single string, with a specified separator.

Subjects:
  - Computer Science

Tags: 
  - Github
  - Pandas
  - Python

CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
---

**join** is a method used to combine the elements of an iterable (such as a list or tuple) into a single string, using a specified separator.

## Syntax

```python
'separator'.join(iterable)


## Example

words = ['Codecademy', 'is', 'awesome']
result = ' '.join(words)
print(result)

Output: Codecademy is awesome

## Codebyte Example (if applicable)

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
## Codebyte

```python
print(','.join(['a', 'b', 'c']))
# Output: a,b,c

