---
Title: 'range()'
Description: 'Returns a sequence of numbers based on the given range'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Integers'
  - 'Range'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

The `range()` function returns a sequence of numbers based on the given range.

## Syntax

```pseudo
range(stop)
range(start, stop)
range(start = 0, stop, step = 1)
```

- `stop` (required): specifies where the range will stop, ending at `stop - 1` due to zero-indexing.
- `start` (optional): specifies where the range will start, defaulting at 0.
- `step` (optional): specifies how many steps the range will increment be reaching the end, defaulting to 1.

## Example

Here the range is set to stop before 5.

```python
x = range(5)

print(list(x))

# Output: [0,1,2,3,4]
```
```python
y = range(5, 11)

print(list(y))

# Output: [5,6,7,8,9,10]
```

## Codebyte Example

In the example below, the range is set to 10 and increments by 10, stopping before 60:

```codebyte/py
z = range(10, 60, 10)

print(list(z))
```
