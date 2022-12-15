---
Title: 'acosh()'
Description: 'Returns the arc hyperbolic cosine of the given argument.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`acosh()`** function returns the arc hyperbolic cosine of the given argument.

## Syntax

```pseudo
acosh(n)
```

The `n` parameter can be a floating-point value (e.g., a `long` or `double`) or an integral type (e.g., an `int` or `bool`). `n` is mandatory and must be greater or equal to 1. Values less than 1 will result in a domain error.

## Example

The following example uses the `acosh()` function to return the arc hyperbolic cosine of `1`:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 1;
  double result;
  result = std::acosh(x);
  std::cout << result << " radian" << "\n";
}
```

This results in the following output:

```shell
0 radian
```

## Codebyte Example

The codebyte example below uses the `acosh()` function to take an argument of `1.7` and return the arc hyperbolic cosine:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 1.7;
  double result;
  result = std::acosh(x);
  std::cout << result << " radian" << "\n";
}
```
