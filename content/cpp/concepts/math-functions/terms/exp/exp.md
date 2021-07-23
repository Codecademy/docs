---
Title: "exp()"
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

Returns the base-e exponential function of the argument, which is e raised to the power of the argument.

## Syntax

Returns eⁿ:

```cpp
std::exp(n)
```

## Example 1

Use `exp()` to return the value of e (e¹):

```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 1;
  double result;

  result = std::exp(x);

  std::cout << "e^" << x << " = " << result << "\n";
  // Output: e^1 = 2.71828
}
```
