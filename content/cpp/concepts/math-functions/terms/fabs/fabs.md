---
Title: "fabs()"
Description: "Returns the absolute value of the floating point argument."
Subjects:
  - "Computer Science"
Tags:
  - "Functions"
  - "Arithmetic"
CatalogContent:
  - "learn-c-plus-plus"
  - "paths/computer-science"
---



Returns the absolute value of the floating point argument.

## Syntax

```cpp
std:fabs(n)
```

## Example 1

Use `fabs()` to return the absolute value of `-6.5`:

```cpp
#include <iostream>
#include <cmath> 

int main () {
  std::cout << std::fabs(-6.5) << "\n";
}

// Output: 6.5
```
