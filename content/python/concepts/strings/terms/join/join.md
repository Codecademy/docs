---
Title: '.join()'
Description: 'Concatenates all items from an iterable into a single string.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The `.join()` method concatenates all items from an iterable into a single string.

## Syntax

```pseudo
string.join(iterable)
```

- `string` is the separator `.join()` is called on. The separator is used to separate each element of the iterable. It can be any string including an empty string.
- `iterable` is any object that can be iterated over like tuples, lists, etc. All values of the iterable must be strings.

## Example

The following example returns a string version of the `fruits` list, separated by a single space (`" "`):

```py
fruits = ["Apples", "Bananas", "Blueberries"]

combined = " ".join(fruits)
print(combined)

# Output: Apples Bananas Blueberries
```

## Codebyte Example

Using `.join()` to combine elements of a tuple with a dash (`"-"`) as a separator:

```codebyte/python
vehicles = ("bicycle", "car", "moped", "truck")

joined = "-".join(vehicles)
print(joined)
```
