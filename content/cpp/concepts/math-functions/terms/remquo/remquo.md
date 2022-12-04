---
Title: 'remquo()'
Description: 'Returns the remainder of two integer values, and stores an integer value with the sign and approximate magnitude of the quotient in a parameter.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
  - 'Methods'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'path/computer-science'
---

The **`remquo()`** function returns the remainder of two integer values, and stores an integer value with the sign and approximate magnitude of the quotient in a parameter..

## Syntax

```pseudo
remquo(numerator, denominator, int* quotient)
```

The [data type](https://www.codecademy.com/resources/docs/cpp/data-types) of the return value will either be a `double`, `float`, or `long double`. Combinations of these types will return a `double`. The parameter `quotient` must always be an `int` pointer.

The remquo function calculates the floating-point remainder `f` of `numerator / denominator` such that `numerator = n * denominator + f*`, where n is an integer, f has the same sign as x, and the absolute value of f is less than the absolute value of y.
