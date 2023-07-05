---
Title: 'cbrt()'
Description: 'Returns the cube root of the argument.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`cbrt()`** function returns the cube root of the argument.

## Syntax

```pseudo
std::cbrt(n)
```

## Example

The following example uses the `cbrt()` function to find the cube root of `27`:

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

## Codebyte Example

The following example is runnable and returns the cube root of `8` with the `cbrt()` function:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 8;
  double result;

  result = std::cbrt(x);

  std::cout << "The cube root of " << x << " is " << result << "\n";
}
```