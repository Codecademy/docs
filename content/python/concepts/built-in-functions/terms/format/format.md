---
Title: '.format()'
Description: The format() function in Python is a built-in function that is used to format different types of objects into strings.
Subjects:
  - 'A subject name'
  - 'A second subject name'
  - 'An nth subject name'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Strings'
  - 'built-in-funtions'
CatalogContent:
  - 'learn-git-&-github'
---

The **format()** function returns a string from an input value, formatted to the specified specifications.

## Syntax

format(value, format_specification)

## Example

In the following example, a float is formatted in a variable called "pi," which stores an approximation of the value of pi. The format is done using specifications that denote that the output should be a string that represents the provided float, but only using two decimal places.

```python
pi = 3.14159
formatted = format(pi, '.2f')
print(formatted)
```

Output for above code is:
```shell
3.14
```

## Codebyte Example (if applicable)

The next example uses the **format()** function to convert an integer to a binary and print its string representation.

```python
value = 42
formatted = format(value, 'b')  # Format value as binary
print(formatted)
```

Output for the above code is:
```shell
101010
```
