---
Title: '.update()'
Description: 'Updates the current set, by adding items from another iterable(set, list, tuple or dictionary), removing any duplicates.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Collections'
  - 'Functions'
  - 'Methods'
  - 'Sets'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---
## Syntax

The following syntaxes can be used:

```pseudo
set.update(iterable1, iterable2 ...)

set |= iterable1 | iterable2 ...
```

- The `.update()` method can be called directly against `set` with multiple `iterable` passed as arguments.
- `iterable` can be a `set`, `tuple`, `list` or `dictionary`.
- Optionally,the `|=` can be used as a shortcut of `update()` and the `|` [operator](https://www.codecademy.com/resources/docs/python/operators) can be used between `iterable1`, `iterable2` where it will return the same result as the `.update()` method.

## Example

In the example below, two sets of `set1`, `set2` are created. Then, the `update()` method is called on `set1` with `set2` as the argument:

```py
set1 = {1, 2, 3}
set2 = {3, 4, 5}
set1.update(set2)
print(set1)
```

The output would be the following:

```shell
{1, 2, 3, 4, 5}
```

## Codebyte Example

In this example, when updating a set `set1` with a dictionary `dict1`, only the `keys` of the dictionary are added to the set:

```codebyte/python
set1 = {1, 2, 3}

dict1 ={'a': 3, 'b': 4, 'c': 5}

set1.update(dict1)

print(set1)
```