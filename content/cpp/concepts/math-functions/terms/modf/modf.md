---
Title: 'modf()'
Description: 'Splits a given number into an integral and a fractional part.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`modf()`** function splits a given number into an integral and a fractional part.

## Syntax

```pseudo
modf(number, integralPart)
```

The `modf()` function takes two parameters:

- `number`, a floating point value (`double`, `float` or `long double`) to split into integral and fractional parts.
- `integralPart`, a [pointer](https://www.codecademy.com/resources/docs/cpp/pointers) to `number` that stores the integral part. It will have the same type and sign as `number`.

The `modf()` function returns the fractional part of `number` with the same sign as `number`.

## Example

This example uses the `modf()` function to return the fractional part of `6.02214`:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double num1 = 6.02214;
  double intPart;
  double fractPart;

  fractPart = modf(num1, &intPart);

  std::cout << num1 << " = " << intPart << " + " << fractPart << "\n";

  return 0;
}
```

This example results in the following output:

```shell
6.02214 = 6 + 0.02214
```

## Codebyte Example

This example uses the `modf()` function to take an argument of `1.602176634` and return its fractional part while also storing the value of the integral part of the argument into `integral`:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 1.602176634;
  double fractional;
  double integral;

  fractional = modf(x, &integral);

  std::cout << "The fractional part of the given number is: " << fractional << "\n" << "The integral part of the given number is: " << integral << "\n";

  return 0;
}
```
