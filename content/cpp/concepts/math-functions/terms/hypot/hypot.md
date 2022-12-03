---
Title: 'hypot()'
Description: 'Returns the value of the longest side of a right-angled triangle.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
  - 'Methods'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`hypot()`** function returns the value of the longest side of a right-angled triangle, or the hypotenuse.

## Syntax

```pseudo
hypot(x, y)
```

The hypotenuse is the sum of the squares of the two shorter sides of a right-angled triangle. The `x` and `y` parameters are the floating-point lengths of the other two sides.

For C++ implementations that support floating-point math:

- The `x` and `y` parameters can be used in any order and with either sign (i.e., `hypot(±x, ±y)`, `hypot(±y, ±x)`).
- If `x` or `y` is ±0, the return value is similar to [`fabs()`](https://www.codecademy.com/resources/docs/cpp/math-functions/fabs) called with a non-zero argument.
- If `x` or `y` is ±∞, then +∞ is always returned (even if the other argument is `NaN`).
- Otherwise, `NaN` is returned if `x` or `y` is `NaN`.

## Example

The following example uses the `hypot()` function to find the hypotenuse of a right triangle with `x` and `y` values:

```cpp
#include <cmath>
#include <iostream>
using namespace std;

int main() {
  double x = 9, y = 10, result;
  result = hypot(x, y);

  cout << result << endl;
  return 0;
}
```

This results in the following output:

```shell
13.4536
```

## Codebyte Example

The following example is runnable and returns the square root of the sum of squares of two `long double` values:

```codebyte/cpp
#include <cmath>
#include <iostream>
using namespace std;

int main() {
  long double a, b, result;
  a = 4.525252;
  b = 5.767676;

  result = hypot(a, b);
  cout << result;
  return 0;
}
```
