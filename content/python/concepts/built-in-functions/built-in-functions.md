---
Title: 'Built-in Functions'
Description: 'Python includes 68 pre-defined built-in functions and types, which can be used without importing libraries.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Built-in functions** in Python are a set of pre-defined functions that are readily available to use without the need to import any external libraries. These functions provide essential functionality for performing common tasks, such as manipulating data types, handling input/output, and more. Python includes 68 built-in functions, which are categorized and listed alphabetically for easy reference.

## Example Function 1

```python
# Example of len() in a list
states = ["Idaho", "Kansas", "Louisiana"]

# Example of len() in a string
text = "Hello, World!"
```

```shell
print(len(states))  # Output: 3
print(len(text))  # Output: 13

```

## Example Function 2

```python
# Example of reversed() with a list
numbers = [1, 2, 3, 4, 5]
rev_numbers = reversed(numbers)

# Example of reversed() with a string (using join)
text = "Python"
rev_text = ''.join(reversed(text))
```

```shell
print(list(rev_numbers))  # Output: [5, 4, 3, 2, 1]
print(rev_text)  # Output: nohtyP
```
