---
Title: 'acos()'
Description: 'Returns the inverse cosine of the argument in radians.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`acos()`** function returns the inverse cosine of the argument in radians.

## Syntax

```pseudo
acos(n)
```

## Example 1

Use `acos()` to return the inverse cosine of `0.0`:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 0.0;
  double result;

  result = std::acos(x);

  std::cout << result << " radians" << "\n";
  // Output: 1.5708 radians
}
```

## Codebyte Example

In this example, the `std::acos()` function is applied to the variable `x`, which holds the value `0.0`. The `std::acos()` function returns the inverse cosine (also known as arccosine) of the provided argument.

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 0.0;
  double result = std::acos(x);

  std::cout << "Inverse cosine of " << x << " is " << result << " radians\n";

  return 0;
}
```