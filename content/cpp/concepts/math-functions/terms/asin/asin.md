---
Title: "asin()"
Description: "Returns the inverse sine of the argument in radians."
Subjects:
  - "Computer Science"
Tags:
  - "Functions"
  - "Arithmetic"
CatalogContent:
  - "learn-c-plus-plus"
  - "paths/computer-science"
---



Returns the inverse sine of the argument in radians.

## Syntax

```py
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
