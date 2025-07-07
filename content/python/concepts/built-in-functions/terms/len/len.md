---
Title: 'len()'
Description: 'Returns the number of items in an object.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Types'
  - 'Functions'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`len()`** function returns the number of items in an object. It is one of Python's most commonly used built-in functions that calculates the length or size of various data types including [strings](https://www.codecademy.com/resources/docs/python/strings), [lists](https://www.codecademy.com/resources/docs/python/lists), [tuples](https://www.codecademy.com/resources/docs/python/tuples), [dictionaries](https://www.codecademy.com/resources/docs/python/dictionaries), [sets](https://www.codecademy.com/resources/docs/python/sets), and other sequence or collection types.

The `len()` function is essential for determining the size of data structures, validating input lengths, implementing loops and iterations, and performing boundary checks in algorithms. It works with any object that has a defined length, making it a versatile tool for data manipulation and analysis tasks.

## Syntax

```pseudo
len(object)
```

**Parameters:**

- `object`: A sequence (such as a string, list, tuple) or collection (such as a dictionary, set) whose length is to be calculated.

**Return value:**

An integer value indicating the number of items in the object.

## Example 1: Basic Usage

This example demonstrates the fundamental usage of `len()` with different data types:

```py
# String length
greeting = "Hello, World!"
string_length = len(greeting)
print(f"String length: {string_length}")

# List length
fruits = ["apple", "banana", "cherry", "date"]
list_length = len(fruits)
print(f"List length: {list_length}")

# Tuple length
coordinates = (10, 20, 30)
tuple_length = len(coordinates)
print(f"Tuple length: {tuple_length}")

# Dictionary length (counts key-value pairs)
student_grades = {"Alice": 95, "Bob": 87, "Charlie": 92}
dict_length = len(student_grades)
print(f"Dictionary length: {dict_length}")
```

This example results in the following output:

```shell
String length: 13
List length: 4
Tuple length: 3
Dictionary length: 3
```

The `len()` function counts characters in strings, elements in lists and tuples, and key-value pairs in dictionaries. Each data type returns the count of its contained items.

## Example 2: Input Validation

The following example shows how to use `len()` for validating user input in real-world scenarios:

```py
def validate_username(username):
  """Validate username length requirements."""
  min_length = 3
  max_length = 20

  username_length = len(username)

  if username_length < min_length:
    return f"Username too short. Minimum {min_length} characters required."
  elif username_length > max_length:
    return f"Username too long. Maximum {max_length} characters allowed."
  else:
    return "Username length is valid."

# Test the validation function
test_usernames = ["ab", "john_doe", "this_username_is_way_too_long_for_our_system"]

for username in test_usernames:
  result = validate_username(username)
  print(f"Username '{username}' (length: {len(username)}): {result}")
```

This example results in the following output:

```shell
Username 'ab' (length: 2): Username too short. Minimum 3 characters required.
Username 'john_doe' (length: 8): Username length is valid.
Username 'this_username_is_way_too_long_for_our_system' (length: 43): Username too long. Maximum 20 characters allowed.
```

This demonstrates how `len()` is commonly used in form validation, password requirements, and data quality checks in web applications and user interfaces.

## Codebyte Example: Data Processing Pipeline

This example illustrates using `len()` in a data processing scenario to analyze and filter datasets.

```codebyte/python
def analyze_survey_responses(responses):
  """Analyze survey responses and filter by completion rate."""
  total_responses = len(responses)

  # Filter responses by completion (assuming responses with 5+ answers are complete)
  complete_responses = [response for response in responses if len(response) >= 5]
  incomplete_responses = [response for response in responses if len(response) < 5]

  completion_rate = (len(complete_responses) / total_responses) * 100

  print(f"Survey Analysis Report:")
  print(f"Total responses received: {total_responses}")
  print(f"Complete responses: {len(complete_responses)}")
  print(f"Incomplete responses: {len(incomplete_responses)}")
  print(f"Completion rate: {completion_rate:.1f}%")

  return complete_responses

# Sample survey data (each inner list represents answers from one respondent)
survey_data = [
  ["Yes", "No", "Maybe", "Yes", "No"],           # Complete (5 answers)
  ["Yes", "Yes"],                                # Incomplete (2 answers)
  ["No", "Maybe", "Yes", "No", "Yes", "Maybe"],  # Complete (6 answers)
  ["Yes"],                                       # Incomplete (1 answer)
  ["No", "No", "Yes", "Maybe", "No"],            # Complete (5 answers)
  ["Maybe", "Yes", "No"]                         # Incomplete (3 answers)
]

complete_data = analyze_survey_responses(survey_data)
```

This example shows how `len()` is used in data analysis workflows to calculate completion rates, filter datasets, and generate statistical reports commonly found in business intelligence and research applications.

## Frequently Asked Questions

### 1. What is the output of `len([1, 2, 3])`?

The output is `3` because the list contains three elements.

### 2. Can `len()` be used with empty objects?

Yes, `len()` returns `0` for empty objects like empty strings `""`, empty lists `[]`, empty tuples `()`, and empty dictionaries `{}`.

### 3. What happens if I use `len()` on None?

Using `len(None)` raises a `TypeError` because `None` does not have a length. The object must be a sequence or collection type.
