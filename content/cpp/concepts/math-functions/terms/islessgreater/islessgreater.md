---
Title: 'islessgreater()'
Description: 'Determines if a value is less than or greater than another.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`islessgreater()`** function determines whether a floating-point value is less than or greater than another floating-point value. Unlike the built-in comparison operators (`<` and `>`), this function does not raise `FE_INVALID` exceptions when the arguments are `NaN`.

## Syntax

```pseudo
islessgreater(x, y)
```

The function takes two parameters:

- `x`: A floating-point or integer value to compare.
- `y`: A floating-point or integer value to compare.
**Return value:**

The function returns `true` if the two values are unequal and one is strictly less than or strictly greater than the other. It returns `false` when the values are equal or when either argument is `NaN`.

> **Note:** This function is particularly useful when working with floating-point values that might be `NaN`, as it provides a "quiet" comparison that won't trigger floating-point exceptions.

## Example

In the example below, the `islessgreater()` function compares two floating-point values:

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
  double x = 5.0;
  double y = 10.0;

  cout << "islessgreater(5.0, 10.0): " << islessgreater(x, y) << "\n";
  cout << "islessgreater(10.0, 5.0): " << islessgreater(y, x) << "\n";
  cout << "islessgreater(5.0, 5.0): " << islessgreater(x, x) << "\n";

  return 0;
}
```

This produces the following output:

```shell
islessgreater(5.0, 10.0): 1
islessgreater(10.0, 5.0): 1
islessgreater(5.0, 5.0): 0
```

## Codebyte Example

The example below demonstrates the `islessgreater()` function with different data types and edge cases, including `NaN` values:

```codebyte/cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
  float f1 = 3.14;
  float f2 = 2.71;
  double d1 = 100.0;
  double d2 = 100.0;
  long double ld1 = 1.5L;
  long double ld2 = 2.5L;

  // NaN comparison
  double nan_val = 0.0 / 0.0;
  double normal_val = 5.0;

  cout << "islessgreater(3.14, 2.71): " << islessgreater(f1, f2) << "\n";
  cout << "islessgreater(100.0, 100.0): " << islessgreater(d1, d2) << "\n";
  cout << "islessgreater(1.5L, 2.5L): " << islessgreater(ld1, ld2) << "\n";
  cout << "islessgreater(NaN, 5.0): " << islessgreater(nan_val, normal_val) << "\n";
}
```
