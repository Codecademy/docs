---
Title: '.rsplit()'
Description: 'Splits a string into a list of substrings from the right end of the string based on a specified delimiter.'
Subjects:
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Formatting'
  - 'Lists'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

The **`.rsplit()`** method in Python is a string method that splits a string into a list of substrings from the right end of the string based on a specified delimiter. It is similar to the [`.split()`](https://www.codecademy.com/resources/docs/python/strings/split) method but works in the opposite direction.

## Syntax

```pseudo
str.rsplit(separator, maxsplit)
```

- `str`: The string to be split.
- `separator (optional)`: This is the delimiter based on which the string will be split. If not specified, any whitespace (spaces, tabs, and newlines) will be used as the separator.
- `maxsplit (optional)`: This parameter specifies the maximum number of splits. It determines the maximum number of elements in the returned list. If not specified or set to `-1`, there is no limit on the number of splits.

## Example 1

In this example, the `.rsplit()` method is applied to the string `sentence` without specifying a separator. It splits the string from the right based on whitespace, resulting in a list of words.

```py
sentence = "This is a sample sentence."

words = sentence.rsplit()

print(words)
```

This results in the following output:

```shell
['This', 'is', 'a', 'sample', 'sentence.']
```

## Example 2

In this example, the `.rsplit()` method is employed to split the `full_name` string from the right, with a `maxsplit` parameter set to `1`. This effectively separates the last name from the rest of the full name.

```py
full_name = "John Doe Smith"

first_name, last_name = full_name.rsplit(maxsplit=1)

print("First Name:", first_name)
print("Last Name:", last_name)
```

This results in the following output:

```shell
First Name: John Doe
Last Name: Smith
```

## Codebyte Example

The code below is runnable and uses `.rsplit()` to split `csv_data`:

```codebyte/python
csv_data = "apple,orange,banana,grape"

fruits = csv_data.rsplit(',')

print(fruits)
```
