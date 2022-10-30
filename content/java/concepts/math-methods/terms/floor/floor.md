---
Title: 'Floor'
Description: 'Returns the largest integer value that is less than or equal to the argument. When the provided value is either an integer, zero, not a number, or positive or negative infinity.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags: 
  - 'Documentation'
CatalogContent: 
  - 'learn-java/'
  - 'paths/computer-science'
---

The **`Math.floor()`** method included in the `Math` class returns the largest integer value that is less than or equal to the argument.

## Syntax


```pseudo
    Math.floor(x); // or passing values of variables
```

The return value is the same as `num` under the following conditions:

- `num` is already an integer.
- `num` is `NaN`, infinity, or zero (positive or negative).

## Example 1

In the case of double values, `Math.floor()` returns the next integer value below the provided double value. In the case of integers provided, these will return the same value as provided:

```pseudo
    Math.floor(3.9); // returns the integer 3
    Math.floor(1); // returns the integer 1
    Math.floor(0); // returns the integer 0
```

## Example 2

Values that are not a number will return the NaN value. Infinite values will return infinity:

```pseudo
    Math.floor(2.0 % 0); // returns NaN
    Math.floor(Double.POSITIVE_INFINITY); // returns Infinity
```
