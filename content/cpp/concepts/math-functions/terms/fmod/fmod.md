---
Title: 'fmod()'
Description: 'Returns the floating-point remainder of the division of two values, rounded towards zero.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`fmod()`** function returns the floating-point remainder of the division of two values (rounded towards zero). It is the extension of the [modulo](https://www.codecademy.com/resources/docs/general/modulo) operation to floating-point numbers.

## Syntax

```pseudo
fmod(numerator, denominator)
```

The quotient of the `numerator` divided by the `denominator` is rounded towards zero through truncation. The return type is a `double`, `float`, `long double`, or a combination of these types.

If the `denominator` is equal to zero, then either `0`, `NaN`, or a domain [error](https://www.codecademy.com/resources/docs/cpp/errors) is returned. If a range error occurs, then the correct result is rounded and returned.

> **Note:** The `<cmath>` header provides additional overloads for other combinations of arithmetic types (`double`, `float`, or `long double`). Overloaded functions cast the arguments to a `double` type before the calculation. If one of the arguments is a `long double` type, then both arguments are cast as `long double` types.

## Example

The following example uses `fmod()` to return the floating-point remainder of `x`/`y` as a `double` type:

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
  double x = 7.5, y = 2.1;
  double result = fmod(x, y);
  cout << "Remainder of " << x << "/" << y << " = " << result << endl;

  x = -17.50, y = 2.0;
  result = fmod(x, y);
  cout << "Remainder of " << x << "/" << y << " = " << result << endl;

  return 0;
}
```

This will return the following output:

```shell
Remainder of 7.5/2.1 = 1.2
Remainder of -17.5/2 = -1.5
```

## Codebyte Example

The following example is runnable and returns the floating-point remainder:

```codebyte/cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
  float x = 7.5f, y = 2.1f;
  double result = fmod(x, y);
  cout << "Remainder of " << x << "/" << y << " = " << result << endl;

  x = -17.50f, y = 2.0f;
  result = fmod(x, y);
  cout << "Remainder of " << x << "/" << y << " = " << result << endl;

  return 0;
}
```
