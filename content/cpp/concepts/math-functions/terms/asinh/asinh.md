---
Title: 'asinh()'
Description: 'Returns the inverse hyperbolic sine of an angle given in radians.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`asinh()`** function returns the inverse hyperbolic sine of an angle given in radians.

## Syntax

```pseudo
asinh(n)
```

The `n` parameter can be a floating-point value (e.g., a `long` or `double`) or an integral type (e.g., an `int` or `bool`).

## Example

This example uses the `asinh()` function to return the inverse hyperbolic sine of `3.14159`:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 3.14159;
  double result;

  result = std::asinh(x);

  std::cout << result << " radian" << "\n";
}
```

This example results in the following output:

```shell
1.8623 radian
```

## Codebyte Example

This example uses the `asinh()` function to take an argument of `4.55` and return the inverse hyperbolic sine:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 4.55;
  double result;

  result = std::asinh(x);

  std::cout << result << " radian" << "\n";
}
```
