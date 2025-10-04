---
Title: '.split()'
Description: 'Breaks down a string into a list of substrings based on a specified separator.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Characters'
  - 'Formatting'
  - 'Functions'
  - 'Lists'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

The **`.split()`** method breaks down a string into a [list](https://www.codecademy.com/resources/docs/python/lists) of [substrings](https://www.codecademy.com/resources/docs/python/substrings) based on a specified separator. When no separator is specified, `.split()` uses whitespace as the default delimiter, making it ideal for tokenizing text into individual words.

This method is one of the most commonly used in Python for tasks like text tokenization, log parsing, and data cleaning.

## Syntax

```pseudo
str.split(separator, maxsplit)
```

**Parameters:**

- `separator` (optional): Specifies the delimiter to use for splitting the string. If not provided, whitespace characters (spaces, tabs, newlines) are used as separators.
- `maxsplit` (optional): Specifies the maximum number of splits to perform. The default value is `-1`, which means all possible splits are made.

**Return value:**

- Returns a list of substrings.

## Example 1: Using `.split()` with default separator

Let's look at how to use Python's `.split()` method with its default behavior:

```py
text = "Python split method demonstration"

# Using the split function in Python
words = text.split()

print(words)
```

This will generate the following output:

```shell
['Python', 'split', 'method', 'demonstration']
```

In this example, Python's `.split()` function divides the string at each whitespace character, creating a list of individual words.

## Example 2: Python Split Function with Custom Separator and Maxsplit

Here's how to use the split method in Python with custom separators:

```py
# Using split in Python with comma separator
data_string = "apple,orange,banana,grape"

# Python split with comma delimiter
fruit_list = data_string.split(',')
print("Split result with comma:", fruit_list)

# Python .split() with limit parameter
limited_split = data_string.split(',', 2)
print("Split in Python with limit:", limited_split)
```

This example will generate the following output:

```shell
Split result with comma: ['apple', 'orange', 'banana', 'grape']
Split in Python with limit: ['apple', 'orange', 'banana,grape']
```

This demonstrates how the Python split function works with a custom separator and the `maxsplit` parameter to control the splitting behavior.

## Codebyte Example

This example demonstrates how to use Python’s `.split()` method with both default and custom separators:

```codebyte/python
# Create a simple sentence
sentence = "Python is fun and easy to learn"
print("Original sentence:")
print(sentence)
print("-" * 30)

# Step 1: Basic split with default separator (space)
words = sentence.split()
print("Split into words:")
print(words)
print("-" * 30)

# Step 2: Access individual words from the result
print("Individual words:")
print("First word:", words[0])
print("Second word:", words[1])
print("Last word:", words[-1])
print("-" * 30)

# Step 3: Split using a different separator
fruits = "apple,banana,orange,grape"
print("Fruit string:", fruits)

fruit_list = fruits.split(",")
print("Fruits after splitting:")
print(fruit_list)
print("-" * 30)

# Step 4: Count the items after splitting
print(f"The sentence has {len(words)} words")
print(f"The fruit list has {len(fruit_list)} fruits")
```

## Frequently Asked Questions

### 1. What does `.strip()` `.split()` do in Python?

These are two different string methods that are often used together. The [`strip()`](https://www.codecademy.com/resources/docs/python/strings/strip) method removes specified characters (or whitespace by default) from the beginning and end of a string, while the Python `.split()` method divides a string into a list of substrings. When used together like `text.strip().split()`, the string is first trimmed of leading and trailing whitespace, then split into a list.

### 2. What is the difference between `.split()` and slicing in Python?

The `.split()` method in Python divides a string into a list of substrings based on a separator, whereas [slicing](https://www.codecademy.com/resources/docs/python/built-in-functions/slice) extracts a portion of the string based on position indexes. The split function in Python is for breaking apart a string into components, while slicing is for extracting a continuous section of characters.

### 3. Can you split a list in Python?

No, the `.split()` method is specifically a Python string method and cannot be directly used on lists. For lists, you might use methods like `list slicing` (`list[start:end]`), [`list comprehension`](https://www.codecademy.com/resources/docs/python/list-comprehension), or functions like `itertools.islice()` to achieve similar division operations. The Python split functionality is designed for string manipulation only.
