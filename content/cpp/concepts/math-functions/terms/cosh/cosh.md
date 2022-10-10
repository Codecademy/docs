---
Title: 'cosh()'
Description: 'Returns the hyperbolic cosine of an argument given in radians.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`cosh()`** function returns the hyperbolic cosine of an argument given in radians.

## Syntax

```cpp
std::cosh(n)
```

where `n` is the angle in `radians`
The return type is a `double`, `float`, or `long double`.

If the magnitude of the result is too large to express, the function returns `HUGE_VAL` (positive or negative) and an overflow range error is thrown.

## Mathematic Formula

cosh(x) = (e<sup>x</sup> + e<sup>−x</sup> )/2

## Example 1

This example uses `cosh()` to return the hyperbolic cosine of `0.0` radians:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 0.0;
  double result;

  result = std::cosh(x);

  std::cout << "The hyperbolic cosine of " << x << " radians is " << result << "\n";
  // Output: The hyperbolic cosine of 0 radians is 1
}
```

## Codebyte Example

This example uses `cosh()` to return the hyperbolic cosine of `1.0` radians:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 1.0;
  double result;

  result = std::cosh(x);

  std::cout << "The hyperbolic cosine of " << x << " radians is " << result << "\n";
}
```
