---
Title: 'isgreaterequal()'
Description: 'Determines if the floating-point number `x` is greater than or equal to the floating-point number `y`, without setting floating-point exceptions.'
Subjects:

Tags:
  - 'Functions'
  - 'Comparison'
  - 'Math'
CatalogContent:
  - 'learn-c-plus-plus'
---

The **`isgreaterequal()`** [function](https://www.codecademy.com/resources/docs/cpp/functions) compares two floating-point values and returns `true` only when the first is greater than or equal to the second. Never raises floating-point exceptions, and always returns `false` if one or both arguments is `NaN`. The function is available through the `<cmath>` header.

## Syntax

```
isgreaterequal(x, y)
```

**Parameters:**

- `x`, `y`: floating-point or integers types.


> **Notes:** 
> + The function `isgreaterequal()`is defined with overloads so it works with any mix of arithmetic values.
> + The built-in operator>= for floating-point numbers may raise `FE_INVALID` if one or both of the arguments is NaN. The function `isgreaterequal()` is a "quiet" version of operator>=.

**Return value:**

The `isgreaterequal()` function returns:

- `true` if `x >= y` and neither argument is `NaN`
- `false` otherwise, including when either value is `NaN`

## Example

The following example checks whether one number is greater than another, including a comparison involving `NaN`:

```cpp
#include <iostream>
#include <cmath>

using namespace std;

int main() {
  float x = 5.5;
  int y = 3;
  double z = nan("1");

  cout << boolalpha;
  cout << x << " isgreaterequal to " << y << ": " << isgreaterequal(x, y) << endl;
  cout << y << " isgreaterequal to " << x << ": " << isgreaterequal(y, x) << endl;
  cout << x << " isgreaterequal to " << z << ": " << isgreaterequal(x, z) << " (NaN comparison)" << endl;

  return 0;
}
```

The output of this code is as follows:

```shell
5.5 isgreaterequal to 3: true
3 isgreaterequal to 5.5: false
5.5 isgreaterequal to nan: false
```

## Codebyte Example

The following example is runnable and outputs whether one number is greater than or equal to another using `isgreaterequal()`:

```codebyte/cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
  float a = 2.5;
  float b = 7.3;

  cout << boolalpha;
  cout << a << " isgreaterequal to " << b << ": " << isgreaterequal(a, b) << endl;
  cout << b << " isgreaterequal to " << a << ": " << isgreaterequal(b, a) << endl;

  return 0;
}
```
