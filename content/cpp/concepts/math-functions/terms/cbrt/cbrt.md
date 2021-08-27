---
Title: "cbrt()"
Description: "Returns the cube root of the argument."
Subjects:
  - "Computer Science"
Tags:
  - "Functions"
  - "Arithmetic"
CatalogContent:
  - "learn-c-plus-plus"
  - "paths/computer-science"
---



Returns the cube root of the argument.

## Syntax

```cpp
std::cbrt(n)
```

## Example 1

Use `cbrt()` to return the cube root of `27`:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 27;
  double result;

  result = std::cbrt(x);

  std::cout << "The cube root of " << x << " is " << result << "\n";
  // Output: The cube root of 27 is 3
}
```
