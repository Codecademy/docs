---
Title: "atan()"
Subjects:
  - "Computer Science"
Tags:
  - "Functions"
  - "Arithmetic"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-c-plus-plus"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

## Definition

Returns the inverse tangent of the argument in radians.

## Syntax

```py
atan(n)
```

## Example 1

Use `atan()` to return the inverse tangent of `0.0`:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 0.0;
  double result;

  result = std::atan(x);

  std::cout << result << " radians" << "\n";
  // Output: 1.5708 radians
}
```