---
Title: 'isgreater()'
Description: 'Compares two floating-point values and returns true if the first is strictly greater than the second.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Game Development'
Tags:
  - 'Functions'
  - 'Comparison'
  - 'Math'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`isgreater()`** [function](https://www.codecademy.com/resources/docs/cpp/functions) compares two floating-point values and returns `true` only when the first is strictly greater than the second. It follows IEEE-754 rules, never raises floating-point exceptions, and always returns `false` if either argument is `NaN`. Integer inputs are promoted to floating-point. The function is available through the `<cmath>` header.

## Syntax

```pseudo
isgreater(x, y)
```

**Parameters:**

- `x`, `y`: Arithmetic values (integers or floating-point types).

> **Note:** Integer arguments are promoted to the appropriate floating-point type.

**Return value:**

The `isgreater()` function returns:

- `true` if `x > y` and neither argument is `NaN`
- `false` otherwise, including when either value is `NaN`

## Example

The following example checks whether one number is greater than another, including a comparison involving `NaN`:

```cpp
#include <iostream>
#include <iostream>
#include <cmath>

using namespace std;

int main() {
  double x = 10.5;
  double y = 5.2;
  double z = nan("1");

  cout << boolalpha;
  cout << "isgreater(x, y): " << isgreater(x, y) << endl;
  cout << "isgreater(x, z): " << isgreater(x, z) << " (NaN comparison)" << endl;

  return 0;
}
```

The output of this code is as follows:

```shell
isgreater(x, y): true
isgreater(x, z): false (NaN comparison)
```

## Codebyte Example

The following example is runnable and outputs whether one number is greater than another using `isgreater()`:

```codebyte/cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
  double a = 7.5;
  double b = 9.3;

  cout << boolalpha;
  cout << "isgreater(a, b): " << isgreater(a, b) << endl;
  cout << "isgreater(b, a): " << isgreater(b, a) << endl;

  return 0;
}
```
