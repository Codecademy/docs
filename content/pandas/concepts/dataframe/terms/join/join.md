---
Title: 'join()'
Description: 'Combines columns from another DataFrame into the calling DataFrame based on the index or a key column.'
  - 'Code Foundations'
  - 'Computer Science'
Tags: 
  - 'DataFrame'
  - 'Join'
  - 'Pandas'
  - 'Python'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Pandas, **`DataFrame.join()`** combines columns from another DataFrame (or multiple DataFrames) into the calling DataFrame based on the index or a key column. It’s mainly used for merging DataFrames with different sets of columns but shared row indices.

## Syntax

```pseudo
DataFrame.join(other, on=None, how='left', lsuffix='', rsuffix='', sort=False, validate=None)
```

**Parameters:**

- `other`: Objects to join with the caller DataFrame.
- `on`: Column(s) in the caller DataFrame to join on; must match the index in `other` if provided.
- `how`: Type of join to perform — 'left', 'right', 'outer', or 'inner'.
- `lsuffix`: Suffix to add to overlapping column names from the left DataFrame.
- `rsuffix`: Suffix to add to overlapping column names from the right DataFrame.
- `sort`: Sort the result DataFrame by the join keys if True.
- `validate`: Checks if the join is of a specific type ('one_to_one', 'one_to_many', 'many_to_one', 'many_to_many').

**Return value:**

Returns a new DataFrame with columns of both joined DataFrames combined according to the join logic.

## Example

In this example, a list of words is joined into a single string separated by spaces:

```py
words = ['Codecademy', 'is', 'awesome']
result = ' '.join(words)
print(result)
```

This code produces the following output:

```shell
Codecademy is awesome
```

## Codebyte Example

In this example, a list of characters is joined into a single string separated by commas:

```codebyte/python
print(','.join(['a', 'b', 'c']))
```
