---
Title: '.isnumeric()'
Description: 'Returns True if all characters in a string are numeric characters.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Booleans'
  - 'Methods'
  - 'Strings'
  - 'Validation'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.isnumeric()`** method is a built-in [string](https://www.codecademy.com/resources/docs/python/strings) method in Python that determines whether all characters in a string are numeric characters. This method returns a [Boolean](https://www.codecademy.com/resources/docs/general/data-types/boolean) value indicating if the string consists entirely of numeric characters and is not empty. It is commonly used for input validation, data processing, and string analysis tasks where numeric content verification is required.

The `.isnumeric()` method provides a reliable way to check if a string contains only numeric characters, including digits (0-9), subscripts, superscripts, fractions, and other Unicode numeric characters. It is particularly useful in scenarios such as validating user input, processing CSV data, or filtering numeric content from mixed datasets.

## Syntax

```pseudo
string.isnumeric()
```

**Parameters:**

The `.isnumeric()` method does not take any parameters.

**Return value:**

- Returns `True` if all characters in the string are numeric characters and the string is not empty
- Returns `False` if the string contains any non-numeric characters, is empty, or contains whitespace

## Example 1: Basic Usage

This example demonstrates the fundamental use of the `.isnumeric()` method to check if a string contains only numeric characters:

```py
# Check if string contains only numeric characters
text = "123456"
result = text.isnumeric()
print(result)

# Check with mixed content
mixed_text = "123abc"
mixed_result = mixed_text.isnumeric()
print(mixed_result)

# Check with empty string
empty_text = ""
empty_result = empty_text.isnumeric()
print(empty_result)
```

This example results in the following output:

```shell
True
False
False
```

In the above code, the first string returns `True` because it contains only numeric digits. The second returns `False` because it contains alphabetic characters, and the third returns `False` because empty strings are not considered numeric.

## Example 2: Input Validation

This example shows how to use `.isnumeric()` for validating user input in a real-world scenario where only numeric input is acceptable:

```py
# Simulate user input validation for age
user_inputs = ["25", "thirty", "18", "12.5", "0"]

for user_input in user_inputs:
  if user_input.isnumeric():
    age = int(user_input)
    if age >= 18:
      print(f"Age {age}: Valid adult")
    else:
      print(f"Age {age}: Valid minor")
  else:
    print(f"'{user_input}': Invalid input - not numeric")
```

The output of the above code will be:

```shell
Age 25: Valid adult
'thirty': Invalid input - not numeric
Age 18: Valid adult
'12.5': Invalid input - not numeric
Age 0: Valid minor
```

The above example demonstrates how `.isnumeric()` can be used to filter valid numeric input before converting to integers and performing age validation logic.

## Codebyte Example: Data Processing

This example illustrates using `.isnumeric()` to process and filter numeric data from a mixed dataset, which is common when working with CSV files or user-generated content:

```codebyte/python
# Process mixed data to extract numeric values
data_list = ["100", "hello", "250", "world", "75", "test123", "500"]
numeric_values = []
non_numeric_items = []

for item in data_list:
  if item.isnumeric():
    numeric_values.append(int(item))
  else:
    non_numeric_items.append(item)

print("Numeric values:", numeric_values)
print("Non-numeric items:", non_numeric_items)
print("Sum of numeric values:", sum(numeric_values))
print("Average:", sum(numeric_values) / len(numeric_values))
```

This demonstrates a practical application of `.isnumeric()` for data cleaning and processing, separating numeric data for mathematical operations while identifying non-numeric entries for further handling.

## Frequently Asked Questions

### 1. What's the difference between `.isnumeric()`, `.isdigit()`, and `.isdecimal()`?

`.isnumeric()` accepts the widest range of numeric characters including Unicode numerals, superscripts, and fractions. `.isdigit()` accepts digits and superscripts but not fractions. `.isdecimal()` only accepts standard decimal digits (0-9).

### 2. Does `.isnumeric()` work with negative numbers or decimals?

No, `.isnumeric()` returns `False` for strings containing minus signs (-) or decimal points (.). It only recognizes pure numeric characters without mathematical symbols.

### 3. Why does `.isnumeric()` return `False` for empty strings?

An empty string is not considered to contain numeric characters, so `.isnumeric()` returns `False` following Python's convention that validation methods require actual content to return `True`.
