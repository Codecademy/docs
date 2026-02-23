---
Title: 'isgreaterequal()'
Description: 'Determines whether the first floating-point value is greater than or equal to the second, without raising floating-point exceptions.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Functions'
  - 'Math'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`isgreaterequal()`** [function](https://www.codecademy.com/resources/docs/cpp/functions) compares two arithmetic values and returns `true` only when the first is greater than or equal to the second. It never raises floating-point exceptions and always returns `false` if either argument is `NaN`. The function is available through the `<cmath>` header.

## Syntax

```pseudo
isgreaterequal(x, y)
```

**Parameters:**

- `x`, `y`: Floating-point or integer values.

> **Notes:**
>
> - The function `isgreaterequal()` is defined with overloads so it works with any mix of arithmetic values.
> - The built-in operator `>=` for floating-point numbers may raise `FE_INVALID` if one or both of the arguments is `NaN`. The function `isgreaterequal()` is a "quiet" version of operator `>=`.

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
  cout << x << " is greater than or equal to " << y << ": " << isgreaterequal(x, y) << endl;
  cout << y << " is greater than or equal to " << x << ": " << isgreaterequal(y, x) << endl;
  cout << x << " is greater than or equal to " << z << ": " << isgreaterequal(x, z) << " (NaN comparison)" << endl;

  return 0;
}
```

The output for this code is as follows:

```shell
5.5 is greater than or equal to 3: true
3 is greater than or equal to 5.5: false
5.5 is greater than or equal to nan: false (NaN comparison)
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
  cout << a << " is greater than or equal to " << b << ": " << isgreaterequal(a, b) << endl;
  cout << b << " is greater than or equal to " << a << ": " << isgreaterequal(b, a) << endl;

  return 0;
}
```
