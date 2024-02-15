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
range(start = 0, stop)
range(start = 0, stop, step = 1)
```

- `stop` (required): specifies where the range will stop, ending at `stop - 1` due to zero-based indexing.
- `start` (optional): specifies where the range will start, defaulting at 0.
- `step` (optional): specifies how many steps are taken between indexes, defaulting to 1.

## Example

Here, two variables are created. One with the range set to stop before 5. The other is set to start at 5 and stop before 11. Both are converted to [lists](https://www.codecademy.com/resources/docs/python/lists) before being printed.

```python
x = range(5)
y = range(5, 11)

print("x: ", list(x))
print("y: ", list(y))
```

The output from the code above would look like this:

```shell
x: [0,1,2,3,4]
y: [5,6,7,8,9,10]
```

## Codebyte Example

In the example below, the range is set to 10 and increments by 10, stopping before 60:

```codebyte/python
z = range(10, 60, 10)

print("z: ", list(z))
```
