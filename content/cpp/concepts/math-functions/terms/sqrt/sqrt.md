---
Title: 'sqrt()'
Description: 'Returns square root of the argument.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`sqrt()`** function returns the square root of the argument.

## Syntax

```pseudo
sqrt(x)
```

If the parameter `x` is negative (less than 0), then a domain error will occur.

## Example

The following example uses the `sqrt()` function to find the square root of `4`:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 4;
  double result;

  result = std::sqrt(x);

  std::cout << "The square root of " << x << " is " << result << "\n";
  // Output: The square root of 4 is 2
}
```

## Codebyte Example

The following example is runnable and returns the square root of `9` with the `sqrt()` function:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 9;
  double result;

  result = std::sqrt(x);

  std::cout << "The square root of " << x << " is " << result << "\n";
}
```
