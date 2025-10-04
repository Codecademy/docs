---
Title: '.startswith()'
Description: 'Checks whether a string starts with a specified value.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Python'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.startswith()`** method in Python checks whether a string begins with a specified value and returns `True` if it does. Otherwise, it returns `False`. This method is useful in many scenarios, such as parsing data, filtering results, validating input, or processing text files.

## Syntax

```pseudo
string.startswith(value, start, end)
```

**Parameters:**

- `string`: The input string against which to check the given value.
- `value`: A string or [tuple](https://www.codecademy.com/resources/docs/python/tuples) of strings to check for in the input string.
- `start` (Optional): The position in the input string where the search starts.
- `end` (Optional): The position in the input string where the search ends.

**Return Value:**

The `.startswith()` method returns `True` if the input string starts with the given value and `False` if it happens otherwise.

## Example 1: `.startswith()` Without `start` and `end` Parameters

The following example uses the Python `.startswith()` method without the `start` and `end` parameters to check if the input string starts with the given string:

```py
# Create a string
string = "Coding is fun!"

# Check if the input string starts with "Coding"
res = string.startswith("Coding")

# Print the result
print(res)
```

Since `string` starts with "Coding", the above code produces the following output:

```shell
True
```

## Example 2: `.startswith()` with `start` and `end` Parameters

The following example uses `.startswith()` in Python with the `start` and `end` parameters to check if the given range of indices in the input string starts with the given string:

```py
# Create a string
string = "Python is a popular programming language."

# Check if indices 12-24 in the input string starts with "popular"
res = string.startswith("popular", 12, 24)

# Print the result
print(res)
```

Since indices 12-24 in `string` starts with "popular", the above code produces the following output:

```shell
True
```

## Codebyte Example: `.startswith()` with a Tuple of Strings

The following codebyte example uses the Python `.startswith()` method to determine if the input string starts with any of the strings in the given tuple:

```codebyte/python
# Create a string
string = "Codecademy is helpful!"

# Check if the input string starts with "Codecademy", "Google", or "Twitter"
res = string.startswith(("Codecademy", "Google", "Twitter"))

# Print the result
print(res)
```

Since `string` starts with "Codecademy", the output for the above code will be `True`.

## Frequently Asked Questions

### 1. How do `.endswith()` and `.startswith()` differ?

`.startswith()` checks if a given string starts with a specific value, whereas `.endswith()` checks if a given string ends with a specific value.

### 2. Is `.startswith()` case-sensitive?

Yes, `.startswith()` is case-sensitive.

### 3. What happens if the prefix in `.startswith()` is longer than the input string?

If the prefix in `.startswith()` is longer than the input string, the method returns `False`.
