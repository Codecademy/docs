---
Title: 'asin()'
Description: 'Returns the inverse sine of the argument in radians.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`asin()`** function returns the inverse sine of the argument in radians.

## Syntax

```pseudo
asin(n)
```

## Example 1

Use `asin()` to return the inverse sine of `0.0`:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 0.0;
  double result;

  result = std::asin(x);

  std::cout << result << " radians" << "\n";
  // Output: 1.5708 radians
}
```

## Codebyte Example

In this example, the `std::asin()` function is applied to the variable `x`, which holds the value `0.5`. The `std::asin()` function returns the inverse sine (also known as arcsine) of the provided argument. The inverse sine of `0.5` is approximately `0.5236` radians

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 0.5;
  double result = std::asin(x);

  std::cout << "Inverse sine of " << x << " is " << result << " radians\n";

  return 0;
}
```