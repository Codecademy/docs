---
Title: 'exp2()'
Description: 'Returns the base-2 exponential function, or 2 raised to the power of the given argument.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`exp2()`** function returns the base-2 exponential function of a given number `x`, or 2 raised to the power of `x` (i.e., 2<sup>x</sup>).

## Syntax

```pseudo
exp2(x)
```

The `exp2()` function requires a single `x` parameter that can be positive, negative, or zero. The returned value is in the range of `[0, ∞)`.

- If a range error due to overflow occurs, `HUGE_VAL`, `HUGE_VALF`, or `HUGE_VALL` is returned.
- If a range error occurs due to underflow, the correct result (after rounding) is returned.
- If the argument is ±0, 1 is returned.
- If the argument is -∞, +0 is returned.
- If the argument is +∞, +∞ is returned.
- If the argument is `NaN`, `NaN` is returned.
- The return type for the `exp2()` function is `double`, `float`, or `long double`.

> **Note:** The `<cmath>` header provides additional overloads for other combinations of arithmetic types (`double`, `float`, or `long double`). Overloaded functions cast the arguments to a `double` type before the calculation.

## Example

The following example uses `exp2()` to return `2` raised to the given argument:

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
  double x = -6.19, result;

  result = exp2(x);
  cout << "exp2(x) = " << result << endl;

  return 0;
}
```

This will return the following output:

```shell
exp2(x) = 0.013697
```

## Codebyte Example

The following example is runnable and returns `2` raised to the given argument:

```codebyte/cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
  float x = -6.19f;
  double result;

  result = exp2(x);
  cout << "exp2(x) = " << result << endl;

  return 0;
}
```
