---
Title: 'isless()'
Description: 'Returns true if first argument less than second argument, false otherwise.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Booleans'
  - 'Functions'
  - 'Math'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The C++ **`isless()`** function returns `true` if the first argument is strictly less than the second, and `false` otherwise. It performs a quiet floating-point comparison, never raises exceptions, and returns `false` if either value is `NaN`. The function is defined in the `<cmath>` header.

## Syntax

```pseudo
bool isless(x, y);
```

**Parameters:**

- `x, y`: Floating-point values (`double`, `float`, or `long double`) or integers, which are promoted to floating-point types.

**Return value:**

The `isless()` function returns `true` if `x < y` and both values are valid numbers. Returns `false` if the comparison is `false` or if either argument is `NaN`.

## Example

The following example uses the `isless()` function to compare and determine if the first argument is lesser than the second argument:

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
  bool result;
  int x, y;

  x = 5;
  y = 7;
  result = isless(x, y);
  cout << x << " is less than " << y << ": " << result << endl;

  x = 9;
  y = 3;
  result = isless(x, y);
  cout << x << " is less than " << y << ": " << result << endl;

  double z = nan("1");
  result = isless(x, z);
  cout << x << " is less than nan: " << result << endl;

  return 0;
}
```

This produces the following output:

```shell
5 is less than 7: 1
9 is less than 3: 0
9 is less than nan: 0
```

## Codebyte Example

This example uses `isless()` inside conditional logic to safely compare values, including NaNs:

```codebyte/cpp
#include <iostream>
#include <cmath>
using namespace std;

void compare(double x, double y) {
  if (isless(x, y)) {
    cout << x << " is LESS than " << y << "\n";
  } else if (isless(y, x)) {
    cout << x << " is GREATER than " << y << "\n";
  } else {
    cout << x << " and " << y << " are NOT comparable (possibly NaN)\n";
  }
}

int main() {
  compare(3.0, 7.0);
  compare(9.0, 2.0);
  compare(nan(""), 5.0);
}
```

Use `isless()` in situations where direct comparison operators might behave unpredictably:

- When comparisons may involve `NaN`, since `isless()` guarantees a defined boolean result.
- When writing safe comparison logic that avoids undefined behavior.
- When building math-heavy code such as sorting, filtering, or numerical checks that require robust comparisons.
