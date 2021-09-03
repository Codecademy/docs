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

Returns the hyperbolic cosine of an argument given in radians.

## Syntax

```cpp
std::cosh(n)
```

## Example 1

Use `cosh()` to return the hyperbolic cosine of `0.0` radians:

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
