---
Title: "exp()"
Description: "Returns e raised to the power of the argument."
Subjects:
  - "Computer Science"
Tags:
  - "Functions"
  - "Arithmetic"
CatalogContent:
  - "learn-c-plus-plus"
  - "paths/computer-science"
---



`exp()` returns the base-_e_ exponential function of the argument, which is _e_ raised to the power of the argument.

The number _e_, also known as Euler's number, is a mathematical constant approximately equal to 2.71828 and the base of the natural logarithm.

The `cmath` library must be added to the top of the file with `#include <cmath>`.

## Syntax

Returns *e*ⁿ:

```cpp
std::exp(n)
```

## Example 

Use `exp()` to return the value of *e*³):

```cpp
double result;

result = std::exp(3);
```

## Codebyte Example

Use `exp()` to return the value of *e* (*e*¹):

```codebyte/cpp
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
