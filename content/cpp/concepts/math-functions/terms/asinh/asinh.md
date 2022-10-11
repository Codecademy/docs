---
Title: 'asinh'
Description: 'Returns the inverse hyperbolic sine of an argument in radians.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

Returns the inverse hyperbolic sine of an angle given in radians.

## Syntax

```cpp
asinh(n)
```

The `cmath` header file must be included to use this function.

## Example

Use `asinh()` to return the inverse hyperbolic sine of `3.14159`:

```shell
#include <iostream>
#include <cmath>

int main() {
    double x = 3.14159;
    double result;
    result = std::asinh(x);
    std::cout << result << " radian" << "\n";
```

## Codebyte Example

The `asinh()` function takes argument as `4.55` and returns the inverse hyperbolic sine:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
    double x = 4.55;
    double result;
    result = std::asinh(x);
    std::cout << result << " radian" << "\n";
    // OUTPUT: 2.220137 radian
}
```
