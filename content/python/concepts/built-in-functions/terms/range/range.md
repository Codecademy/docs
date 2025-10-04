---
Title: 'range()'
Description: 'Returns a sequence of numbers based on the given range.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Integers'
  - 'Functions'
  - 'Range'
  - 'Values'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

The `range()` [function](https://www.codecademy.com/resources/docs/python/functions) returns a sequence of numbers based on the given range. This function is commonly used for [looping](https://www.codecademy.com/resources/docs/python/loops) a specific number of times in `for` loops. It doesn’t generate all the numbers at once. Instead, it returns a range object that yields numbers individually, making it memory-efficient.

## Syntax

```pseudo
range(stop)
range(start = 0, stop)
range(start = 0, stop, step = 1)
```

**Parameters:**

- `stop` (Required): Specifies where the range will stop, ending at `stop - 1` due to zero-based indexing.
- `start` (Optional): Specifies where the range will start, defaulting to `0`.
- `step` (Optional): Specifies how many steps are taken between indices, defaulting to `1`.

**Return value:**

The `range()` function returns a range object, yielding numbers one by one.

## Example 1: Using `range()` with `stop`

This example uses the `range()` function with `stop` set to `5`:

```py
nums = range(5)

print(list(nums))
```

In the example, `list(num)` converts the returned range object into a [list](https://www.codecademy.com/resources/docs/python/lists).

The output for the example will be:

```shell
[0, 1, 2, 3, 4]
```

## Example 2: Using `range()` with `start` and `stop`

This example uses the `range()` function with `start` set to `6` and `stop` set to `11`:

```py
nums = range(6, 11)

print(list(nums))
```

The output for the example will be:

```shell
[6, 7, 8, 9, 10]
```

## Codebyte Example: Using `range()` with `start`, `stop`, and `step`

This codebyte example uses the `range()` function with `start` set to `10`, `stop` set to `60`, and `step` set to `10`:

```codebyte/python
nums = range(10, 60, 10)

print(list(nums))
```

## Frequently Asked Questions

### 1. What is the difference between range() and list(range())?

The `range()` function returns a range object, yielding numbers one by one. When you wrap it with `list()`, it creates a list containing all the numbers from the range.

### 2. Can `range()` be used with negative numbers?

Yes, you can use `range()` with negative values for `start`, `stop`, or `step`. This is commonly used for counting backwards.

### 3. What happens if the step parameter is `0`?

If you set `step = 0`, Python will raise a [`ValueError`](https://www.codecademy.com/resources/docs/python/errors) because the step must not be zero - this would create an infinite loop.
