---
Title: '.update()'
Description: 'Updates the original set by adding elements from another set.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Collections'
  - 'Elements'
  - 'Methods'
  - 'Sets'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`.update()`** method updates the current set by adding items from another iterable, such as a set, [list](https://www.codecademy.com/resources/docs/python/lists), [tuple](https://www.codecademy.com/resources/docs/python/tuples), or [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries). It also removes any duplicates, ensuring that all the elements in the original set occur only once.

## Syntax

```pseudo
set.update(iterable)
```

Or, the alternative syntax is:

```pseudo
set |= iterable
```

- `set`: The set to which elements are to be added.
- `iterable`: The collection of elements to be added to `set`.

> Note: The `.update()` method in Python allows updating a set directly with multiple iterable objects passed as arguments.

## Example

In the example below, two sets, `set1` and `set2`, are created. The `.update()` method is then called on `set1`, with `set2` as the argument:

```py
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# Using the '.update()' method to update 'set1' with 'set2'
set1.update(set2)
print(set1)

# Using the alternative syntax to update 'set1' with 'set2'
set1 |= set2
print(set1)
```

The output would be the following:

```shell
{1, 2, 3, 4, 5}
{1, 2, 3, 4, 5}
```

## Codebyte Example

In this example, when updating a set `set1` with a dictionary `dict1`, only the keys of the dictionary are added to the set:

```codebyte/python
set1 = {1, 2, 3}

dict1 ={'a': 3, 'b': 4, 'c': 5}

set1.update(dict1)

print(set1)
```
