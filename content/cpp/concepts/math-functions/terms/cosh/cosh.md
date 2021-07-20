---
Title: "cosh()"
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
