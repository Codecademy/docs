---
Title: 'cos()'
Description: 'Returns the cosine of an argument given in radians.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`cos()`** returns the cosine of an argument given in radians.

## Syntax

```pseudo
std::cos(n)
```

## Example

Use `cos()` to return the cosine of `3.1416` radians:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 3.1416;
  double result;

  result = std::cos(x);

  std::cout << "The cosine of " << x << " radians is " << result << "\n";
  // Output: The cosine of 3.1416 radians is -1
}
```

## Codebyte Example

Use `cos()` to return the cosine of `2.5` radians:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 2.5;
  double result;

  result = std::cos(x);

  std::cout << "The cosine of " << x << " radians is " << result << "\n";
}
```