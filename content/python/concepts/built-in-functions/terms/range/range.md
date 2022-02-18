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

Returns a sequence of numbers based on the given range.

## Syntax

```python
range(stop)
range(start, stop)
range(start, stop, step)
```

- `stop` (required) specifies where to stop. Range ends at `stop - 1`.
- `start` (optional) specifies where to start. Default is 0.
- `step` (optional) specifies incrementation. Default is 1.

## Example 1

Here the range is set to `stop` before 5. 

```python
x = range(5)

print(list(x))

# Output: [0,1,2,3,4]
```

## Example 2

Here the range is set to `start` at 5 and `stop` before 11.

```python
y = range(5, 11)

print(list(y))

# Output: [5,6,7,8,9,10]
```

## Example 3

Here the range is set to `start` at 10, `stop` before 60, and  `step` or increment by 10. 

`range(start, stop, step)`

```codebyte/py
z = range(10, 60, 10)

print(list(z))
```
