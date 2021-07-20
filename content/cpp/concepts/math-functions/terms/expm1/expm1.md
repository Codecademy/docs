---
Title: "expm1()"
Subjects:
  - "Computer Science"
Tags:
  - "Functions"
  - "Arithmetic"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-c-plus-plus"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

## Definition

Returns e raised to the power of the argument minus 1. For small magnitudes of x `expm1(x)` may be more accurate than `exp(x)-1`

## Syntax

Returns e^n - 1:

```cpp
std::expm1(n)
```

## Example 1

Use `expm1()` to return the value of e-1 (e^1-1):

```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 1;
  double result;

  result = std::expm1(x);

  std::cout << "e^" << x << "-1 = " << result << "\n";
  // Output: e^1-1 = 1.71828
}
```
