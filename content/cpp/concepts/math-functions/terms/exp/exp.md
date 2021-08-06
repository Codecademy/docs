---
Title: "exp()"
Description: "Returns e raised to the power of the argument."
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

`exp()` returns the base-e exponential function of the argument, which is e raised to the power of the argument.

The number e, also known as Euler's number, is a mathematical constant approximately equal to 2.71828 and the base of the natural logarithm.

The `cmath` library must be added to the top of the file with `#include <cmath>`.

## Syntax

Returns eⁿ:

```cpp
std::exp(n)
```

## Example 

Use `exp()` to return the value of e³):

```cpp
double result;

result = std::exp(3);
```

## Codebyte Example

Use `exp()` to return the value of e (e¹):

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
