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

```pseudo
std::cosh(angle)
```

The `angle` is measured in radians and the return type is a `double`, `float`, or `long double`.

If the magnitude of the result is too large to express, the function returns `HUGE_VAL` (positive or negative) and an overflow range error is thrown.

The mathematical formula used in `cosh()` looks like this:

```tex
cosh(x) = \frac{e^x + e^{-x}}{2}
```

## Example

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
