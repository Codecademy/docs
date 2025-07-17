---
Title: '.find()'
Description: 'Returns the index of the first occurrence of a substring within a string.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Python'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

Python's **`.find()`** method is a built-in [string](https://www.codecademy.com/resources/docs/python/strings) method that searches for a specified substring within a string and returns the index of the first occurrence. This method provides a simple and efficient way to locate text within strings, making it essential for text processing, data validation, and string manipulation tasks.

## Syntax

```pseudo
string.find(substring, start, end)
```

**Parameters:**

- `substring`: The substring to search for within the main string
- `start` (optional): The starting index from where to begin the search (default is 0)
- `end` (optional): The ending index where the search should stop (default is the length of the string)

**Return value:**

The `.find()` method returns an integer value:

- Returns the index of the first occurrence of the substring if found
- Returns `-1` if the substring is not found in the string

## Example 1: Basic String Search using Python's `.find()`

This example demonstrates the fundamental usage of the `.find()` method to locate a substring within a string:

```py
# Search for a word in a sentence
message = "Python is a powerful programming language"

# Find the index of "powerful"
index = message.find("powerful")
print(f"The word 'powerful' starts at index: {index}")

# Find a substring that doesn't exist
missing_index = message.find("Java")
print(f"The word 'Java' index: {missing_index}")

# Check if a substring exists using find()
if message.find("Python") != -1:
  print("Python is mentioned in the message")
else:
  print("Python is not mentioned in the message")
```

This example results in the following output:

```shell
The word 'powerful' starts at index: 12
The word 'Java' index: -1
Python is mentioned in the message
```

The method successfully finds "powerful" at index 12, returns -1 for the non-existent "Java", and demonstrates how to use `.find()` in conditional statements to check for substring presence.

## Example 2: Email Validation Check using `.find()` method

This example shows how to use `.find()` for practical email validation by checking for the presence of the "@" symbol:

```py
# Email validation using find() method
def validate_email(email):
  # Check if @ symbol exists
  at_index = email.find("@")

  if at_index == -1:
    return False, "Missing @ symbol"

  # Check if @ is not at the beginning or end
  if at_index == 0 or at_index == len(email) - 1:
    return False, "@ symbol cannot be at the beginning or end"

  # Check for domain part (simple check for a dot after @)
  domain_part = email[at_index + 1:]
  if domain_part.find(".") == -1:
    return False, "Missing domain extension"

  return True, "Valid email format"

# Test email validation
emails = ["user@example.com", "invalid-email", "@example.com", "user@com"]

for email in emails:
  is_valid, message = validate_email(email)
  print(f"{email}: {message}")
```

This example results in the following output:

```shell
user@example.com: Valid email format
invalid-email: Missing @ symbol
@example.com: @ symbol cannot be at the beginning or end
user@com: Missing domain extension
```

This demonstrates how `.find()` can be used for input validation by checking the position and presence of specific characters in user-provided data.

## Codebyte Example: Using Python's `.find()` to Log File Analysis

This example illustrates using `.find()` with optional parameters to analyze log entries and extract specific information:

```codebyte/python
# Log file analysis using find() with start and end parameters
log_entries = [
  "2024-01-15 ERROR: Database connection failed",
  "2024-01-15 INFO: User login successful",
  "2024-01-15 WARNING: High memory usage detected",
  "2024-01-15 ERROR: File not found exception"
]

def extract_log_info(log_entry):
  # Find the log level (after the date)
  date_end = log_entry.find(" ", 10)  # Find space after date

  if date_end != -1:
    # Search for log level starting after the date
    level_start = date_end + 1
    colon_index = log_entry.find(":", level_start)

    if colon_index != -1:
      log_level = log_entry[level_start:colon_index]
      message = log_entry[colon_index + 2:]  # Skip ": "
      return log_level, message

  return "UNKNOWN", log_entry

# Process log entries
error_count = 0
for entry in log_entries:
  level, message = extract_log_info(entry)
  print(f"Level: {level}, Message: {message}")

  if level == "ERROR":
    error_count += 1

print(f"\nTotal errors found: {error_count}")
```

This example shows how `.find()` can be combined with string slicing to parse structured text data and extract meaningful information for further processing.

## Frequently Asked Questions

### 1. What's the difference between `.find()` and `.index()` methods?

Both methods locate substrings, but `.find()` returns -1 when the substring is not found, while `.index()` raises a ValueError exception. Use `.find()` when you want to handle missing substrings gracefully.

### 2. Is the `.find()` method case-sensitive?

Yes, `.find()` is case-sensitive. "Python" and "python" are treated as different strings. Use `.lower()` or `.upper()` on both strings for case-insensitive searches.

### 3. How do I find all occurrences of a substring?

Use `.find()` in a loop, updating the start parameter each time to search beyond the previous match, or consider using regular expressions for more complex pattern matching.
