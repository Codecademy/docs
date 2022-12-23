---
Title: 'fdim()'
Description: 'Returns the positive difference between two arguments.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`fdim()`** function returns the positive difference between two arguments.

## Syntax

`cmath` library must be added at the top of the file.

```pseudo
std:fdim(x, y)
```

If the first argument is greater than the second argument `fdim()` returns the first argument minus the second argument, otherwise it returns zero.

## Example

```cpp
double result1;
double result2;

result1 = std::fdim(6, 2); // 4
result2 = std::fdim(4, 8); // 0
```

## Codebyte Example

Use `fdim()` to return the positive difference between `8` and `5`:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 8;
  double y = 5;
  double result1;
  double result2;

  result1 = std::fdim(x, y);
  result2 = std::fdim(y, x);

  std::cout << result1 << "\n";
  std::cout << result2 << "\n";
}
```
