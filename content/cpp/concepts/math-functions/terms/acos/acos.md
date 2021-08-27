---
Title: "acos()"
Description: "Returns the inverse cosine of the argument in radians."
Subjects:
  - "Computer Science"
Tags:
  - "Functions"
  - "Arithmetic"
CatalogContent:
  - "learn-c-plus-plus"
  - "paths/computer-science"
---



Returns the inverse cosine of the argument in radians.

## Syntax

```py
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
