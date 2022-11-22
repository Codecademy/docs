---
Title: 'tanh()'
Description: 'Returns the hyperbolic tangent of an angle given in radians.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`Math.tanh()`** function returns the hyperbolic tangent of an angle given in radians.

## Syntax

```pseudo
std::tanh(angle)
```

The `angle` is measured in radians and the return type is a `double`, `float`, or `long double`.

The mathematical formula used in `tanh()` looks like this:

tanh(x) = (e<sup>x</sup> - e<sup>-x</sup>) / (e<sup>x</sup> + e<sup>-x</sup>)

## Example

The following example demonstrates the application of `.tanh()` function:

```cpp
#include <iostream>
#include <cmath>

int main() {
  // Values in degree
  double value1 = -30.0;
  double value2 = 120.0;
  double value3 = 180.0;

  // Convert degree to radian
  value1 = value1 * 3.1415 / 180;
  value2 = value2 * 3.1415 / 180;
  value3 = value3 * 3.1415 / 180;

  double result1 = std::tanh(value1);
  double result2 = std::tanh(value2);
  double result3 = std::tanh(value3);

  std::cout << "The value of tanh(" << value1 << ") is: " << result1 << "\n";
  std::cout << "The value of tanh(" << value2 << ") is: " << result2 << "\n";
  std::cout << "The value of tanh(" << value3 << ") is: " << result3 << "\n";
}
```

This produces the following output:

```shell
The value of tanh(-0.523583) is: -0.480461
The value of tanh(2.09433) is: 0.97012
The value of tanh(3.1415) is: 0.996271
```

## Codebyte Example

This example uses `tanh()` to return the hyperbolic tangent of `1.0` radians:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double value = 1.0;
  double result = std::tanh(value);

  std::cout << "The value of tanh(" << value << ") is: " << result << "\n";
}
```
