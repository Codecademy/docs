---
Title: 'expm1()'
Description: 'Returns e raised to the power of the argument minus 1.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`expm1()`** function returns `e` raised to the power of the argument minus 1. For small magnitudes of x `expm1(x)` may be more accurate than `exp(x)-1`.

The number `e`, also known as Euler's number, is a mathematical constant approximately equal to 2.71828 and the base of the natural logarithm.

The `cmath` library must be added to the top of the file with `#include <cmath>`.

## Syntax

Returns *e*ⁿ - 1:

```pseudo
std::expm1(n)
```

## Example

Use `expm1()` to return the value of *e*³-1:

```cpp
double result;

result = std::expm1(3);
```

## Codebyte Example

Use `expm1()` to return the value of _e_-1 (*e*¹-1):

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 1;
  double result;

  result = std::expm1(x);

  std::cout << "e^" << x << "-1 = " << result << "\n";
}
```
