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
Return type is double, float or long double.

If the magnitude of the result is too large in terms of the return type, the function returns HUGE_VAL with the proper sign, and an overflow range error occurs.

## Mathematic Formula:
cosh(x) =  (e <sup>x</sup> + e<sup>−x</sup> )/2

## Example 1

Use `cosh()` to return the hyperbolic cosine of `0.0` radians.


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


## Example 2

Use `cosh()` to return the hyperbolic cosine of `1.0` radians.


```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 1.0;
  double result;

  result = std::cosh(x);

  std::cout << "The hyperbolic cosine of " << x << " radians is " << result << "\n";
  // Output: The hyperbolic cosine of 1.0 radians is 1.54308
}
