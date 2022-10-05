---
Title: 'sinh()'
Description: 'Returns the hyperbolic sine of an argument given in radians.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

Returns the hyperbolic sine of an argument given in radians.

## Syntax

```cpp
std::sinh(n)
```
## Example 1
Use `sinh()` to return the hyperbolic cosine of `0.0` radians:
```cpp
#include <iostream>
#include <cmath>
int main() {
  double x = 0.0;
  double result;
  result = std::sinh(x);
  std::cout << "The hyperbolic sine of " << x << " radians is " << result << "\n";
  // Output: The hyperbolic sine of 0 radians is 0
}
```