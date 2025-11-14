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

The **`isgreater()`** function performs a strict greater-than comparison between two floating-point values and returns `true` only if the first argument is greater than the second. Unlike the regular `>` operator, `isgreater()` never raises floating-point exceptions and always returns `false` when either argument is NaN (Not-a-Number).

The **`isgreater()`** function compares two floating-point values and returns `true` only when the first is strictly greater than the second. It follows IEEE-754 rules, never raises floating-point exceptions, and always returns false if either argument is `NaN`. Integer inputs are promoted to floating-point. The function is available through the `<cmath>` header.

## Syntax

```pseudo
isgreater(x, y)
```

**Parameters:**

- `x`, `y`: Arithmetic values (integers or floating-point types).

Integer arguments are promoted to the appropriate floating-point type.

**Return value:**

The `isgreater()` function returns:

- `true` if `x > y` and neither argument is `NaN`
- `false` otherwise, including when either value is `NaN`

## Example

The following example checks whether one number is greater than another, including a comparison involving `NaN`:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 10.5;
  double y = 5.2;
  double z = std::nan("1");

  std::cout << std::boolalpha;
  std::cout << "isgreater(x, y): " << std::isgreater(x, y) << std::endl;
  std::cout << "isgreater(x, z): " << std::isgreater(x, z) << " (NaN comparison)" << std::endl;
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
