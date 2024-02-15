---
Title: '.join()'
Description: 'Concatenates all items from an iterable into a single string.'
Subjects:
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

The `.join()` method is called on a `separator` string:

```pseudo
string.join(iterable)
```

- The `separator` can be any string, even an empty one, and is placed between each element from the `iterable`.
- The `iterable` is any object that can be iterated over like tuples or lists. All values of the `iterable` must be strings.

## Example

The following example returns a string version of the `fruits` list, separated by a single space (`" "`):

```py
fruits = ["Apples", "Bananas", "Blueberries"]

combined = " ".join(fruits)
print(combined)

# Output: Apples Bananas Blueberries
```

## Codebyte Example

Using `.join()` to append elements of a tuple with a dash (`"-"`) as a separator:

```codebyte/python
vehicles = ("bicycle", "car", "moped", "truck")

joined = "-".join(vehicles)
print(joined)
```
