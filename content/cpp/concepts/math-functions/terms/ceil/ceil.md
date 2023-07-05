---
Title: 'ceil()'
Description: 'Returns the next whole number that is greater than or equal to the argument.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`ceil()`** function returns the next whole number that is greater than or equal to the argument.

## Syntax

```pseudo
std::ceil(n);
```

Argument must be a `double`/`float`/`long double`, and the return value will be same type.

## Example

Use `ceil()` function to round up the double `12.3456`:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double n = 12.3456;
  double result;

  result = std::ceil(n);

  std::cout << "The result is " << result << "!\n";
  // Output: The result is 13!
}
```

## Codebyte Example

Use `ceil()` to round up the double `3.14159`:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double n = 3.14159;
  double result;

  result = std::ceil(n);

  std::cout << "The result is " << result << "!\n";
}
```