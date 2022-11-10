---
Title: 'trunc()'
Description: 'Returns the integral part of the argument.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`trunc()`** function rounds the specified argument towards zero and returns the nearest integral value not larger in magnitude than the argument.

## Syntax

```pseudo
std::trunc(x);
```

The `x` parameter is the value to be truncated.

The [data type](https://www.codecademy.com/resources/docs/cpp/data-types) of the return value can be `double`, `float`, or `long double`.

## Example

```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = -3.14159;
  double result;

  result = std::trunc(x);

  std::cout << "trunc(" << x << ") = " << result << "\n";
}
```

This will produce the following output:

```shell
trunc(-3.14159) = -3
```

## Codebyte Example

The following example uses the `trunc()` function to round `12.3456` towards zero returning the value `12`:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double n = 12.3456;
  double result;

  result = std::trunc(n);

  std::cout << "The result is " << result << "!\n";
}
```
