---
Title: 'atanh()'
Description: 'Computes the inverse hyperbolic tangent of a number in radians.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`atanh()`** function returns the inverse hyperbolic tangent of a number in radians.

## Syntax

```pseudo
atanh(x)
```

This function requires an `x` parameter `x` in the range of [-1, 1]. Its [data type](https://www.codecademy.com/resources/docs/cpp/data-types) can be `double`, `float`, or `long double`.

- If the value of `x` is outside of its range, a range error occurs.
- If `x` is `±1`, a pole error occurs.

For C++ implementations that support floating-point math:

- If `x` is `±0`, it is returned unmodified.
- If `x` is `±1`, `±∞` is returned and `FE_DIVBYZERO` is raised.
- If `|x|` > 1, `NaN` is returned and `FE_INVALID` is raised.
- If `x` is `NaN`, `NaN` is returned.

## Example

The following example uses `atanh()` to return the result in radians:

```cpp
#include <iostream>
#include <cmath>

#define PI 3.141592654
using namespace std;

int main() {
  double x = 0.32, result;

  result = atanh(x);
  cout << "atanh(x) = " << result << " radian" << endl;

  // result in degrees
  cout << "atanh(x) = " << result*180/PI << " degree" << endl;

  return 0;
}
```

This example produces the following output:

```shell
atanh(x) = 0.331647 radian
atanh(x) = 19.002 degree
```

## Codebyte Example

The following example is runnable:

```codebyte/cpp
#include <iostream>
#include <cmath>

#define PI 3.141592654
using namespace std;

int main() {
  double x = 0.32, result;

  result = atanh(x);
  cout << "atanh(x) = " << result << " radian" << endl;

  // result in degrees
  cout << "atanh(x) = " << result*180/PI << " degree" << endl;

  return 0;
}
```
