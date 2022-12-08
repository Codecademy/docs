---
Title: '.count()'
Description: 'Returns the number of occurrences of a specific value in a tuple.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Collections'
  - 'Tuples'
  - 'Data Structures'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.count()`** method returns the number of occurrences of a specific value in a tuple.

## Syntax

```pseudo
tuple_instance.count(value)
```

The `value` parameter is required. If the `value` does not exist in the `tuple_instance`, `0` is returned. The `.count()` method is type-sensitive (e.g., string representations of numbers and actual numbers are not counted in the returned total).

## Example

The following example showcases the `.count()` method:

```py
my_tuple = (2, 4, "6", "2", 8, "8", "2")

print(my_tuple.count(2))
# Output: 1
```

Since the `.count()` method is type-sensitive, the snippet above returned `1` (for one occurrence of the number `2`, excluding the string representation of `"2"`).

## Codebyte Example

In the following example, the `.count()` method returns `0` because the value being counted doesn't exist in `my_tuple`:

```codebyte/python
my_tuple = (2, 4, "6", "2", 8, "8", "2")

print(my_tuple.count("Hello World"))
```
